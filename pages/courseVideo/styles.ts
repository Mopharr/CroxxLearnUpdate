import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../theme/color"
const { height, width } = Dimensions.get("screen")

export default StyleSheet.create({
    classroomHeader: {
        backgroundColor: "#20201F",
        height,
        width,
    },
    coTop: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40,
        marginBottom: 20,
    },
    CoText: {
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "700",
        color: "#fff",
    },
    tutorInfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        flexDirection: "row",
        width: "96%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 15,
    },
    tPro: {
        marginLeft: 30,
    },
    ImBac: {
        width: "100%",
        borderRadius: 30,
        position: "relative",
    },
    ImBacP: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
    tu: {
        fontSize: 24,
        fontWeight: "400",
        color: "#fff",
        marginBottom: -5,
    },
    tN: {
        color: "#263300",
        fontSize: 24,
        fontWeight: "600",
    },
    op: {},
    sectionTwo: {
        marginVertical: 24,
        width,
    },
    ed: {
        width: 29,
        height: 29,
        borderRadius: 100,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    edText: {
        fontSize: 8,
        fontWeight: "500",
        color: "#fff",
    },
    qM: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        marginTop: 15,
    },
    vid: {
        position: "relative",
    },
    play: {
        position: "absolute",
        top: "25%",
        left: "27%",
    },
    topicWrap: {
        marginHorizontal: 20,
    },
    topics: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 21,
        marginTop: 20,
        paddingHorizontal: 14,
        paddingTop: 11,
        backgroundColor: "#343333",
        paddingBottom: 28,
    },
    topicContainer: {
        width: "50%",
    },
    topicNameView: {
        backgroundColor: "rgba(94, 91, 91, 0.33)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 15,
        marginBottom: 10,
        width: 120,
    },
    topicName: {
        color: colors.lemon,
        fontSize: 12,
        fontWeight: "600",
    },
    topicTopic: {
        fontSize: 24,
        fontWeight: "600",
        color: colors.white,
        marginBottom: 6,
        width: "90%",
    },
    topicTutor: {
        fontSize: 15,
        fontWeight: "400",
        color: colors.white,
    },
    tutor: {
        color: colors.lemon,
    },
    stre: {
        marginTop: 23,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    re: {
        marginRight: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    retxt: {
        color: "#AFACAC",
    }
})