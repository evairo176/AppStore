import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React from 'react';
import {Image} from 'react-native';
import {Food1, Food2, Food3, Food4, Food5, ImageHome} from '../../assets';
import {FoodCard} from '../../components/molecules';
import {Gap} from '../../components/atoms';

const NewTaste = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const Popular = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const Recommended = () => (
  <View style={{flex: 1, backgroundColor: '#B7683A'}} />
);

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
          color: focused ? '#020202' : '8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'NewTaste', title: 'New Taste'},
    {key: 'Popular', title: 'Popular'},
    {key: 'Recommended', title: 'Recommended'},
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.title}>FoodMarket</Text>
          <Text style={styles.subtitle}>Let’s get some foods</Text>
        </View>
        <Image source={ImageHome} style={styles.profile} />
      </View>
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
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
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
  },
});
