import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Dimensions,
  Text,
} from 'react-native';

import React from 'react';
import {Food1, Food2, Food3, Food4, Food5, ImageHome} from '../../assets';

import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {Gap} from '../../components/atoms';

const Home = () => {
  const fawfaw = {height: Dimensions.get('window').height};
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <HomeProfile image={ImageHome} />
        <Gap height={24} />
        <View>
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
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContainer: {
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
  },
});
