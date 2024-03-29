import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageSuccess} from '../../assets';
import {Button, Gap} from '../../components/atoms';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageSuccess style={styles.ImageSuccess} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subtitle}>Now you are able to order </Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          title="Find Foods"
          bgColor="#FFC700"
          color="#020202"
          onPress={() => {
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          }}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  ImageSuccess: {
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
