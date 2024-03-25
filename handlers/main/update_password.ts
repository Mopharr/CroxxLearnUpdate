import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST;

export const update_password = async (payload: { passwordCurrent: string, password: string, passwordConfirm: string }) => {
    try {
        const token = await AsyncStorage.getItem("@accessToken")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        const data = await axios.patch(`${HOST}/users/updatePassword`, {
            headers,
            payload
        })
        return data.data
    } catch (error) {
        console.log(error)
    }
}