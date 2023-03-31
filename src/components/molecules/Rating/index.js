import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActiveStar, Star} from '../../../assets';
import {Gap} from '../../atoms';

const Rating = ({rating}) => {
  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<ActiveStar key={i} />);
      } else {
        stars.push(<Star key={i} />);
      }
    }
    return stars;
  };

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStars()}</View>
      <Gap width={10} />
      <Text style={styles.nilai}>{rating}</Text>
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
