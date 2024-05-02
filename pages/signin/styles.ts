import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("screen");

export default StyleSheet.create({
    keyboardAvoidingViewStyle: {
        flex: 1,
    },
    innerStyle: {
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
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
        color: "white",
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
    signUp: {
        color: "#BDFF00",
        fontSize: 11,
        fontStyle: "normal",
        fontWeight: "500",
    },
    acc: {
        color: "rgba(255, 255, 255, 0.51)",
        fontSize: 11,
        fontStyle: "normal",
        fontWeight: "500",
        textAlign: "center",
    }
})