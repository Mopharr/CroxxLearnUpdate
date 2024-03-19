import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';
const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    classroomHeader: {
        backgroundColor: colors.blackBackground,
        height,
        width,
    },
    classImage: {
        height: 235,
    },
    imageContent: {
        paddingTop: 91,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "95%",
        marginLeft: "auto",
    },
    video: {
        width: 344,
        height: 217,
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain",
        borderRadius: 20,
    },
    textIM: {
        color: "#E8E5E5",
        fontSize: 32,
        fontWeight: "800",
        textAlign: "center",
        width: "90%",
    },
    sectionTwo: {
        marginVertical: 24,
        width,
    },
    cTop: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "85%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 30,
    },
    course: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: "rgba(94, 91, 91, 0.33)",
    },
    cCon: {
        color: "#95C900",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
    },
    cCon2: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
    },
    count: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },
    countP: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 7,
    },
    ctu: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "400",
        textAlign: "center",
    },
    cCo: {
        color: "#AFACAC",
        fontSize: 9,
        fontWeight: "400",
        textAlign: "center",
    },
    details: {
        marginTop: 30,
        marginRight: "auto",
        marginLeft: "auto",
        width: "85%",
    },
    dT: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    dTo: {
        color: "#C6C6C6",
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    dTo2: {
        color: "#C6C6C6",
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        width: "50%",
    },
    dTo3: {
        color: "#C6C6C6",
        fontSize: 13,
        fontWeight: "400",
        textAlign: "center",
    },
});

export default styles;
