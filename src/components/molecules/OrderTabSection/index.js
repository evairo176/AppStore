import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {Food1} from '../../../assets';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const InProgress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ScrollView>
        <ItemListFood
          image={Food1}
          padding={24}
          items={25}
          price={500000}
          type="in-progress"
          onPress={() => navigation.navigate('OrderDetail')}
        />
      </ScrollView>
    </View>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <ScrollView>
        <ItemListFood
          image={Food1}
          padding={24}
          items={21}
          price={700000}
          type="past-orders"
          date="Jun 12, 14:00"
          status="cancelled"
          colorStatus="#D9435E"
        />
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  InProgress: InProgress,
  PastOrder: PastOrder,
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
const OrderTabSection = () => {
  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'InProgress', title: 'In Progress'},
    {key: 'PastOrder', title: 'Past Order'},
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

export default OrderTabSection;

const styles = StyleSheet.create({
  page: {
    paddingTop: 8,
    flex: 1,
  },
});
