import React, { FC, useState, useEffect } from "react"
import {
    ViewStyle,
    Dimensions,
    ScrollView,
    ImageBackground,
    View,
    TextInput,
    ImageStyle,
    TextStyle,
    Text,
    Image,
    TouchableOpacity,
} from "react-native"
import { colors } from "../../theme/color"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import styles from "./styles"
// import vfile from "../../../test.js"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { getAllVideos } from "../../handlers/main/video/videos"
import { usePage } from "../../contexts/PageContext"


export const ClassRoom = () => {
    const backgroundColors = ["#343333", "#0E1282", "#970912"]

    const navigation = useNavigation()
    const route = useRoute()

    const [videos, setGetVideo] = useState([])
    const [singleVideo, setSingleVideo] = useState([])
    const [filteredVideos, setFilteredVideos] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const { setPage } = usePage();


  useFocusEffect(() => {
    setPage('classroom');
  });

    useEffect(() => {
        getAllVideos().then((res) => {
            // console.log(res)
            setGetVideo(res)
        })
    }, [])

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredVideos(videos)
        } else {
            const filtered = videos.filter((video) =>
                video.department.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            setFilteredVideos(filtered)
        }
    }, [searchQuery, videos])

    const handleSubjectFilter = (subject: string) => {
        const filtered = videos.filter((video) => video.department.name === subject)
        setFilteredVideos(filtered)
    }

    const isActive = (subject: string) => {
        if (subject === "All") return true
        return (
            filteredVideos.length > 0 &&
            filteredVideos.every((video) => video.department.name === subject)
        )
    }

    return (
        <View>
            <ScrollView style={styles.classroomHeader}>
                <View>
                    <ImageBackground
                        source={require("../../assets/images/CroxxImage/ClassRoomHeader.png")}
                        style={styles.ClassImage}
                    >
                        <View style={styles.ImageContent}>
                            <View style={styles.textIMC}>
                                <Text style={styles.textIM}>CLASSROOM</Text>
                            </View>
                            <View style={styles.searchBarContainer}>
                                <TextInput placeholder="Search" value={searchQuery} onChangeText={setSearchQuery} />

                                <Ionicons name="search" size={19} color="#6A6A6A" />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.sectionTwo}>
                    <View style={styles.sectionTwoIcon}>
                        <TouchableOpacity
                            style={route.name === "ClassRoom" ? [styles.sectionTwoIcon1] : styles.sectionTwoIcon1}
                            onPress={() => {
                                navigation.navigate("main", { screen: "classRoom" })
                            }}
                        >
                            <Ionicons name="play" size={24} color="#fff" />
                            {route.name === "ClassRoom" && <Text style={styles.textV}>VIDEO</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={route.name === "Books" ? [styles.sectionTwoIconDes2] : styles.sectionTwoIconDes2}
                            onPress={() => {
                                navigation.navigate("main", { screen: "books" })
                            }}
                        >
                            <Ionicons name="book" size={27} color="#fff" />
                            {route.name === "Books" && <Text style={styles.textV}>Book</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={route.name === "Quiz" ? [styles.sectionTwoIconDes3] : styles.sectionTwoIconDes3}
                            onPress={() => {
                                navigation.navigate("main", { screen: "quiz" })
                            }}
                        >
                            <Ionicons name="medal" size={27} color="#fff" />
                            {route.name === "Quiz" && <Text style={styles.textV}>Test</Text>}
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={styles.subject}>
                            <TouchableOpacity
                                onPress={() => setFilteredVideos(videos)}
                                style={isActive("All") ? styles.subjectTV1 : styles.subjectTV}
                            >
                                <Text style={styles.subjectT}>All</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleSubjectFilter("physics")}
                                style={isActive("physics") ? styles.subjectTV1 : styles.subjectTV}
                            >
                                <Text style={styles.subjectT}>Physics</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleSubjectFilter("chemistry")}
                                style={isActive("chemistry") ? styles.subjectTV1 : styles.subjectTV}
                            >
                                <Text style={styles.subjectT}>Chemistry</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleSubjectFilter("biology")}
                                style={isActive("biology") ? styles.subjectTV1 : styles.subjectTV}
                            >
                                <Text style={styles.subjectT}>Biology</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleSubjectFilter("botany")}
                                style={isActive("botany") ? styles.subjectTV1 : styles.subjectTV}
                            >
                                <Text style={styles.subjectT}>Botany</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topicWrap}>
                            <ScrollView>
                                {filteredVideos.length > 0 ? (
                                    filteredVideos.map((video, inx) => {
                                        const backgroundColor = backgroundColors[inx % backgroundColors.length]
                                        return (
                                            <TouchableOpacity
                                                style={[styles.topics, { backgroundColor }]}
                                                key={inx}
                                            onPress={() => {
                                                setSingleVideo(video)
                                                navigation.navigate("courseVideo", { singleVideo })
                                            }}
                                            >
                                                <View style={styles.topicContainer}>
                                                    <View style={styles.topicNameView}>
                                                        {/* <Text style={styles.topicName}>{video.courseCode}</Text> */}
                                                    </View>
                                                    {/* <Text style={styles.topicTopic}>{video.topic}</Text> */}
                                                    <Text style={styles.topicTutor}>
                                                        Tutor <Text style={styles.tutor}>Micheal</Text>
                                                    </Text>
                                                    <View style={styles.stre}>
                                                        <View style={styles.re}>
                                                            <Entypo name="star" size={12} color={colors.lemon} />
                                                            <Text style={styles.retxt}>3.4</Text>
                                                        </View>
                                                        <View style={styles.re}>
                                                            <Entypo name="eye" size={12} color={colors.lemon} />
                                                            <Text style={styles.retxt}>100 views</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.vid}>
                                                    {/* <Image source={{ uri: video.thumbnailUrl }} /> */}

                                                    <View style={styles.vid}>
                                                        <Image source={require("../../assets/images/CroxxImage/video.png")} />
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : (
                                    <Text style={styles.avi}>No Video Available</Text>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
