import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
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
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput title="Full Name" placeholder="Type Your Full Name" />
        <Gap height={16} />
        <TextInput title="Email" placeholder="Type Your Email Address" />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type Your Password" />
        <Gap height={24} />
        <Button
          title="Continue"
          bgColor="#FFC700"
          color="#020202"
          onPress={() => {
            navigation.navigate('SignUpAddress');
          }}
        />
      </View>
    </View>
  );
};

export default SignUp;

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
