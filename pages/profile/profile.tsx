
import React, { FC } from "react"
import {
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native"

import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import { subjects } from "../../data/data"
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"


export const Profile = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.Profile}>
            <ScrollView>
                <TouchableOpacity style={styles.logout}
                    onPress={() => { console.log("login") }}>
                    <Text>LogOut</Text>
                </TouchableOpacity>
                <ImageBackground
                    source={require("../../assets/images/CroxxImage/profilePur.png")}
                    style={styles.ProfileP}
                >
                    <TouchableOpacity style={styles.ProfileIcon}>
                        <FontAwesome5
                            name="ring"
                            size={18}
                        //   onPress={() => navigation.navigate("Class", { screen: "EditProfile" })}
                        />
                    </TouchableOpacity>
                    <View style={styles.ProfileH}>
                        <View>
                            <Text style={styles.ProfileTextS}>Name </Text>
                            <Text style={styles.ProfileText}>
                                Umeh
                                <Text style={{ color: "#F3CE09" }}> David </Text>
                            </Text>

                            <View style={styles.ProfileH2}>
                                <View>
                                    <Text style={styles.ProfileTextS}>Level</Text>
                                    <Text style={styles.ProfileTextSP}>100</Text>
                                </View>
                                <View>
                                    <Text style={styles.ProfileTextS}>Department</Text>
                                    <Text style={styles.ProfileTextSP}>Science</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image source={require("../../assets/images/CroxxImage/PPR.png")} />
                            <TouchableOpacity
                                style={styles.ProfileIcon2}
                            // onPress={() => navigation.navigate("Class", { screen: "EditProfile" })}
                            >
                                <FontAwesome5 name="pen" size={15} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <ImageBackground
                    source={require("../../assets/images/CroxxImage/profileP.png")}
                    style={styles.CourseReg}
                >
                    <View style={styles.learnCategory}>
                        <Text style={styles.text}>Courses Registered </Text>
                        <Entypo name="dots-three-horizontal" size={17} color="#fff" />
                    </View>

                    <View style={styles.listSubjectContainer}>
                        <View style={styles.listSubject}>
                            {subjects.map((subject, inx) => (
                                <View key={inx} style={styles.stats2}>
                                    <Text style={styles.StatTextSP}>{subject.name}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </ImageBackground>

                <ImageBackground
                    source={require("../../assets/images/CroxxImage/profileY.png")}
                    style={styles.CourseReg}
                >
                    <View style={{ marginTop: 22 }}>
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "#3A2E34" }}>STAT</Text>
                    </View>
                    <View style={styles.stats}>
                        {subjects.map((subject, inx) => (
                            <View style={styles.stats2} key={inx}>
                                <Text style={styles.StatTextSP}>{subject.name}</Text>
                                <Progress.Bar
                                    progress={subject.stat / 10}
                                    width={60}
                                    height={7}
                                    color="#542AE5"
                                    unfilledColor="#D9D9D9"
                                    borderWidth={0}
                                    style={{ marginLeft: 10 }}
                                />
                            </View>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
