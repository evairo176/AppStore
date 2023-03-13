import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {Food1} from '../../../assets';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const NewTaste = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ScrollView>
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
      </ScrollView>
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ScrollView>
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
      </ScrollView>
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ScrollView>
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
        <ItemListFood
          image={Food1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={4.6}
        />
      </ScrollView>
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
    paddingHorizontal: 24,
  },
});
