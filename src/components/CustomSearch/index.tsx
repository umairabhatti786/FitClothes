import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { font } from "../../utils/font";

type Props = {
  placeholder?: string;
  navigation?: any;
  value?: any;
  onPressClose?: any;
  backgroundColor?: string;
  width?: any;
  isCross?: any;
  height?: any;
  onChangeText?: (text:any) => void;
  onFocus?: () => void;
  leftSource?: any;
  onBack?: () => void;

  
};

const CustomSearch = ({
  placeholder,
  onChangeText,
  navigation,
  value,
  onPressClose,
  backgroundColor,
  width,
  isCross,
  height,
  onFocus,
  leftSource,
  onBack
}: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width || "100%",
        backgroundColor: backgroundColor || colors.white,
        height: verticalScale(height || 39),
        paddingHorizontal: scale(15),
        borderRadius: scale(8),
      }}
    >
      <View
        style={{
          flex: 1,
          gap: scale(10),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
       

        <TextInput
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: font.WorkSans_Regular,
            padding: 0,
            color:colors.black
          }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholderTextColor={colors.grey}
        />
      </View>
      <Image
            source={leftSource || images.search}
            resizeMode="contain"
            style={{
              width: scale(18),
              height: scale(18),
            }}
          />
    </View>
  );
};
export default CustomSearch;

const style = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  img: { width: 23, height: 23 },
});
