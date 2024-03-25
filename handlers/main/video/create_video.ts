import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';
import { useUser } from "../../../contexts/UserContext";

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const create_video = async (payload: { name: string, topic: string, courseCode: string, courseLevel: string, department: string }) => {
    const { user } = useUser()
    try {
        const token = await AsyncStorage.getItem("@accessToken")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.post(`${HOST}/videos`, {
            headers,
            payload
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}