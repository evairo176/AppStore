import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {SignIn, SplashScreen} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <SignIn />
        {/* <SplashScreen /> */}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
