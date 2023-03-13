import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemValue = ({label, value, color = '#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(color)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    lineHeight: 21,
  },
  value: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color,
    lineHeight: 21,
  }),
});
