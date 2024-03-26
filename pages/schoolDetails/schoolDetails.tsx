import { useNavigation } from "@react-navigation/native"
import React, { FC, useState } from "react"
import {
    TextStyle,
    ViewStyle,
    Dimensions,
    ImageStyle,
    ImageBackground,
    View,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    Alert
} from "react-native"
import styles from "./styles"
import Container, { Toast } from "toastify-react-native"
import { colors } from "../../theme/color"
import { useLoading } from "../../contexts/LoadingContext"
import { FontAwesome } from "@expo/vector-icons"
// import { enroll } from "../../handlers/main/user/enroll"

const back = require("../../assets/images/CroxxImage/backr.png")

const { height, width } = Dimensions.get("screen")

export const SchoolDetails = () => {
    const navigation = useNavigation()
    const [matricNo, setMatricNo] = useState<string>('')
    const [faculty, setFaculty] = useState<string>('')
    const [department, setDepartment] = useState<string>('')
    const [level, setLevel] = useState<string>('')
    const { loading, setLoading } = useLoading()

    const handleEnroll = async () => {
        if (!matricNo || !faculty || !department || !level) {
            Alert.alert("Please fill in all fields.")
            return
        }

        setLoading(true)
        try {
            const data = await enroll(matricNo, faculty, department, level)
            Toast.success("Enrollment Successful")
            navigation.navigate("main", { screen: "classRoom" })
        } catch (error) {
            Alert.alert("Enrollment failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const enroll = async (matricNo: string, faculty: string, department: string, level: string) => {
        // Mock asynchronous enrollment action
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                // Simulate success
                resolve()
                // Simulate failure
                // reject(new Error("Enrollment failed"))
            }, 2000)
        })
    }


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView
                style={styles.screenContentContainer}
                behavior={Platform.OS === "ios" ? "padding" : "padding"}
            >
                <Container position="top" />
                <ImageBackground source={back} imageStyle={styles.backgroundImage}>
                    <View>
                        <View>
                            <Text style={styles.stater}>Let's get</Text>
                            <Text style={styles.stater2}>you</Text>
                        </View>

                        <Text style={styles.staterText}>Started</Text>
                    </View>

                    <View style={styles.AuthInput}>
                        <TextInput
                            value={matricNo}
                            onChangeText={setMatricNo}
                            style={styles.textField}
                            placeholder={"Matric Number"}
                            placeholderTextColor={"grey"}
                        />
                        <TextInput
                            value={faculty}
                            onChangeText={setFaculty}
                            style={styles.textField}
                            placeholder={"Faculty"}
                            placeholderTextColor={"grey"}
                        />
                        <TextInput
                            value={department}
                            onChangeText={setDepartment}
                            style={styles.textField}
                            placeholder={"Department"}
                            placeholderTextColor={"grey"}
                        />

                        <TextInput
                            value={level}
                            onChangeText={setLevel}
                            style={styles.textField}
                            placeholder={"Level"}
                            placeholderTextColor={"grey"}
                        />

                        <TouchableOpacity onPress={() => handleEnroll()}>
                            <ImageBackground
                                source={require("../../assets/images/CroxxImage/bBtn.png")}
                                style={styles.tapButton}
                            >
                                {loading ? (
                                    <ActivityIndicator
                                        size="small"
                                        color="#fff"
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        style={{
                                            alignContent: "center",
                                        }}
                                    />
                                ) : (
                                    <Text style={styles.btnLo}>
                                        Next{" "}
                                        <FontAwesome name="arrow-right" size={18} style={{ marginLeft: 24 }} />
                                    </Text>
                                )}
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}
