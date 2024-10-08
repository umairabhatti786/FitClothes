import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appStyles} from '../../utils/AppStyles';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../CustomText';
import { font } from '../../utils/font';
type Props = {
    title?:string

};

const TopHeader = ({title}: Props) => {
  const navigation: any = useNavigation();
  return (
    <View style={{...appStyles.row, gap: scale(3)}}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.box}>
      <Image
        style={{
          width: scale(20),
          height: scale(20),
        }}
        resizeMode="contain"
        source={images.left_arrow}
      />
    </TouchableOpacity>

    <CustomText
    fontWeight='600'
    fontFam={font.WorkSans_SemiBold}
     text={title} size={20} />

  </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  box: {
    width: scale(30),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
