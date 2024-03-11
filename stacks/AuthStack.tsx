import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'
// import ResetPassword from '../pages/resetPassword/resetPassword'
// import Signout from '../components/Signout';
import Loader from '../components/Loader';
import { useLoading } from '../contexts/LoadingContext';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    const {loading} = useLoading()

    return(
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="signin" component={SignIn}/> */}
                
                <Stack.Screen name="signup" component={SignUp}/>
                {/* <Stack.Screen name="reset-password" component={ResetPassword}/>
                <Stack.Screen name="signout" component={Signout}/> */}
            </Stack.Navigator>
            {loading && <Loader/>}
        </>
    )
}