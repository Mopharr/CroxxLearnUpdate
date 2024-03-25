import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const enroll = async (payload: { name: string, description: string, faculty: string }) => {
    try {
        const token = await AsyncStorage.getItem("@accessToken")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.post(`${HOST}/departments`, {
            headers,
            payload
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}