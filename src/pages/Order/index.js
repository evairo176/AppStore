import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components/molecules';
import {Gap} from '../../components/atoms';

const Order = () => {
  const isEmpty = false;
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" description="Wait for the best meal" />
          <Gap height={24} />
          <View style={styles.tabContainer}>
            <OrderTabSection  />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
