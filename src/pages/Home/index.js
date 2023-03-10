import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Food1, Food2, Food3, Food4, Food5, ImageHome} from '../../assets';
import {FoodCard} from '../../components/molecules';
import {Gap} from '../../components/atoms';

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
      <Gap height={24} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardContainer}>
          <Gap width={24} />
          <FoodCard image={Food1} />
          <FoodCard image={Food2} />
          <FoodCard image={Food3} />
          <FoodCard image={Food4} />
          <FoodCard image={Food5} />
        </View>
      </ScrollView>
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
  foodCardContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});
