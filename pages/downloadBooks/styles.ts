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
        alignItems: "center",
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
        marginLeft: 22,
        width: 230,
    },
    bookNameT: {
        fontWeight: "500",
        fontSize: 15,
        color: "#EEF0EA",
    },
    bookNameTS: {
        fontWeight: "900",
        fontSize: 10,
        color: "#EEF0EA",
    },
    bookIcon: {
        backgroundColor: "#2B2929",
        borderRadius: 20,
    },
    booksCon: {
        marginTop: 28,
    },
    iconE: {
        padding: 8,
    },
});
