import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextError} from '../../components/molecules';
import {TextInput, Button, Gap} from '../../components/atoms';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

const formSchema = Yup.object({
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().required('Lokasi is required'),
});
const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const storeData = useSelector(store => store?.users);
  console.log('state', storeData);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

  return (
    <View style={styles.page}>
      <Header title="Sign In" description="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          title="Email"
          placeholder="Type Your Email Address"
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <TextError value={formik.errors.email} />
        ) : (
          ''
        )}
        <Gap height={16} />
        <TextInput
          title="Password"
          placeholder="Type Your Password"
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <TextError value={formik.errors.password} />
        ) : (
          ''
        )}
        <Gap height={24} />
        <Button
          title="Sign In"
          bgColor="#FFC700"
          color="#020202"
          onPress={formik.handleSubmit}
        />
        <Gap height={12} />
        <Button
          title="Create New Account"
          bgColor="#8D92A3"
          color="#FFFFFF"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingTop: 26,
    backgroundColor: 'white',
    flex: 1,
  },
});
