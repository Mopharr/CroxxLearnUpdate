import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';
const { height, width } = Dimensions.get("screen")

export default StyleSheet.create({
    classroomHeader: {
        backgroundColor: colors.blackBackground,
        height,
        width,
    },
    downNavigationContainer: {
        position: "absolute",
        bottom: "0%",
        left: "5%",
    },
    ClassImage: {
        height: 150,
    },
    ImageContent: {
        paddingTop: 71,
    },
    textIM: {
        color: "#E8E5E5",
        fontSize: 32,
        fontWeight: "800",
        textAlign: "center",
    },
    textIMC: {
        paddingHorizontal: 88,
    },
    sec: {
        // marginTop: 30,
    },
    exo: {
        width: "95%",
        resizeMode: "repeat",
        height: 200,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    time: {
        color: "#E8E5E5",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "left",
        marginTop: 20,
        width: "75%",
    },
    sAns: {
        color: "#E8E5E5",
        fontSize: 14,
        fontWeight: "300",
        textAlign: "center",
    },
    num: {
        backgroundColor: "#363434",
        width: 100,
        height: 30,
        marginRight: "auto",
        marginLeft: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
    },
    qNum: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
});
