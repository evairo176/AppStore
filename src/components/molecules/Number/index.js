import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const index = ({number, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={number}
        decimalSeparator="."
        decimalScale={1}
        displayType="text"
        fixedDecimalScale
        renderText={value => <Text style={style}>{value}</Text>}
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
        renderText={value => <Text style={style}>{value}</Text>}
      />
    );
  }
};

export default index;

const styles = StyleSheet.create({});
