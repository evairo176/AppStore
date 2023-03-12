import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
    <View style={styles.foodContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.insignContainer}>
        <View>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
        <Rating />
      </View>
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  foodContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 8,
    // backgroundColor: '#000',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  insignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
