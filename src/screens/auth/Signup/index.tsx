import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';

const SignupScreen = ({children, edges}: any) => {
  return (
    <ScreenLayout style={{alignItems: 'center', justifyContent: 'center'}}>
      <CustomText text={'SignupScreen'} size={23} />
    </ScreenLayout>
  );
};

export default SignupScreen;
