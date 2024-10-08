import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import BottomTab from "../BottomTab";
import NotificationsScreen from "../../screens/main/Notifications";
import PrivacyPolicyScreen from "../../screens/main/PrivacyPolicy";
import TermsAndCondirtionsScreen from "../../screens/main/TermsAndCondirtions";
import AboutScreen from "../../screens/main/About";

const AppStack = () => {
  const Stack = createStackNavigator();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     SplashScreen.hide(); // Hide splash screen after two seconds
  //   }, 2000);

  //   return () => clearTimeout(timer); // Clear the timer if the component unmounts
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
           
      <Stack.Screen name={"BottomTab"} component={BottomTab} />
      <Stack.Screen name={"Notifications"} component={NotificationsScreen} />
      <Stack.Screen name={"PrivacyPolicy"} component={PrivacyPolicyScreen} />
      <Stack.Screen name={"TermsAndCondirtions"} component={TermsAndCondirtionsScreen} />
      <Stack.Screen name={"About"} component={AboutScreen} />


    </Stack.Navigator>
  );
};
export default AppStack;
