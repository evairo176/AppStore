import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextError = ({value}) => {
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default TextError;

const styles = StyleSheet.create({
  text: {
    color: '#D9435E',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
