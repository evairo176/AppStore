import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({title, bgColor, color}) => {
  return (
    <View style={styles.container(bgColor)}>
      <Text style={styles.button(color)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    padding: 12,
    borderRadius: 8,
  }),
  button: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
