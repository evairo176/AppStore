import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, ItemListFood, ItemValue} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {Food2} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Header
          title="Payment"
          description="You deserve better meal"
          onBack={() => navigation.navigate('Order')}
        />
        <Gap height={24} />
        <View style={styles.orderDetailContainer}>
          <Text style={styles.title}>Item Ordered</Text>
          <ItemListFood
            image={Food2}
            item={15}
            padding={0}
            type="order-summary"
          />
          <Text style={styles.title}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            color="#1ABC9C"
          />
        </View>
        <Gap height={24} />
        <View style={styles.orderUserContainer}>
          <Text style={styles.title}>Deliver to:</Text>
          <ItemValue label="Name" value="Angga Risky" />
          <ItemValue label="Phone No." value="0822 0819 9688" />
          <ItemValue label="Address" value="Setra Duta Palima" />
          <ItemValue label="House No." value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <Gap height={24} />
        <View style={styles.orderUserContainer}>
          <Text style={styles.title}>Order Status:</Text>
          <ItemValue label="#FM209391" value="Paid" color="#1ABC9C" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel My Order"
            bgColor="#D9435E"
            color="#ffff"
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  orderDetailContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  orderUserContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    lineHeight: 21,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
});
