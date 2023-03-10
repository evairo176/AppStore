import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {ImageHome} from '../../assets';

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.title}>FoodMarket</Text>
          <Text style={styles.subtitle}>Let’s get some foods</Text>
        </View>
        <Image source={ImageHome} style={styles.profile} />
      </View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
