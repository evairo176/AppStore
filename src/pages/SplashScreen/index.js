import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.bg}>
      <Logo />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    marginTop: 15,
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});

export default SplashScreen;
