import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'
import ResetPassword from '../pages/resetPassword/resetPassword'
// import Signout from '../components/Signout';
import Loader from '../components/Loader';
import { useLoading } from '../contexts/LoadingContext';
import { SchoolDetails } from '../pages/schoolDetails/schoolDetails';
import OnboardingScreen from '../pages/onboardingScreen/onboardingScreen';
import { SelectStudy } from '../pages/seleteStudy/seleteStudy';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    const {loading} = useLoading()

    return(
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="reset-password" component={ResetPassword}/>
                <Stack.Screen name="signin" component={SignIn}/>
                <Stack.Screen name="signup" component={SignUp}/>
                {/* <Stack.Screen name="onboardScreen" component={OnboardingScreen} />
                <Stack.Screen name="schoolDetails" component={SchoolDetails}/>
                <Stack.Screen name="selectStudy" component={SelectStudy}/> */}
                {/* <Stack.Screen name="signout" component={Signout}/> */}
            </Stack.Navigator>
            {loading && <Loader/>}
        </>
    )
}