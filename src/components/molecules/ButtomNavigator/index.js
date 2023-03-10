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

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      if (focus === true) {
        return <ActiveHome />;
      } else {
        return <Home />;
      }
    case 'Order':
      if (focus === true) {
        return <ActiveCart />;
      } else {
        return <Cart />;
      }

    case 'Profile':
      if (focus === true) {
        return <ActiveProfile />;
      } else {
        return <Profile />;
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
            <Icon label={label} focus={isFocused} />
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
    paddingTop: 15,
    paddingBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
