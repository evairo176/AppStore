import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowRight} from '../../../assets';

const ItemListMenu = ({label}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.label}>{label}</Text>
      <ArrowRight />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
