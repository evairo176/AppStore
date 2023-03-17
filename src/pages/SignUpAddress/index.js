import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, SelectOption, TextInput} from '../../components/atoms';
import {Header, TextError} from '../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {setLoading} from '../../redux/action/GlobalAction';
import {signUpAction} from '../../redux/action/AuthAction';

const formSchema = Yup.object({
  address: Yup.string().required('address is required'),
  houseNumber: Yup.string().required('houseNumber is required'),
  phoneNumber: Yup.string().required('phoneNumber confirmation is required'),
  // city: Yup.string().required('city is required'),
});

const SignUpAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const setRegister = useSelector(store => store?.auth);
  const storePhoto = useSelector(store => store?.photo);

  const formik = useFormik({
    initialValues: {
      address: '',
      city: '',
      houseNumber: '',
      phoneNumber: '',
    },
    onSubmit: async values => {
      const form = {
        ...setRegister,
        ...values,
      };

      dispatch(setLoading(true));
      dispatch(signUpAction(form, storePhoto, navigation));
    },
    validationSchema: formSchema,
  });

  return (
    <View style={styles.page}>
      <Header
        title="Address"
        description="Make sure it’s valid"
        onBack={() => {
          navigation.navigate('SignUp');
        }}
      />
      <View style={styles.container}>
        <TextInput
          title="Phone No."
          placeholder="Type your phone number"
          onChangeText={formik.handleChange('address')}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <TextError value={formik.errors.address} />
        ) : (
          ''
        )}
        <Gap height={16} />
        <TextInput
          title="Address"
          placeholder="Type your address"
          onChangeText={formik.handleChange('houseNumber')}
          value={formik.values.houseNumber}
        />
        {formik.touched.houseNumber && formik.errors.houseNumber ? (
          <TextError value={formik.errors.houseNumber} />
        ) : (
          ''
        )}
        <Gap height={16} />
        <TextInput
          title="House No."
          placeholder="Type your house number"
          onChangeText={formik.handleChange('phoneNumber')}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.fullphoneNumbername ? (
          <TextError value={formik.errors.phoneNumber} />
        ) : (
          ''
        )}
        <Gap height={16} />
        <SelectOption
          title="City."
          onSelectChange={formik.handleChange('city')}
          value={formik.values.city}
        />
        <Gap height={24} />
        <Button
          title="Sign Up Now"
          bgColor="#FFC700"
          color="#020202"
          onPress={formik.handleSubmit}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

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
