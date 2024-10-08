import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../utils/colors';
import OrderCard from './OrderCard';
import {activeOrdersData, ordersHistoryData} from '../../../utils/Data';

const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState('Active');

  const Tabs = () => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab('Active')}
          activeOpacity={0.5}
          style={{
            ...styles.tabBox,
            backgroundColor:
              activeTab == 'Active' ? colors.primary : 'transparent',
          }}>
          <CustomText
            text={'Active'}
            color={activeTab == 'Active' ? colors.white : colors.grey}
            size={14}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActiveTab('History')}
          style={{
            ...styles.tabBox,
            backgroundColor:
              activeTab == 'History' ? colors.primary : 'transparent',
          }}>
          <CustomText
            text={'History'}
            size={14}
            color={activeTab == 'History' ? colors.white : colors.grey}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderOrdersItem = ({item}: any) => {
    return <OrderCard data={item} />;
  };
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <CustomHeader />
      <Tabs />

      <View style={{gap: verticalScale(8), flex: 1}}>
        <FlatList
          data={activeTab == 'Active' ? activeOrdersData : ordersHistoryData}
          contentContainerStyle={{gap: verticalScale(8)}}
          renderItem={renderOrdersItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default OrdersScreen;

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
