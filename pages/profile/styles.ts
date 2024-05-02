import { StyleSheet } from "react-native"

export default StyleSheet.create({
    logout: {
        position: "absolute",
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: "#000000",
        alignItems: "center",
        borderRadius: 5,
        zIndex: 20
    },
    CourseReg: {
        height: 203,
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 33,
    },
    Profile: {
        backgroundColor: "#20201F",
        height: "100%",
    },
    ProfileH: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    ProfileH2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 41,
        marginTop: 21,
    },
    ProfileIcon: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: 36,
        padding: 6,
        width: 32,
    },

    ProfileIcon2: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        left: 6,
        padding: 5,
        top: -35,
        width: 25,
    },
    ProfileP: {
        height: 239,
        paddingHorizontal: 20,
        paddingVertical: 23,
    },
    ProfileText: {
        color: "#FFFFFF",
        fontSize: 40,
        fontWeight: "600",
        letterSpacing: 4,
    },
    ProfileTextS: {
        color: "#EECA15",
        fontSize: 14,
        fontWeight: "600",
    },
    ProfileTextSP: {
        color: "#fff",
        fontSize: 21,
        fontWeight: "700",
    },
    StatTextSP: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700",
    },
    downNav: {
        bottom: "0%",
        left: "5%",
        position: "absolute",
        width: "100%",
    },
    learnCategory: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    listSubject: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
        justifyContent: "space-between",
        marginTop: 40,
    },

    stats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
        flexWrap: "wrap",
    },

    stats2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingHorizontal: 0,
        // paddingVertical: 12,
        // flexWrap: "wrap",
        width: 150,
        height: 39,
    },
    listSubjectContainer: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    // listSubject: {
    //     flexDirection: "row", // Assuming you want subjects to be in a row
    //     flexWrap: "wrap",
    // },
    subject: {
        color: "#C9C9C9",
        fontWeight: "400",
        backgroundColor: "rgba(94, 91, 91, 0.56)",
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 15,
        margin: 5, // Add margin for subjects
    },
    tesb: {
        color: "#C9C9C9",
        fontSize: 13,
    },
    text: {
        color: "#EECA15",
        fontSize: 21,
        fontWeight: "700",
    },
})
