import axios from "axios"
// import { HOST} from "@env"
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

const signin = async (payload: { email: string, password: string }) => {
    console.log(HOST, 'hdhd')
    const request = axios.post(`${HOST}/users/login`, payload)
    const res = await request;
    return res.data
}

const signinWithFaceId = async (payload: { email: string }) => {
    const request = axios.post(`${HOST}/api/auth/signinwithfaceid`, payload)
    const res = await request;
    return res.data
}



const enroll = async (payload: { matric_no: string, faculty: string, department: string }) => {
    const request = axios.post(`${HOST}/users/enroll`, payload)
    const res = await request;
    return res.data
}


const signup = async (payload: { firstName: string, lastName: string, email: string, password: string, passwordConfirm: string }) => {
    const request = axios.post(`${HOST}/users/signup`, payload)
    const res = await request;
    return res.data
}

const forgot_password = async (payload: { email: string }) => {
    const request = axios.post(`${HOST}/users/forgotPassword`, payload)
    const res = await request
    return res.data
}

export default { signin, signup, signinWithFaceId, enroll, forgot_password, }