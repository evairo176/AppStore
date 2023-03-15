import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/store';
// import {SignIn, SplashScreen} from './pages';

import Router from './router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Router />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
