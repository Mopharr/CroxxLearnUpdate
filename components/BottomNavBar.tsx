import { StyleSheet, View } from "react-native"
import React, { useEffect } from "react"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import { usePage } from "../contexts/PageContext"

const BottomNavBar = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {page} = usePage();

    useEffect(() => {
        console.log(page)
    }, [])

    return (
        <View>
            <View style={styles.kq}>
                <View style={styles.kk}>
                    <FontAwesome
                        name="home"
                        size={30}
                        color={page == "home" ? "#BDFF00" : "rgba(109, 105, 105, 1)"}
                        onPress={() => navigation.navigate("main", { screen: "home" })}
                    />
                    <FontAwesome
                        name="graduation-cap"
                        size={30}
                        color={
                            page === "classroom" ||
                                page === "courseVideo" ||
                                page === "books" ||
                                page === "quiz"
                                ? "#BDFF00"
                                : "rgba(109, 105, 105, 1)"
                        }
                        onPress={() => navigation.navigate("main", { screen: "classRoom" })}
                    />
                    <FontAwesome
                        name="user"
                        size={30}
                        color={page === "profile" ? "#BDFF00" : "rgba(109, 105, 105, 1)"}
                        onPress={() => navigation.navigate("main", { screen: "profile" })}
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
