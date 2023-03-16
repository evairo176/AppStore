import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, SelectOption, TextInput} from '../../components/atoms';
import {Header, TextError} from '../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {globalAction} from '../../redux/slices/GlobalSlices';

const formSchema = Yup.object({
  address: Yup.string().required('address is required'),
  houseNumber: Yup.string().required('houseNumber is required'),
  phoneNumber: Yup.string().required('phoneNumber confirmation is required'),
  // city: Yup.string().required('city is required'),
});

const SignUpAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const setRegister = useSelector(store => store?.auth);

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
      dispatch(globalAction({type: 'SET_LOADING', value: true}));
      const url = `https://foodmarket-backend.buildwithangga.id/api/register`;
      await axios
        .post(url, form)
        .then(result => {
          console.log(result);
          dispatch(globalAction({type: 'SET_LOADING', value: false}));
          showToast('Create account successfully', 'success');
          navigation.replace('SuccessSignUp');
        })
        .catch(err => {
          console.log(err);
          dispatch(globalAction({type: 'SET_LOADING', value: false}));
          showToast(err?.response?.data?.message);
        });
    },
    validationSchema: formSchema,
  });

  const showToast = (message, type) => {
    showMessage({
      message: message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
  };

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
