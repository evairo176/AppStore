import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {Food1} from '../../../assets';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action/HomeAction';

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector(store => store?.home);
  const {newTaste} = storeData;

  // console.log(newTaste);

  useEffect(() => {
    const getNewTaste = async () => {
      dispatch(await getFoodDataByTypes('new_food'));
    };

    getNewTaste();
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <ScrollView>
        {newTaste?.map((row, key) => {
          return (
            <ItemListFood
              key={key}
              type="product"
              image={{uri: row?.picturePath}}
              name={row?.name}
              price={row?.price}
              rating={row?.rate}
              padding={24}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector(store => store?.home);
  const {popular} = storeData;

  // console.log(newTaste);

  useEffect(() => {
    const getNewTaste = async () => {
      dispatch(await getFoodDataByTypes('popular'));
    };

    getNewTaste();
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <ScrollView>
        {popular?.map((row, key) => {
          return (
            <ItemListFood
              key={key}
              type="product"
              image={{uri: row?.picturePath}}
              name={row?.name}
              price={row?.price}
              rating={row?.rate}
              padding={24}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector(store => store?.home);
  const {recommended} = storeData;

  useEffect(() => {
    const getNewTaste = async () => {
      dispatch(await getFoodDataByTypes('recommended'));
    };

    getNewTaste();
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <View style={styles.itemListContainer}>
        <ScrollView>
          {recommended?.map((row, key) => {
            return (
              <ItemListFood
                key={key}
                type="product"
                image={{uri: row?.picturePath}}
                name={row?.name}
                price={row?.price}
                rating={row?.rate}
                padding={24}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const renderScene = SceneMap({
  NewTaste: NewTaste,
  Popular: Popular,
  Recommended: Recommended,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 14,
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);
const HomeTabSection = () => {
  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'NewTaste', title: 'New Taste'},
    {key: 'Popular', title: 'Popular'},
    {key: 'Recommended', title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      styles={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  page: {
    paddingTop: 8,
    flex: 1,
  },
});
