import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, SelectOption, TextInput} from '../../components/atoms';
import {Header, TextError} from '../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import {globalAction} from '../../redux/slices/GlobalSlices';
import {showMessage} from '../../utils';

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
  console.log(storePhoto);

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

          if (storePhoto.isUploadPhoto) {
            const photoForUpload = new FormData();
            photoForUpload.append('file', storePhoto);

            axios
              .post(
                `https://foodmarket-backend.buildwithangga.id/api/user/photo`,
                photoForUpload,
                {
                  headers: {
                    Authorization: `${result.data.data.token_type} ${result.data.data.access_token}`,
                    'Content-Type': `multipart/form-data`,
                  },
                },
              )
              .then(resUpload => {
                console.log(resUpload);
              })
              .catch(errUpload => {
                console.log(errUpload);
                showMessage('Upload error');
              });
          }

          dispatch(globalAction({type: 'SET_LOADING', value: false}));
          showMessage('Create account successfully', 'success');
          navigation.replace('SuccessSignUp');
        })
        .catch(err => {
          console.log(err);
          dispatch(globalAction({type: 'SET_LOADING', value: false}));
          showMessage(err?.response?.data?.message);
        });
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
