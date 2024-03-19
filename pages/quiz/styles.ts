import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")
import { StyleSheet } from 'react-native';
import { colors } from "../../theme/color";

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
    classImage: {
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
    text: {
        color: "#E8E5E5",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 16,
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
    sectionTwoIconDes3: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#9B51E0",
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
    subjectTV1: {
        backgroundColor: "#751016",
        borderRadius: 20,
    },
    subjectTV: {
        backgroundColor: "#292929",
        borderRadius: 20,
    },
    homeSectionThree: {
        marginHorizontal: 20,
        marginBottom: 42,
        marginTop: 30,
    },
    recentBooks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    books: {
        borderRadius: 15,
        marginBottom: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        paddingLeft: 8,
        paddingRight: 33,
        paddingVertical: 10,
    },
    bookNo: {
        borderRadius: 10,
    },
    bookNoT: {
        padding: 7,
        fontSize: 15,
        color: colors.white,
        fontWeight: "500",
    },
    bookName: {
        marginLeft: 15,
        width: 190,
    },
    bookNameT: {
        fontWeight: "500",
        fontSize: 24,
        color: "#EEF0EA",
    },
    bookNameTS: {
        fontWeight: "900",
        fontSize: 10,
        color: "#EEF0EA",
    },
    booksCon: {
        marginTop: 28,
    },
    avi: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 16,
        marginTop: 50,
    },
});
