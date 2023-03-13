import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Add, Min} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity activeOpacity={0.6}>
        <Min />
      </TouchableOpacity>
      <Text style={styles.counterValue}>14</Text>
      <TouchableOpacity activeOpacity={0.6}>
        <Add />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterValue: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginRight: 10,
    marginLeft: 10,
  },
});
