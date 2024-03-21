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
    textV: {
        color: "#E8E5E5",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        paddingLeft: 7,
    },
    textIMC: {
        paddingHorizontal: 88,
    },
    searchBarContainer: {
        marginTop: 35,
        marginHorizontal: 65,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.lightGrey,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 16,
    },
    sectionTwo: {
        marginVertical: 24,
        width,
    },
    sectionTwoIcon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 79,
        gap: 20,
    },
    commonIconStyles: {
        padding: 10,
        borderRadius: 15,
    },
    sectionTwoIcon1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D0212C",
        padding: 10,
        borderRadius: 15,
    },
    sectionTwoIconDes2: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#3200E0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subject: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width,
        marginLeft: 19,
        marginRight: 55,
        marginTop: 19,
    },
    subjectT: {
        color: "#E8E5E5",
        fontSize: 14,
        fontWeight: "500",
        padding: 15,
    },
    vid: {
        position: "relative",
    },
    play: {
        position: "absolute",
        top: "25%",
        left: "27%",
    },
    subjectTV1: {
        backgroundColor: "#751016",
        borderRadius: 20,
    },
    subjectTV: {
        backgroundColor: "#292929",
        borderRadius: 20,
    },
    topicWrap: {
        marginHorizontal: 20,
    },
    topics: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 21,
        marginTop: 20,
        paddingHorizontal: 14,
        paddingTop: 11,
        backgroundColor: "#343333",
        paddingBottom: 28,
    },
    topicContainer: {},
    topicNameView: {
        backgroundColor: "rgba(94, 91, 91, 0.33)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 15,
        marginBottom: 10,
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
    },
    retxt: {
        color: "#AFACAC",
    },
});
