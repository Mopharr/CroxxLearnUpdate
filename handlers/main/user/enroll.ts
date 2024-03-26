import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const enroll = async (payload: { matric_no: string, faculty: string, department: string, level: string }) => {
    console.log(payload)
    try {
        // const token = await AsyncStorage.getItem("@accessToken")
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2VmMDE3YTUzZGE3OTVlODc4YjhmNiIsImlhdCI6MTY4NjA0MjQ4NiwiZXhwIjoxNjk2NDEwNDg2fQ.9YR6rJ5h999rLNrW4u57xrvQxPB8uFGuLjgbQ5Nl5x8"
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.post(`${HOST}/users/enroll`, {
            headers,
            payload
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}