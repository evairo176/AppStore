import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Dimensions,
  Text,
} from 'react-native';

import React, {useEffect} from 'react';
import {Food1, Food2, Food3, Food4, Food5, ImageHome} from '../../assets';

import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {Gap} from '../../components/atoms';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action/HomeAction';
import store from '../../redux/store/store';

const Home = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(store => store?.home);
  const {food} = storeData;

  console.log(food);
  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <HomeProfile image={ImageHome} />
      <Gap height={24} />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            {food?.map((row, key) => {
              return (
                <FoodCard
                  key={key}
                  name={row?.name}
                  image={{uri: row?.picturePath}}
                  rating={row?.rate}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
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
