import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const ItemListFood = ({image, onPress, item, rating, padding}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.foodContainer(padding)}>
        <Image style={styles.image} source={image} />
        <View style={styles.insignContainer}>
          <View>
            <Text style={styles.title}>Soup Bumil</Text>
            <Text style={styles.price}>IDR 289.000</Text>
          </View>
          {item && <Text style={styles.item}>{item} Items</Text>}
          {rating && <Rating rating={rating} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  foodContainer: padding => ({
    flexDirection: 'row',
    paddingHorizontal: padding,
    paddingVertical: 8,
    backgroundColor: 'white',
    alignItems: 'center',
  }),
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
  item: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
