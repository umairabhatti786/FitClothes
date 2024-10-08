import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../utils/colors';
import {cartData, likedBookData} from '../../../utils/Data';
import LikedCard from '../Liked/LikedCard';
import CartContainer from './CartContainer';

const CartScreen = () => {
  const renderOrdersItem = ({item}: any) => {
    return <CartContainer data={item} />;
  };
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <CustomHeader />

      <View style={{gap: verticalScale(8), flex: 1}}>
        <FlatList
          data={cartData}
          contentContainerStyle={{gap: verticalScale(15)}}
          renderItem={renderOrdersItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  tabBox: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  tabContainer: {
    height: verticalScale(40),
    width: '100%',
    borderRadius: scale(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
});
