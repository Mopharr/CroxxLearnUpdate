import React, { useState } from "react";
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

const logo = require("../../assets/images/CroxxImage/logo1.png");
const back = require("../../assets/images/CroxxImage/backr.png");

const { height, width } = Dimensions.get("screen");

export default function SignIn() {
    const navigation = useNavigation();
    const { setAuth } = useAuth();
    const { setUser } = useUser();
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
        } catch (err) {
            console.log(err)
              handleError(err);
        } finally {
            setLoading(false);
        }
    };

      const handleError = (err:any) => {
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
                behavior={Platform.OS === "ios" ? "padding" : "height"}
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
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenContentContainer: {
        flex: 1,
        backgroundColor: "#000",
        height,
        width,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover",
        width,
        height,
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: "contain",
        marginTop: 150,
    },
    logoText: {
        textAlign: "center",
        color: "#A8A8A8",
        fontSize: 15,
        marginTop: -30,
        marginBottom: 50,
    },
    logoBold: {
        fontWeight: "700",
    },
    loginText: {
        color: "#F2EEF8",
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        marginBottom: 10,
    },
    AuthInput: {
        borderRadius: 31,
        backgroundColor: "#fff", // Change this to your desired background color
        paddingTop: 30,
        paddingBottom: 20,
        width: "96%",
    },
    textField: {
        width: "95%",
        height: 43,
        backgroundColor: "#2E2E2E",
        borderRadius: 16,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10,
        marginBottom: 15,
    },
    tapButton: {
        marginTop: 24,
        width: "75%",
        marginLeft: 80,
        marginRight: "auto",
        height: 48,
        marginBottom: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    btnLo: {
        fontWeight: "800",
        fontSize: 22,
        color: "#fff",
    },
    errorMessage: {
        paddingHorizontal: 12,
        color: "red",
        fontSize: 12,
        marginBottom: 8,
    },
});
