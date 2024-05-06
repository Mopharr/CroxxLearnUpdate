import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'
import ResetPassword from '../pages/resetPassword/resetPassword'
// import Signout from '../components/Signout';
import Loader from '../components/Loader';
import { useLoading } from '../contexts/LoadingContext';
import { SchoolDetails } from '../pages/schoolDetails/schoolDetails';
import OnboardingScreen from '../pages/OnboardingScreen/OnboardingScreen';
import { SelectStudy } from '../pages/seleteStudy/seleteStudy';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    const {loading} = useLoading()
    const [first, setFirst] = useState(true)

    useEffect(() => {
        const checkStorage = async () => {
            const storage = await AsyncStorage.getItem("@first")
            if (storage) {
                setFirst(false)
            } else {
                await AsyncStorage.setItem("@first", "1")
            }
        }
        checkStorage()
        console.log(first)
    }, [])

    return(
        <>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                {first? <Stack.Screen name="onboardScreen" component={OnboardingScreen} />:<Stack.Screen name="signin" component={SignIn}/>}
                <Stack.Screen name="signup" component={SignUp}/>
                <Stack.Screen name="selectStudy" component={SelectStudy}/>
                <Stack.Screen name="schoolDetails" component={SchoolDetails}/>
                <Stack.Screen name="reset-password" component={ResetPassword}/>
                
                {/* <Stack.Screen name="signout" component={Signout}/> */}
            </Stack.Navigator>
            {loading && <Loader/>}
        </>
    )
}
