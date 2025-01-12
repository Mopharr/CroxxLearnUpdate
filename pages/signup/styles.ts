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
        marginTop: -30,
        fontSize: 15,
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
        padding: 20,
        marginVertical: 20,
        width
    },
    textField: {
        width: "100%",
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
        marginTop: 30,
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
    },
    stater: {
        color: "#fff",
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "700",
        textAlign: "left",
        marginLeft: "auto",
        marginRight: "auto",
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
    }
})