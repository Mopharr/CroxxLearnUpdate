import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import Loader from '../components/Loader';

import { useAuth } from '../contexts/AuthContext';
import { usePage } from '../contexts/PageContext';
import { useLoading } from '../contexts/LoadingContext';
import { useUser } from "../contexts/UserContext";
// import { EventsProviders } from "../contexts/EventsContext";
// import ActionButtons from "../components/ActionButtons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectStudy } from "../pages/seleteStudy/seleteStudy";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  // const { auth } = useAuth();
  // const { page } = usePage();
  const { loading } = useLoading();
  // const { user, setUser } = useUser();

  // useEffect(() => {
  //   console.log("evnt")
  // }, [events])

  // const pagesWithoutActionButtons = ["tournament", "chat", "Challenge_Chat", "tournament-rules", "challenge", "tournamentDetails", "tournamentGameDetails"];
  // const shouldShowActionButtons = auth && !pagesWithoutActionButtons.includes(page);
  // const pagesWithoutCustomNavBar = ["chat", "challenge", "Challenge_Chat"];
  // const shouldShowBottomNavBar = auth && !pagesWithoutCustomNavBar.includes(page);
  return (

    <SafeAreaView style={{ flex: 1 }}>
      {/* {auth && page != "profile" && page != "tournamentDetails" && <Header/>} */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="selectStudy" component={SelectStudy}/>

      </Stack.Navigator>
      {/* {shouldShowActionButtons && <ActionButtons />} */}
       <BottomNavBar />
      {loading && <Loader />}
    </SafeAreaView>
  )
}