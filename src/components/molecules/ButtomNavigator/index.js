import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Home,
  Cart,
  Profile,
  ActiveHome,
  ActiveCart,
  ActiveProfile,
} from '../../../assets';

const Icon = ({label, focus, onPress}) => {
  switch (label) {
    case 'Home':
      if (focus === true) {
        return (
          <View style={styles.navContainer(focus, onPress)}>
            <ActiveHome />
          </View>
        );
      } else {
        return (
          <View style={styles.navContainer(focus)}>
            <Home />
          </View>
        );
      }
    case 'Order':
      if (focus === true) {
        return (
          <View style={styles.navContainer(focus)}>
            <ActiveCart />
          </View>
        );
      } else {
        return (
          <View style={styles.navContainer(focus)}>
            <Cart />
          </View>
        );
      }

    case 'Profile':
      if (focus === true) {
        return (
          <View style={styles.navContainer(focus)}>
            <ActiveProfile />
          </View>
        );
      } else {
        return (
          <View style={styles.navContainer(focus)}>
            <Profile />
          </View>
        );
      }
  }
};

const ButtonNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.6}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} onPress={onPress} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 20,
  },
  navContainer: focus => ({
    marginTop: focus ? -50 : 0,
    backgroundColor: focus ? 'white' : 'transparent',
    // borderColor: 'grey',
    transition: 'all 0.3 ease-in-out',
    borderRadius: 70,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
