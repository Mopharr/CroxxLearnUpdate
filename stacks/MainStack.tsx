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
import { Home } from "../pages/home/home";
import { ClassRoom } from "../pages/classRoom/classRoom";
import EditProfile from "../pages/editProfile/editProfile";
import Profile from "../pages/profile/profile";
import { CourseVideo } from "../pages/courseVideo/courseVideo";
import { Lesson } from "../pages/lesson/lesson";
import { Books } from "../pages/books/books";
import { Quiz } from "../pages/quiz/quiz";
import { StartTest } from "../pages/startTest/startTest";
import { Test } from "../pages/test/test";
import { Downloads } from "../pages/download/download";
import { DownloadBooks } from "../pages/downloadBooks/downloadBook";
import { Summary } from "../pages/summary/summary";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  // const { auth } = useAuth();
  const { page } = usePage();
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
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="classRoom" component={ClassRoom} />
        <Stack.Screen name="editProfile" component={EditProfile} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="courseVideo" component={CourseVideo} />
        <Stack.Screen name="lesson" component={Lesson} />
        <Stack.Screen name="books" component={Books} />
        <Stack.Screen name="quiz" component={Quiz} />
        <Stack.Screen name="startTest" component={StartTest} />
        <Stack.Screen name="test" component={Test} />
        <Stack.Screen name="download" component={Downloads} />
        <Stack.Screen name="downloadbook" component={DownloadBooks} />
        <Stack.Screen name="summary" component={Summary} />

      </Stack.Navigator>
      {/* {shouldShowActionButtons && <ActionButtons />} */}
       <BottomNavBar />
      {loading && <Loader />}
    </SafeAreaView>
  )
}