import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const SelectOption = ({title, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}>
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Yogyakarta" value="Yogyakarta" />
          <Picker.Item label="Papua" value="Papua" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Tasikmalaya" value="Tasikmalaya" />
          <Picker.Item label="Aceh" value="Aceh" />
          <Picker.Item label="Cirebon" value="Cirebon" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectOption;

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
    paddingHorizontal: 2,
    paddingVertical: 0,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
