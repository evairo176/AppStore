import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = () => {
  return (
    <View>
      <Text style={styles.label}>TextInput</Text>
      <Input style={styles.input} placeholder="Type Your Email Address" />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
