import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({title, description, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  description: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
  },
});
