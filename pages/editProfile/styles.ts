import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';
const { height, width } = Dimensions.get("screen")

export default StyleSheet.create({
    main: {
        height,
        backgroundColor: colors.background,
    },
    ImageBackground: {
        width,
        height
    },
    Image: {
        width: 131,
        height: 131,
        borderRadius: 300,
        alignSelf: "center",
    },
    editHeader: {
        marginTop: 93,
        alignSelf: "center",
    },
    editHeaderOne: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    editHeaderIcon: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 7,
        marginRight: 65,
    },
    editImageIcon: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: 30,
        padding: 5,
        bottom: 30,
        left: "58%",
    },
    ProfileText: {
        color: "#FFFFFF",
        fontSize: 27,
        fontWeight: "800",
    },
    profileImageHead: {
        marginTop: 23,
    },
    editName: {
        color: "#FFFFFF82",
        fontSize: 14,
        paddingVertical: 15,
    },
    editNameHeadView: {
        width: 260,
        backgroundColor: "#2E2E2E",
        borderRadius: 16,
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    editNameHead: {
        borderWidth: 3,
        width: 300,
        alignSelf: "center",
        borderColor: "#FFFFFF",
        borderRadius: 31,
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 18,
        marginTop: 15,
    },
    editNameHeadView2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    editNameHeadViewAd: {
        width: 190,
        backgroundColor: "#434AE8",
        borderRadius: 16,
        marginVertical: 22,
        paddingHorizontal: 40,
        alignSelf: "center",
    },
})