import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {SuccessOrder as ImSuccess} from '../../assets';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImSuccess style={styles.ImageSuccess} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Text style={styles.subtitle}>Just stay at home while we are</Text>
      <Text style={styles.subtitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          title="Order Other Foods"
          bgColor="#FFC700"
          color="#020202"
          onPress={() => {
            navigation.replace('MainApp');
          }}
        />
        <Gap height={12} />
        <Button
          title="View My Order"
          bgColor="#8D92A3"
          color="white"
          onPress={() => {
            navigation.replace('MainApp', {screen: 'Order'});
          }}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  ImageSuccess: {
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
