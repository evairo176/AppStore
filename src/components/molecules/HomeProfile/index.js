import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData} from '../../../utils/storage';
import {Food1} from '../../../assets';

const HomeProfile = ({image}) => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    getData('userProfile').then(res => {
      setPhoto({
        uri: res?.profile_photo_url,
      });
    });
  }, []);

  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.subtitle}>Let’s get some foods</Text>
      </View>
      <Image source={photo ? photo : Food1} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

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
