import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackWhite, Food6} from '../../assets';
import {Counter, Rating} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const FoodDetail = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Food6} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <BackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <View>
              <Counter />
            </View>
          </View>
          <Gap height={16} />
          <Text style={styles.description}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Gap height={16} />
          <Text style={styles.subTitle}>Ingredients:</Text>
          <Text style={styles.subDescription}>
            Seledri, telur, blueberry, madu.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.titlePrice}>Total Price:</Text>
            <Text style={styles.price}>IDR 12.289.000</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Order Now" bgColor="#FFC700" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  back: {
    height: 30,
    width: 30,
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 26,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    lineHeight: 24,
    textAlign: 'justify',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    lineHeight: 21,
  },
  subDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    lineHeight: 21,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: 163,
  },
  titlePrice: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    lineHeight: 21,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    lineHeight: 21,
  },
});
