import React, {useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {connectSocket, socket} from '../services/socket';

import Challenges from '../pages/Challenges/Challenges';
import CreateChallenge from '../pages/CreateChallenge/CreateChallenge';
import Games from '../pages/Games/Games';
import Profile from '../pages/Profile/Profile';
import EditProfile from "../pages/EditProfile/EditProfile";
import Payment from '../pages/Payment/Payment';
import CounterChallenge from '../pages/CounterChallenge/CounterChallenge';
import ViewChallenge from "../pages/Challenges/ViewChallenge/ViewChallenge";
import ViewGame from "../pages/ViewGame/ViewGame";
import TournamentGameDetails from "../pages/Games/TournamentGames/TournamentGameDetails/TournamentGameDetails";

import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import Loader from '../components/Loader';

import { useAuth } from '../contexts/AuthContext';
import { usePage } from '../contexts/PageContext';
import { useLoading } from '../contexts/LoadingContext';
import { useUser } from "../contexts/UserContext";
import { EventsProviders } from "../contexts/EventsContext";
import ActionButtons from "../components/ActionButtons";
import CreateTournament from "../pages/Tournaments/CreateTournament/CreateTournament";
import Tournaments from "../pages/Tournaments/Tournaments";
import ChatRoom from "../pages/Chat/ChatRoom";
import { userT } from "../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfile from "../pages/Profile/userProfile";
import UserGames from "../pages/Profile/UserGame";
import ChallengeChatRoom from "../pages/Chat/ChallengeChat";

const Stack = createNativeStackNavigator();

export default function MainStack(){
  const {auth} = useAuth();
  const {page} = usePage();
  const {loading} = useLoading();
  const {user, setUser} = useUser();

  // useEffect(() => {
  //   console.log("evnt")
  // }, [events])


  useEffect(()=>{
    if(auth){
      connectSocket(user)
    }    
  }, [auth])

  useEffect(() => {
    const tournamentWinListener = ((tournamentWinEvent:{tournamentTitle:string,
        reward: number, accountBal:number}) => {
      var newUserDetails:userT = {...user!, accountBal:tournamentWinEvent.accountBal}
      AsyncStorage.setItem('@user', JSON.stringify(newUserDetails))
      .then(()=>{
        setUser(newUserDetails)
        Alert.alert(`Congratulations ${user?.username} 🎉🎉`, `You won the ${tournamentWinEvent.tournamentTitle} tournament. \n The sum of $${tournamentWinEvent.reward} has been added to your Gamerslair account.`)
      }).catch((err)=>{
          console.log('unable to update user details')
          Alert.alert('',`Unable to update user details`);
      })
    })
    socket.on('tournamentWin', tournamentWinListener)

    return(() => {
      socket.removeListener("tournamentWin")
    })
  }, [])

  const pagesWithoutActionButtons = [ "tournament", "chat", "Challenge_Chat", "tournament-rules", "challenge", "tournamentDetails", "tournamentGameDetails"];
  const shouldShowActionButtons = auth && !pagesWithoutActionButtons.includes(page);
  const pagesWithoutCustomNavBar = ["chat", "challenge", "Challenge_Chat"];
  const shouldShowBottomNavBar = auth && !pagesWithoutCustomNavBar.includes(page);
  return(
    <EventsProviders>
    <SafeAreaView style={{flex: 1}}>
    {auth && page != "profile" && page != "tournamentDetails" && <Header/>}
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="challenges" component={Challenges}/>
      <Stack.Screen name="create-challenge" component={CreateChallenge}/>  
      <Stack.Screen name="counter-challenge">
        {(props:any) => <CounterChallenge {...props}/>}
      </Stack.Screen>
      <Stack.Screen name="viewChallenge">
        {(props:any) => <ViewChallenge {...props}/>}
      </Stack.Screen>

      <Stack.Screen name="ongoingGames" component={Games}/>  
      <Stack.Screen name="viewGame" >
        {(props:any) => <ViewGame {...props}/>}
      </Stack.Screen>
      <Stack.Screen name="tournamentGameDetails">
        {(props:any) => <TournamentGameDetails {...props}/>}
      </Stack.Screen>

      <Stack.Screen name="profile" component={Profile}/>
      <Stack.Screen name="userProfile" component={UserProfile}/>
      <Stack.Screen name="userGames" component={UserGames}/>
      <Stack.Screen name="edit-profile" component={EditProfile}/>  

      <Stack.Screen name="payment" component={Payment}/>

      <Stack.Screen name="tournaments" component={ Tournaments }/>
      <Stack.Screen name="create-tournament" component={ CreateTournament }/>

      <Stack.Screen name="chatRoom">
        {(props:any) => <ChatRoom {...props}/>}
      </Stack.Screen>

      <Stack.Screen name="Challenge_Chat">
        {(props:any) => <ChallengeChatRoom {...props}/>}
      </Stack.Screen>
    </Stack.Navigator>
    {shouldShowActionButtons && <ActionButtons />}
    {shouldShowBottomNavBar && <BottomNavBar/>}
    {loading && <Loader/>}
    </SafeAreaView>
    </EventsProviders>
  )
}