import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const index = ({number, type}) => {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={number}
        decimalSeparator="."
        decimalScale={1}
        displayType="text"
        fixedDecimalScale
        prefix="IDR "
        renderText={value => <Text>{value}</Text>}
      />
    );
  } else {
    return (
      <NumericFormat
        value={number}
        thousandSeparator="."
        decimalSeparator=","
        displayType="text"
        prefix="IDR "
        renderText={value => <Text>{value}</Text>}
      />
    );
  }
};

export default index;

const styles = StyleSheet.create({});
