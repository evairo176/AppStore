import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {Food1} from '../../../assets';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const navigation = useNavigation();

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(res => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <View style={styles.page}>
      <ItemListMenu label="Edit Profile" />
      <ItemListMenu label="Home Address" />
      <ItemListMenu label="Security" />
      <ItemListMenu label="Payments" />
      <ItemListMenu label="Sign Out" onPress={signOut} />
    </View>
  );
};

const FoodMarket = () => {
  return (
    <View style={styles.page}>
      <ItemListMenu label="Rate App" />
      <ItemListMenu label="Help Center" />
      <ItemListMenu label="Privacy & Policy" />
      <ItemListMenu label="Terms & Conditions" />
    </View>
  );
};

const renderScene = SceneMap({
  Account: Account,
  FoodMarket: FoodMarket,
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
const ProfileTabSection = () => {
  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Account', title: 'Account'},
    {key: 'FoodMarket', title: 'Food Market'},
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

export default ProfileTabSection;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flex: 1,
  },
});
