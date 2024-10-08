import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../utils/colors';
import {likedBookData} from '../../../utils/Data';
import LikedCard from '../Liked/LikedCard';
import DiscountBooks from './DiscountBooks';
import CustomSearch from '../../../components/CustomSearch';
import {appStyles} from '../../../utils/AppStyles';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import BooksCard from '../../../components/BooksCard';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const renderOrdersItem = ({item}: any) => {
    return;
  };
  return (
    <ScreenLayout
      style={{
        gap: verticalScale(15),
      }}>
      <ScrollView
        style={{...appStyles.main}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(20),
          gap: verticalScale(15),
        }}>
        <View style={{paddingHorizontal: scale(20), gap: verticalScale(15)}}>
          <CustomHeader />

          <DiscountBooks />
          <View style={appStyles.rowjustify}>
            <CustomSearch width={'80%'} placeholder="Search" />
            <TouchableOpacity
              style={{
                height: verticalScale(39),
                backgroundColor: colors.primary,
                borderRadius: scale(8),
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={images.filter}
                resizeMode="contain"
                style={{
                  width: scale(20),
                  height: scale(20),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <FlatList
            data={[
              'All',
              'Literature',
              'Journeys',
              'History',
              'Distribution',
              'Careers',
            ]}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: scale(15),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setActiveTab(index)}
                  style={{
                    marginLeft: scale(15),
                    backgroundColor:
                      activeTab == index ? colors.black : colors.white,
                    borderRadius: 999,
                    height: verticalScale(30),
                    paddingHorizontal: scale(20),

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    color={activeTab == index ? colors.white : colors.grey}
                    text={item}
                    size={14}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View>
          <CustomText
            text={'Recommended'}
            color={colors.black}
            fontWeight="600"
            style={{
              marginLeft: scale(15),
              marginBottom: verticalScale(10),
              marginTop: verticalScale(5),
            }}
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />

          <FlatList
            data={likedBookData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: scale(15),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <View style={{marginLeft: scale(15)}}>
                  <BooksCard data={item} />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;

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
