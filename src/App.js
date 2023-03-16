import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store/store';
import FlashMessage from 'react-native-flash-message';
// import {SignIn, SplashScreen} from './pages';

import Router from './router';
import {Loading} from './components/molecules';

const MainApp = () => {
  const storeData = useSelector(store => store?.global);
  const {isLoading} = storeData;
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Router />
        <FlashMessage position="top" />
        {isLoading && <Loading />}
        {/* types success, warning, info and danger */}
      </View>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
