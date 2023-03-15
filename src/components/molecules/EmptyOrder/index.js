import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OrderEmpty} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      {/* <Empty style={styles.ImageSuccess} /> */}
      <OrderEmpty />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subtitle}>Seems like you have not</Text>
      <Text style={styles.subtitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          title="Find Foods"
          bgColor="#FFC700"
          color="#020202"
          onPress={() => {
            navigation.replace('MainApp', {screen: 'Home'});
          }}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
