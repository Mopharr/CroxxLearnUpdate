import axios from "axios"
// import { HOST} from "@env"
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

const signin = async (payload: { email: string, password: string }) => {
    console.log(HOST)
    const request = axios.post(`${HOST}/users/login`, payload)
    const res = await request;
    return res.data
}

const signinWithFaceId = async (payload: { email: string }) => {
    const request = axios.post(`${HOST}/api/auth/signinwithfaceid`, payload)
    const res = await request;
    return res.data
}

const signup = async (payload: { username: string, email: string, password: string }) => {
    const request = axios.post(`${HOST}/api/auth/signup`, payload)
    const res = await request;
    return res.data
}

export default { signin, signup, signinWithFaceId }