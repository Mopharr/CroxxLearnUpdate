import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView, Platform, Alert, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Rosario_300Light,
  Rosario_400Regular,
  Rosario_500Medium,
  Rosario_600SemiBold,
  Rosario_700Bold,
  Rosario_300Light_Italic,
  Rosario_400Regular_Italic,
  Rosario_500Medium_Italic,
  Rosario_600SemiBold_Italic,
  Rosario_700Bold_Italic,
} from "@expo-google-fonts/rosario";

import {NavigationContainer, useLinkTo} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Notifications from "expo-notifications";
import SidebarContent from "./stacks/SidebarContent";

// import { baseStyles } from "./style";

// import AuthStack from "./stacks/AuthStack";
// import MainStack from "./stacks/MainStack";

// import { UserContextProvider } from "./contexts/UserContext";
// import { AuthContext } from "./contexts/AuthContext";
// import { PageContextProvider } from "./contexts/PageContext";
// import { StripeProvider } from "@stripe/stripe-react-native";
// import { LoadingContextProvider } from "./contexts/LoadingContext";
// import * as Linking from "expo-linking";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});



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
          <StripeProvider publishableKey="pk_test_51LIAmLFozueojb1JUE6c6euwjP2ClmWm1g1dxyD9cOOpvBCgMkLgClLfXH8xvEeplqPFcYh6granpyBVYD0puaCc00HeNEtsOh">
            <LoadingContextProvider>
              <StatusBar barStyle="light-content" />
              <SafeAreaView
                style={baseStyles.container}
                onLayout={onLayoutRootView}
              >
                <NavigationContainer linking={linking}>
                  {!auth ?
                  (<Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="auth" component={AuthStack} ></Stack.Screen>
                  </Stack.Navigator>):
                  (<Drawer.Navigator
                    drawerContent={(props) => <SidebarContent {...props} />}
                    screenOptions={{
                      drawerPosition: "right",
                      headerShown: false,
                      drawerType: "front",
                      drawerStyle: baseStyles.sidebar,
                      swipeEnabled: false,
                    }}
                  >
                    {/* <Drawer.Screen name="auth" component={AuthStack} /> */}
                    <Drawer.Screen name="main" component={MainStack} />
                  </Drawer.Navigator>)}
                </NavigationContainer>
              </SafeAreaView>
            </LoadingContextProvider>
          </StripeProvider>
        </UserContextProvider>
      </PageContextProvider>
    </AuthContext.Provider>
  );
}