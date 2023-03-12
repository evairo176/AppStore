import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActiveStar, Star} from '../../../assets';
import {Gap} from '../../atoms';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <ActiveStar />
        <ActiveStar />
        <ActiveStar />
        <ActiveStar />
        <Star />
      </View>
      <Gap width={10} />
      <Text style={styles.nilai}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  nilai: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
