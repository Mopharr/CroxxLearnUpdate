import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    TextInput,
    ActivityIndicator,
    Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import { useLoading } from "../../contexts/LoadingContext";
import { handleSignin } from "../../handlers/auth/handleSignin";
import { colors } from "../../theme/color";
import styles from "./styles";

const logo = require("../../assets/images/CroxxImage/logo1.png");
const back = require("../../assets/images/CroxxImage/backr.png");


const { height, width } = Dimensions.get("screen");

export default function SignIn() {
    const navigation = useNavigation();
    const { auth, setAuth } = useAuth()
    const { user, setUser } = useUser()
    const { loading, setLoading } = useLoading();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSigninRequest = async () => {
        Keyboard.dismiss();
        setLoading(true);

        try {
            const data: any = await handleSignin(email, password);
            setUser(data.user);
            setAuth(data.success);
            setEmail("");
            setPassword("");
            setError(null);
            navigation.navigate("main", { screen: "home" })
        } catch (err) {
            console.log(err)
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (auth) {
            navigation.navigate("main", { screen: "home" })
        }
    }, [])


    const handleError = (err: any) => {
        if (err.response) {
            switch (err.response.status) {
                case 404:
                    setError("Invalid email address and password");
                    break;
                case 500:
                    setError("A server error occurred, sorry.");
                    break;
                default:
                    setError("Something went wrong.");
            }
        } else {
            setError("Request timed out");
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={styles.screenContentContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ImageBackground source={back} style={styles.backgroundImage}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>
                        Bringing out the <Text style={styles.logoBold}>genius</Text> in you
                    </Text>

                    <Text style={styles.loginText}>Login</Text>
                    {error && <Text style={styles.errorMessage}>{error}</Text>}
                    <View style={styles.AuthInput}>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={styles.textField}
                            placeholder={"Email"}
                            placeholderTextColor={"grey"}
                        />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            style={styles.textField}
                            placeholder={"Password"}
                            placeholderTextColor={"grey"}
                            secureTextEntry={true}
                            onSubmitEditing={handleSigninRequest}
                            returnKeyType="done"
                        />
                        <TouchableOpacity onPress={handleSigninRequest}>
                            <ImageBackground
                                source={require("../../assets/images/CroxxImage/rBtn.png")}
                                style={styles.tapButton}
                            >
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <Text style={styles.btnLo}>Login</Text>
                                )}
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.acc}>
                        Don't have an account?
                        <Text
                            style={styles.signUp}
                            onPress={() => navigation.navigate("auth", { screen: "signup" })}
                        >
                            SignUp
                        </Text>
                    </Text>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    );
}
