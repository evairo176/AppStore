import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  item,
  rating,
  padding,
  inProgress,
  items,
  price,
  date,
  status,
  colorStatus = '#8D92A3',
  type,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // home page
        return (
          <>
            <View style={styles.insignContainer}>
              <View>
                <Text style={styles.title}>Soup Bumil</Text>
                <Text style={styles.price}>IDR 289.000</Text>
              </View>
              <Rating rating={rating} />
            </View>
          </>
        );
      case 'order-summary':
        // order summary page
        return (
          <>
            <View style={styles.insignContainer}>
              <View>
                <Text style={styles.title}>Soup Bumil</Text>
                <Text style={styles.price}>IDR 289.000</Text>
              </View>
              <Text style={styles.item}>{item} Items</Text>
            </View>
          </>
        );
      case 'in-progress':
        // order in progress tab
        return (
          <>
            <View style={styles.insignContainer}>
              <View>
                <Text style={styles.title}>Soup Bumil</Text>
                <Text style={styles.price}>
                  {items} Items . IDR {price}
                </Text>
              </View>
            </View>
          </>
        );
      case 'past-orders':
        // order past orders tab
        return (
          <>
            <View style={styles.insignContainer}>
              <View>
                <Text style={styles.title}>Soup Bumil</Text>
                <Text style={styles.price}>
                  {items} Items . IDR {price}
                </Text>
              </View>
              <View style={styles.pastOrderContainer}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.status(colorStatus)}>{status}</Text>
              </View>
            </View>
          </>
        );
      default:
        // home page
        return (
          <>
            <View style={styles.insignContainer}>
              <View>
                <Text style={styles.title}>Soup Bumil</Text>
                <Text style={styles.price}>IDR 289.000</Text>
              </View>
              <Rating rating={rating} />
            </View>
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.foodContainer(padding)}>
        <Image style={styles.image} source={image} />
        {renderContent()}
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
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    lineHeight: 15,
  },
  status: color => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: color,
    lineHeight: 15,
  }),
  pastOrderContainer: {
    alignItems: 'center',
  },
});
