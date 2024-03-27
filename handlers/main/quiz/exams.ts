import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const all = async () => {
    try {
        const token = await AsyncStorage.getItem("@accessToken")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.get(`${HOST}/exams`, {
            headers,
        })
        return data.data.exams
    } catch (error) {
        console.log(error)
    }
}