import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Header, TextError} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {setRegister} from '../../redux/slices/AuthSlices';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from '../../utils';
import {setPhotoAction} from '../../redux/slices/PhotoSlices';

const formSchema = Yup.object({
  name: Yup.string().required('Fullname is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState('');

  const addPhoto = async () => {
    await launchImageLibrary(
      {
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log('response:', response);

        if (response.didCancel) {
          console.log('user cancelled imaged picker');
          showMessage('user cancelled imaged picker');
        } else if (response.error) {
          console.log('image picker error:', response.error);
          showMessage(response.error);
        } else if (response.customButton) {
          showMessage(response.customButton);
          console.log('custom button', response.customButton);
        } else {
          const source = {uri: response.assets[0].uri};
          const dataImage = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };

          setPhoto(source);
          showMessage('Add photo successfully', 'success');
          dispatch(setPhotoAction({type: 'SET_PHOTO', value: dataImage}));
          dispatch(setPhotoAction({type: 'SET_UPLOAD_STATUS', value: true}));
        }
      },
    );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    onSubmit: values => {
      dispatch(setRegister({type: 'SET_REGISTER', value: values}));
      navigation.navigate('SignUpAddress');
    },
    validationSchema: formSchema,
  });

  return (
    <ScrollView>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          description="Register and eat"
          onBack={() => {
            navigation.navigate('SignIn');
          }}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <Text></Text>
          <TextInput
            title="Full Name"
            placeholder="Type Your Full Name"
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <TextError value={formik.errors.name} />
          ) : (
            ''
          )}
          <Gap height={16} />
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
          <TextInput
            title="Password Confirmation"
            placeholder="Type Your Password Confirmation"
            onChangeText={formik.handleChange('password_confirmation')}
            value={formik.values.password_confirmation}
          />
          {formik.touched.password_confirmation &&
          formik.errors.password_confirmation ? (
            <TextError value={formik.errors.password_confirmation} />
          ) : (
            ''
          )}
          <Gap height={24} />
          <Button
            title="Continue"
            bgColor="#FFC700"
            color="#020202"
            onPress={formik.handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
  },
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingTop: 26,
    backgroundColor: 'white',
    flex: 1,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
    textAlign: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    height: 110,
    width: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
