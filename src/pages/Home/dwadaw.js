import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {Food1} from '../../../assets';

const NewTaste = () => (
  <View style={styles.page}>
    {/* <ScrollView> */}
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    <ItemListFood image={Food1} />
    {/* </ScrollView> */}
  </View>
);

const Popular = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <Text>dwad</Text>
  </View>
);

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
    // tabStyle={{width: 'auto'}}
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
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  page: {
    paddingTop: 8,
    height: 'auto',
  },
});
