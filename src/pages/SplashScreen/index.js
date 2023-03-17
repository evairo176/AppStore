import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';
import {getData} from '../../utils/storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        console.log(res);

        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

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
