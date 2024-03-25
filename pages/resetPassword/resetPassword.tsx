import React, { useState } from "react"
// import styles from "./styles"
import { useNavigation } from '@react-navigation/native'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground,
    ActivityIndicator,
    Dimensions,
    Platform,
    Image,
    Keyboard
} from 'react-native'
import Container, { Toast } from "toastify-react-native"
import { colors } from "../../theme/color"
import { useLoading } from "../../contexts/LoadingContext"
import auth from "../../services/auth"


const logo = require("../../assets/images/CroxxImage/logo1.png")
const back = require("../../assets/images/CroxxImage/backr.png")

const { height, width } = Dimensions.get("screen")

export default function ResetPassword() {
    const navigation = useNavigation()
    const [email, setEmail] = useState<string>('')
    const { loading, setLoading } = useLoading()

    const reset = async (emailP: string) => {
        Keyboard.dismiss();
        setLoading(true);

        try {
            const data: any = await auth.forgot_password({ email: emailP });
            if (data.status == "success") {
                navigation.navigate("auth", { screen: "signin" })
            }
        } catch (err) {

        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={styles.screenContentContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Container position="top" />

                <ImageBackground source={back} imageStyle={styles.backgroundImage}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>
                        Bringing out the <Text style={styles.logoBold}>genius</Text> in you
                    </Text>

                    <Text style={styles.loginText}>Forgot Password</Text>
                    <View style={styles.AuthInput}>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={styles.textField}
                            placeholder={"Email"}
                            placeholderTextColor={"grey"}
                        />

                        <TouchableOpacity onPress={() => reset(email)}>
                            <ImageBackground
                                source={require("../../assets/images/CroxxImage/rBtn.png")}
                                style={styles.tapButton}
                            >
                                {loading ? (
                                    <ActivityIndicator
                                        size="small"
                                        color="#fff"
                                        style={{
                                            alignContent: "center",
                                        }}
                                    />
                                ) : (
                                    <Text style={styles.btnLo}>Reset</Text>
                                )}
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
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
        backgroundColor: "#fff",
        paddingTop: 30,
        paddingBottom: 20,
        width: "100%",
    },
    textField: {
        color: "white",
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
    stater: {
        color: "#fff",
        fontSize: 42,
        fontStyle: "normal",
        fontWeight: "700",
        textAlign: "left",
        marginTop: 100,
        marginLeft: "auto",
        marginRight: "auto",
        width: 223,
        lineHeight: 50,
    },
    staterText: {
        color: "#7EAA00",
        fontSize: 63,
        fontStyle: "normal",
        fontWeight: "700",
        textAlign: "left",
        lineHeight: 80,
        marginLeft: "auto",
        marginRight: "auto",
        width: 223,
        marginBottom: 30,
    },
    or: {
        fontWeight: "400",
        fontSize: 14,
        color: "#fff",
        fontStyle: "normal",
        textAlign: "center",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginTop: 10,
    },
    ic: {
        backgroundColor: "rgba(88, 84, 84, 0.5)",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
    },
    apple: {
        color: "grey",
    },
    logo: {
        width: 300,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
    }
});
