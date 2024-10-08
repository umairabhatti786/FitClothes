import React from 'react';
import {
  ScrollView,
  Text,
  useWindowDimensions,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';
import CustomText from '../CustomText';
import {font} from '../../utils/font';
import {images} from '../../assets/images';

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  modalBackgroundColor?: any;
  onNext?: any;
}

const CustomMenu: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
  modalBackgroundColor,
  onNext,
}) => {
  const windowWidth = useWindowDimensions().width;

  const navigation: any = useNavigation();

  const menuData = [
    {title: 'Sign Up / Login'},
    {title: 'High Discounts'},
    {title: 'Card Discounts'},
    {title: 'Send a gift'},
    {title: 'Request a book'},
    {
      title: 'About',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('About');
        }, 500);
      },
    },
    {
      title: 'Terms of Use',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('TermsAndCondirtions');
        }, 500);
      },
    },
    {
      title: 'Privacy Policy',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('PrivacyPolicy');
        }, 500);
      },
    },
    {title: 'Help & Support'},
  ];
  return (
    <Modal
      style={{
        flex: 1,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modalBackgroundColor,
      }}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      deviceWidth={windowWidth}
      isVisible={isModalVisible}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="transparent"
      customBackdrop={
        <Pressable
          style={{height: '100%', width: '100%'}}
          onPress={() => setModalVisible?.(false)}></Pressable>
      }>
      <View style={styles.container}>
        <View style={{gap: verticalScale(25), alignItems: 'center', flex: 1}}>
          {menuData.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={item.onPress}
                activeOpacity={0.5}
                style={{
                  width: '60%',
                  alignItems: 'center',
                  height: verticalScale(25),
                }}>
                <CustomText
                  text={item?.title}
                  color={colors.primary}
                  size={14}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setModalVisible(false)}
          style={styles.circle}>
          <Image
            style={{width: '50%', height: '50%'}}
            resizeMode="contain"
            source={images.close}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: '35%',
    backgroundColor: colors.dull_white,
    gap: verticalScale(15),
    paddingBottom: verticalScale(50),
  },
  circle: {
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 999,
  },
});

export default CustomMenu;
