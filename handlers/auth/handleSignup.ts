import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '../../services/auth'
import logger from '../../utils/logger'

export default async function handleSignup(firstName: string, lastName: string, email: string, password1: string, password2: string,) {
    // validate(firstName, lastName, email, password1, password2)

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1,
        passwordConfirm: password2,
    }
    return await auth
        .signup(newUser)
        .then(async res => {
            logger.info(res)
            console.log(res)
            try {
                return {
                    success: true,
                    user: res.user
                }
            } catch (e) {
                logger.error(e)
            }
            return false
        })
}

function validate(firstName: string, lastName: string, email: string, password1: string, password2: string) {
    if (firstName.length < 1) {
        throw new Error("Please enter a valid first name")
    }

    if (lastName.length < 1) {
        throw new Error("Please enter a valid last name")
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRegex)) {
        throw new Error("Please enter a valid email address")
    }

    if (password1.length < 8) {
        throw new Error("Password should be at least 8 characters")
    }

    if (!(password1 === password2)) {
        throw new Error("Passwords do not match")
    }
}