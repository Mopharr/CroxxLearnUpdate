import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';
import { useUser } from "../../../contexts/UserContext";

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const update = async (payload: { courseCode: string }) => {
    const { user } = useUser()
    try {
        const token = await AsyncStorage.getItem("@accessToken")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.patch(`${HOST}/course/${user.id}`, {
            headers,
            payload
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}