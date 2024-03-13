import { StyleSheet, View } from "react-native"
import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"

const BottomNavBar = () => {
    const navigation = useNavigation()
    const route = useRoute()

    return (
        <View>
            <View style={styles.kq}>
                <View style={styles.kk}>
                    <FontAwesome
                        name="home"
                        size={30}
                        color={route.name === "Home" ? "#BDFF00" : "rgba(109, 105, 105, 1)"}
                        // onPress={() => navigation.navigate("Class", { screen: "Home" })}
                    />
                    <FontAwesome
                        name="graduation-cap"
                        size={30}
                        color={
                            route.name === "ClassRoom" ||
                                route.name === "CourseVideo" ||
                                route.name === "Books" ||
                                route.name === "Quiz"
                                ? "#BDFF00"
                                : "rgba(109, 105, 105, 1)"
                        }
                        // onPress={() => navigation.navigate("Class", { screen: "ClassRoom" })}
                    />
                    <FontAwesome
                        name="download"
                        size={30}
                        color={
                            route.name === "Download" || route.name === "DownloadBook"
                                ? "#BDFF00"
                                : "rgba(109, 105, 105, 1)"
                        }
                        // onPress={() => navigation.navigate("Class", { screen: "Download" })}
                    />
                    <FontAwesome
                        name="user"
                        size={30}
                        color={route.name === "Profile" ? "#BDFF00" : "rgba(109, 105, 105, 1)"}
                        // onPress={() => navigation.navigate("Class", { screen: "Profile" })}
                    />
                </View>
            </View>
        </View>
    )
}

export default BottomNavBar

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    kk: {
        width: "100%",
        // eslint-disable-next-line react-native/sort-styles
        backgroundColor: "#5a5a5a99",
        borderRadius: 32,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-around",
        marginTop: -80,
    },
    kq: {
        width: "100%",
    },
})
