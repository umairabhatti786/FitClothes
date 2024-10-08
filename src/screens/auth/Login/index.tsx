import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';

const LoginScreen = ({children, edges}: any) => {
  return (
    <ScreenLayout style={{alignItems: 'center', justifyContent: 'center'}}>
      <CustomText text={'Login'} size={23} />
    </ScreenLayout>
  );
};

export default LoginScreen;
