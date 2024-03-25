import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const single = async (id: string) => {
    try {
        const token = await AsyncStorage.getItem("@accessToken")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.get(`${HOST}/exams/${id}`, {
            headers,
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}