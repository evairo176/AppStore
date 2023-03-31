import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const FoodCard = ({image, name, rating}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Rating rating={rating} />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    overflow: 'hidden',
    marginRight: 24,
    marginBottom: 24,
  },
  contentContainer: {
    padding: 12,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
