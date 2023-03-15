import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets/dummy/index';
import {ProfileTabSection} from '../../components/molecules';
import {Gap} from '../../components/atoms';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.pContainer}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Angga Risky</Text>
        <Text style={styles.email}>wepanda@gmail.com</Text>
        <Gap height={30} />
      </View>
      <Gap height={30} />
      <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  pContainer: {
    backgroundColor: 'white',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    height: 110,
    width: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
