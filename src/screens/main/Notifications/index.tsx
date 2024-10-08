import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import {notificationData} from '../../../utils/Data';
import TopHeader from '../../../components/TopHeader';
import NotificationCard from './NotificationCard';
import {font} from '../../../utils/font';

const NotificationsScreen = () => {
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <TopHeader title="Notifications" />

      <View style={{gap: verticalScale(8), flex: 1}}>
        <FlatList
          data={notificationData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: verticalScale(20)}}
          renderItem={({item, index}) => {
            return (
              <View style={{gap: verticalScale(10)}}>
                <CustomText
                  text={item?.date}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                  size={14}
                />

                {item.notifications.map((it, index) => {
                  return <NotificationCard key={index.toString()} data={it} />;
                })}
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
