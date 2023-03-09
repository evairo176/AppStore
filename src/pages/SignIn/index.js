import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {TextInput, Button, Gap} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" description="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput title="Email" placeholder="Type Your Email Address" />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type Your Password" />
        <Gap height={24} />
        <Button title="Sign In" bgColor="#FFC700" color="#020202" />
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
