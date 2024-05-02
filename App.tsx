import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView, Platform, Alert, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Rosario_700Bold,
} from "@expo-google-fonts/rosario";

import {NavigationContainer, useLinkTo} from "@react-navigation/native";

import { baseStyles } from "./style";

import AuthStack from "./stacks/AuthStack";
// import MainStack from "./stacks/MainStack";

import { UserContextProvider } from "./contexts/UserContext";
import { AuthContext } from "./contexts/AuthContext";
import { PageContextProvider } from "./contexts/PageContext";
// import { StripeProvider } from "@stripe/stripe-react-native";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./stacks/MainStack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



export default function App() {
  let [fontsLoaded] = useFonts({
    Rosario_700Bold,
  });

  const [auth, setAuth] = useState(false)
  const [url, setUrl] = useState()


  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <PageContextProvider>
        <UserContextProvider>
            <LoadingContextProvider>
              <StatusBar barStyle="light-content" />
              <SafeAreaView
                style={baseStyles.container}
                onLayout={onLayoutRootView}
              >
                <NavigationContainer>
                  {!auth ?
                  (<Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="auth" component={AuthStack} />
                  </Stack.Navigator>):
                  (<Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="auth" component={AuthStack} />
                    <Stack.Screen name="main" component={MainStack} />
                  </Stack.Navigator>)}
                </NavigationContainer>
              </SafeAreaView>
            </LoadingContextProvider>
        </UserContextProvider>
      </PageContextProvider>
    </AuthContext.Provider>
  );
}