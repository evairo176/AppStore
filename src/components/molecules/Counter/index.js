import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Add, Min} from '../../../assets';

const Counter = ({setItems, items}) => {
  const increase = () => {
    setItems(items + 1);
  };

  const decrease = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity onPress={() => decrease()} activeOpacity={0.6}>
        <Min />
      </TouchableOpacity>
      <Text style={styles.counterValue}>{items}</Text>
      <TouchableOpacity activeOpacity={0.6} onPress={() => increase()}>
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
