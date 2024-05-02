import React, { FC } from "react"
import {
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native"
import { colors } from "../../theme/color"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import styles from "./styles"
import { topics } from "../../data/data"
import { usePage } from "../../contexts/PageContext"



export const Downloads = () => {
  const navigation = useNavigation()

  const route = useRoute()
  const { setPage } = usePage();


  useFocusEffect(() => {
    setPage('download');
  });

  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <View>
          <ImageBackground
            source={require("../../assets/images/CroxxImage/down.png")}
            style={styles.ClassImage}
          >
            <View style={styles.ImageContent}>
              <View style={styles.textIMC}>
                <Text style={styles.textIM}>Downloads</Text>
              </View>
              <View style={styles.searchBarContainer}>
                <TextInput placeholder="Search" placeholderTextColor={colors.palceHolder} />

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
                navigation.navigate("main", { screen: "download" })
              }}
            >
              <Ionicons name="play" size={24} color="#fff" />
              {route.name === "Download" && <Text style={styles.textV}>VIDEO</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={route.name === "DownloadBook" ? [styles.sectionTwoIconDes2] : styles.sectionTwoIconDes2}
              onPress={() => {
                navigation.navigate("main", { screen: "downloadBook" })
              }}
            >
              <Ionicons name="book" size={27} color="#fff" />
              {route.name === "DowloadBook" && <Text style={styles.textV}>Book</Text>}
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.subject}>
              <View style={styles.subjectTV1}>
                <Text style={styles.subjectT}>Physics</Text>
              </View>
              <View style={styles.subjectTV}>
                <Text style={styles.subjectT}>Chemistry</Text>
              </View>
              <View style={styles.subjectTV}>
                <Text style={styles.subjectT}>Biology</Text>
              </View>
              <View style={styles.subjectTV}>
                <Text style={styles.subjectT}>Botany</Text>
              </View>
            </View>
            <View style={styles.topicWrap}>
              {topics.map((topic, inx) => (
                <TouchableOpacity
                  style={styles.topics}
                  key={inx}
                //   onPress={() => navigation.navigate("Class", { screen: "CourseVideo" })}
                >
                  <View style={styles.topicContainer}>
                    <View style={styles.topicNameView}>
                      <Text style={styles.topicName}>{topic.name}</Text>
                    </View>
                    <Text style={styles.topicTopic}>{topic.topic}</Text>
                    <Text style={styles.topicTutor}>
                      Tutor <Text style={styles.tutor}>{topic.tutor}</Text>
                    </Text>
                    <View style={styles.stre}>
                      <View style={styles.re}>
                        <Entypo name="star" size={12} color={colors.lemon} />
                        <Text style={styles.retxt}>{topic.star}</Text>
                      </View>
                      <View style={styles.re}>
                        <Entypo name="eye" size={12} color={colors.lemon} />
                        <Text style={styles.retxt}>{topic.views} views</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.vid}>
                    <Image source={topic.imageUrl} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}