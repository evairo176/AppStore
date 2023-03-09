import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, SelectOption, TextInput} from '../../components/atoms';
import {Header} from '../../components/molecules';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        description="Make sure it’s valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput title="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput title="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput title="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <SelectOption title="City." />
        <Gap height={24} />
        <Button
          title="Sign Up Now"
          bgColor="#FFC700"
          color="#020202"
          onPress={() => {
            navigation.replace('SuccessSignUp');
          }}
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
