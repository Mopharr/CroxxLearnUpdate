import React, { useState, useEffect } from "react"
import {
    TextStyle,
    ViewStyle,
    Dimensions,
    Image,
    ImageStyle,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    View,
    TextInput,
    Text,
    Keyboard
} from "react-native"

import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";

import { handleSignin } from "../../handlers/auth/handleSignin"
import { baseStyles } from "../../style"
// import styles from './styles'
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from "../../contexts/UserContext";
import { useLoading } from "../../contexts/LoadingContext";
import { styles } from "./styles";
import { colors } from "../../theme/color"


const logo = require("../../assets/images/CroxxImage/logo1.png")
const back = require("../../assets/images/CroxxImage/backr.png")

const { height, width } = Dimensions.get("screen")

export default function SignIn() {
    const navigation = useNavigation()
    const { auth, setAuth } = useAuth()
    const { user, setUser } = useUser()
    const { loading, setLoading } = useLoading()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState<String | null>(null)

    const signin = async () => {
        Keyboard.dismiss();

        setLoading(true);

        handleSignin(email, password).then(async (data: any) => {
            if (data) {
                setUser(data.user);
                setAuth(data.success);
                setEmail('');
                setPassword('');
                setLoading(false);
            }
        }).catch((err: { response: { status: any; }; }) => {
            if (err.response) {
                switch (err.response.status) {
                    case 404: {
                        setError("Invalid email address and password")
                        break
                    }
                    case 500: {
                        setError("A server error occured, sorry.")
                        break
                    }
                    default: {
                        setError("Something went wrong.")
                        break
                    }
                }
            } else {
                setError("request time out")
            }
            setLoading(false);
            console.log(err)
        })
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={$screenContentContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ImageBackground source={back} style={$container} imageStyle={$backgroundImage}>
                    <Image source={logo} style={$logo} />
                    <Text style={$logoText}>
                        Bringing out the <Text style={$logoBold}>genius</Text> in you
                    </Text>

                    <Text style={$loginText}>Login</Text>
                    {error &&
                        <Text style={baseStyles.errorMessage}>{error}</Text>
                    }
                    <View style={$AuthInput}>
                        <View style={styles.container}>
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                style={$textField}
                                placeholder={'Email'}
                                placeholderTextColor={"grey"}
                            />
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                style={$textField}
                                placeholder={'Password'}
                                placeholderTextColor={"grey"}
                                secureTextEntry={true}
                                onSubmitEditing={signin}
                                returnKeyType="done"
                            />
                        </View>

                        {/* <Text
                            style={$forget}
                            onPress={() => navigation.navigate("Auth", { screen: "forgotPassword" })}
                        >
                            forgot Password?
                        </Text> */}

                        <TouchableOpacity onPress={signin}>
                            <ImageBackground
                                source={require("../../../app/assets/images/CroxxImage/rBtn.png")}
                                style={$tapButton}
                            >
                                {loading ? (
                                    <ActivityIndicator
                                        size="small"
                                        color="#fff"
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        style={{
                                            alignContent: "center",
                                        }}
                                    />
                                ) : (
                                    <Text style={$btnLo}>Login</Text>
                                )}
                            </ImageBackground>
                        </TouchableOpacity>

                        {/* <Text style={$acc}>
                            Don't have an account?
                            <Text
                                style={$signUp}
                                onPress={() => navigation.navigate("Auth", { screen: "signUp" })}
                            >
                                SignUp
                            </Text>
                        </Text> */}
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

const $screenContentContainer: ViewStyle = {
    backgroundColor: "#000",
    height,
    width,
}
const $container: ViewStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
}

const $backgroundImage: ImageStyle = {
    resizeMode: "cover",
    width,
    height,
}
const $logo: ImageStyle = {
    width: 300,
    height: 100,
    resizeMode: "contain",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
}
const $logoText: TextStyle = {
    textAlign: "center",
    color: "#A8A8A8",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: -30,
    marginBottom: 50,
}
const $logoBold: TextStyle = {
    textAlign: "center",
    color: "#A8A8A8",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
    margin: 0,
}

const $AuthInput: ViewStyle = {
    borderRadius: 31,
    // backgroundColor: "rgba(247, 246, 246, 0.24)",
    backgroundColor: "red",
    paddingTop: 30,
    paddingBottom: 20,
    width: "96%",
}

const $loginText: TextStyle = {
    color: "#F2EEF8",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
}
// const $hint: TextStyle = {
//   color: colors.tint,
//   marginBottom: spacing.md,
// }

const $textField: ViewStyle = {
    width: "95%",
    height: 43,
    backgroundColor: "#2E2E2E",
    borderRadius: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
}
const $forget: TextStyle = {
    color: "#BDFF00",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "right",
    marginRight: 10,
}

const $tapButton: ViewStyle = {
    marginTop: 24,
    // backgroundColor: "#D03C3C",
    width: "75%",
    marginLeft: 80,
    marginRight: "auto",
    height: 48,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
}
const $btnLo: TextStyle = {
    fontWeight: "800",
    fontSize: 22,
    color: "#fff",
    fontStyle: "normal",
    marginRight: 50,
}
const $acc: TextStyle = {
    color: "rgba(255, 255, 255, 0.51)",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
}

const $signUp: TextStyle = {
    color: "#BDFF00",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "500",
}
const $emailErr: TextStyle = {
    paddingHorizontal: 12,
    color: colors.error,
    fontSize: 12,
    // fontFamily: "Poppins-Regular",
}
