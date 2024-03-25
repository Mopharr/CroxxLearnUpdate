import React from "react"
import { ImageBackground, TouchableOpacity, View, StyleSheet, Text, Image } from "react-native"
// import {  } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const slides = [
    {
        key: "one",
        title: "Title 1",
        image: require("../../assets/images/CroxxImage/onB1.png"),
        color: "#7EAA00",
        text: "Welcome to the world of knowledge and discovery!",
    },
    {
        key: "two",
        title: "Title 2",
        text: "broaden your horizons and ignite your curiosity",
        image: require("../../assets/images/CroxxImage/onB2.png"),
        color: "#542AE5",
    },
    {
        key: "three",
        title: "Title 2",
        text: "Bringing out the genius in you",
        image: require("../../assets/images/CroxxImage/onB3.png"),
        color: "#EECA15",
    },
    {
        key: "four",
        title: "Title 2",
        text: "Get Started!",
        image: require("../../assets/images/CroxxImage/onB4.png"),
        color: "#FF33B8",
    },
]

const OnboardingScreen = () => {
    const navigation = useNavigation()
    const slideIndicatorColors = ["#7EAA00", "#542AE5", "#EECA15", "#FF33B8"]
    const FinalSlideButton = () => {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('main', {screen: "classRoom"})}>
                <Image source={require("../../assets/images/CroxxImage/start.png")} />
                <View style={styles.buttonContainer2}>
                    <Text style={styles.textC}>Start </Text>
                    <Entypo name="forward" size={12} color="white" />
                </View>
            </TouchableOpacity>
        )
    }

    const renderPagination = (activeIndex: number) => {
        if (activeIndex === slides.length - 1) {
            return <FinalSlideButton />
        }

        return (
            <View style={styles.paginationContainer}>
                {slides.map((_, index) => {
                    const isIndicatorActive = index <= activeIndex
                    return (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                {
                                    backgroundColor: isIndicatorActive ? slideIndicatorColors[index] : "transparent",
                                },
                            ]}
                        />
                    )
                })}
            </View>
        )
    }


    const _renderItem = ({ item }: { item: any }) => {
        return (
            <ImageBackground
                source={require("../../assets/images/CroxxImage/backr.png")}
                style={styles.slide}
            >
                <View key={item.key}>
                    <View style={[styles.colorC, { backgroundColor: item.color }]}>
                        <Image source={item.image} style={styles.onBC} />
                    </View>
                    <View style={styles.colorCW}>
                        <Text style={styles.textOb}>{item.text}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    return (
        <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            onDone={() => console.log('sjddhd')}
            showNextButton={false}
            renderPagination={renderPagination}
        />
    )
}

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    slide: {
        alignItems: "center",
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
    },
    // eslint-disable-next-line react-native/no-unused-styles
    title: {
        fontSize: 28,
        fontWeight: "bold",
    },
    // eslint-disable-next-line react-native/sort-styles, react-native/no-unused-styles
    text: {
        fontSize: 16,
    },
    paginationContainer: {
        alignItems: "center",

        bottom: 50,
        flexDirection: "row",
        justifyContent: "center",
    },
    paginationDot: {
        borderRadius: 25,
        height: 21,
        marginHorizontal: 5,
        width: 21,
    },
    colorC: {
        borderRadius: 28,
        height: 223,
        marginHorizontal: 80,
        width: 215,
    },
    colorCW: {
        marginHorizontal: 55,
        marginTop: 68,
    },
    onBC: {
        bottom: 75,
        height: 299,
        position: "relative",
        resizeMode: "cover",
    },
    // eslint-disable-next-line react-native/no-color-literals
    textOb: {
        color: "#E8E4EE",
        fontSize: 23,
        fontWeight: "800",
        lineHeight: 40,
        textAlign: "center",
        width: 272,
    },
    buttonContainer: {
        alignSelf: "center",
        bottom: 5,
        position: "absolute",
    },
    buttonContainer2: {
        bottom: 55,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 25,
        position: "relative",
    },
    // eslint-disable-next-line react-native/no-color-literals
    textC: {
        color: "#fff",
        fontSize: 19,
        fontWeight: "800",
        textAlign: "center",
        // eslint-disable-next-line react-native/sort-styles
        paddingRight: 10,
        // marginLeft: 60,
        // marginTop: 18
    },
})

export default OnboardingScreen
