
import React, { FC, useEffect, useState } from "react"
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
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import styles from "./styles"
import { usePage } from "../../contexts/PageContext"
import { getProfile } from "../../handlers/main/user/getProfile"
import { useUser } from "../../contexts/UserContext"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAuth } from "../../contexts/AuthContext"
import { useUserProfile } from "../../contexts/UserProfileContext"

type User = {
    __v: number;
    _id: string;
    email: string;
    enrolled: boolean;
    firstName: string;
    lastName: string;
    level: number;
    passwordResetExpires: string;
    passwordResetToken: string;
    photo: string;
    role: string;
    verificationCode: string | null;
}


export const Profile = () => {

    const navigation = useNavigation()

    const { setPage } = usePage();
    const {setAuth} = useAuth()
    const {userProfile} = useUserProfile()
   
    useFocusEffect(() => {
        setPage('profile');
    });

    const [userp, setUserp] = useState<User | undefined>(); // Initialize with undefined
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProfile();
                setUserp(data.user);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchData();
    }, []);

    const logout = async () => {
        await AsyncStorage.removeItem('@userEmail')
        await AsyncStorage.removeItem('@accessToken')
        await AsyncStorage.removeItem('@user')
        setAuth(false)
        navigation.navigate("auth", {screen: "signin"})
    }


    return (
        <SafeAreaView style={styles.Profile}>
            <ScrollView>
                <TouchableOpacity style={styles.logout}
                    onPress={() => {
                        logout()
                    }}>
                    <Text style={{color: "white"}}>LogOut</Text>
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
                                {userp?.firstName}
                                <Text style={{ color: "#F3CE09" }}> {userp?.lastName} </Text>
                            </Text>

                            <View style={styles.ProfileH2}>
                                <View>
                                    <Text style={styles.ProfileTextS}>Level</Text>
                                    <Text style={styles.ProfileTextSP}>{userp?.level}</Text>
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
function setAuth(success: any) {
    throw new Error("Function not implemented.")
}

