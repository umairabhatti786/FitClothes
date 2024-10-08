import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import CustomText from '../CustomText';
import {windowWidth} from '../../utils/Dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
import {font} from '../../utils/font';
type Props = {
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  rightSource?: any;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  multiline?: boolean;
  height?: any;
  width?: any;
  fontSize?: any;
  placeholderTextColor?: any;
  borderWidth?: any;
  borderRadius?: any;
  backgroundColor?: any;
  borderColor?: any;
};

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  rightSource,
  props,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  borderColor,
}: Props) => {
  return (
    <View style={{...props, width: width || '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: scale(10),
          height: verticalScale(height || 39),
          alignItems: 'center',
          borderColor: borderColor || '#E4E6EB',
          borderWidth: borderWidth,
          borderRadius: borderRadius || scale(10),
          backgroundColor: backgroundColor || colors.white,
        }}>
        {leftSource && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Image
              source={leftSource}
              style={{
                width: scale(15),
                height: scale(15),
              }}
              resizeMode={'contain'}
            />
          </View>
        )}
        <TextInput
          value={value}
          editable={editable}
          style={{
            fontSize: fontSize || 14,
            width: rightSource ? windowWidth / 1.4 : windowWidth / 1.2,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: font.WorkSans_Light,
            fontWeight: fontWeight,
            color: color || colors.black,
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor || colors.grey}
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
        {rightSource && (
          <TouchableOpacity
            onPress={onShowPassword}
            activeOpacity={0.6}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Image
              source={rightSource}
              style={{
                width: scale(15),
                height: scale(15),
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <View
          style={{
            marginTop: verticalScale(5),
          }}>
          <CustomText
            fontFam={font.WorkSans_Regular}
            size={12}
            text={error}
            color={colors.red}
          />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
