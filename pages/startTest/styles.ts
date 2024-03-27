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
        height: 235,
    },
    ImageContent: {
        paddingTop: 91,
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
        marginTop: 30,
    },
    text: {
        color: "#E8E5E5",
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    exo: {
        width: 350,
        height: 250,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    topic: {
        color: "#E8E5E5",
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
    },
    time: {
        color: "#E8E5E5",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 20,
    },
    timeSpan: {
        color: "#FED322",
        fontSize: 9,
        fontWeight: "600",
        textAlign: "center",
    },
    btn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
        marginTop: 20,
    },
    cancel: {
        width: 100,
        height: 50,
        backgroundColor: "#C94848",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    start: {
        width: 100,
        height: 50,
        backgroundColor: "#7EAA00",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cancelText: {
        color: "#fff",
        fontSize: 19,
        fontWeight: "700",
        textAlign: "center",
    },
});