import auth from '../../services/auth'
import logger from '../../utils/logger'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function handleSignin(email: string, password: string) {
    let user = {
        email,
        password,
    }
    const response = await auth
        .signin(user)
        .then(async res => {
            try {
                await AsyncStorage.setItem('@userEmail', res.user.email)
                await AsyncStorage.setItem('@accessToken', res.token)
                await AsyncStorage.setItem('@user', JSON.stringify(res.user))
                return {
                    success: true,
                    user: res.user
                }
            } catch (e) {
                logger.error(e)
            }
            return false
        })

    return response
}
