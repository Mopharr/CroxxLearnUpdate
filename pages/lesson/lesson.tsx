/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import {
  ViewStyle,
  Dimensions,
  ScrollView,
  ImageBackground,
  View,
  ImageStyle,
  TextStyle,
  Text,
  Image,
  TouchableOpacity,
} from "react-native"

import { FontAwesome } from "@expo/vector-icons"
import { Video } from "expo-av"
import styles from "./styles"
import { useNavigation, useRoute } from "@react-navigation/native"


export const Lesson = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { singleVideoWatch }: any = route.params
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null)

  
  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <View>
          <ImageBackground
            source={require("../../assets/images/CroxxImage/HomeHeader.png")}
            style={styles.classImage}
          >
            <View style={styles.imageContent}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/CroxxIcon/arr.png")} />
              </TouchableOpacity>
              <Text style={styles.textIM}>{singleVideoWatch.courseCode}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.sectionTwo}>
          <Video
            source={{ uri: singleVideoWatch.url }}
            // style={{ width: "100%", aspectRatio: 16 / 9 }}
            style={styles.video}
            useNativeControls
          />
         

          <View style={styles.cTop}>
            <View style={styles.course}>
              <Text style={styles.cCon}>Physics 101</Text>
            </View>
            <Text style={styles.cCon2}>Waves</Text>
          </View>
          <View style={styles.cTop}>
            <Text style={styles.ctu}>Tutor Micheal</Text>
            <View style={styles.count}>
              <View style={styles.countP}>
                <FontAwesome name="star" size={17} color="#DCE015" />
                <Text style={styles.cCo}>3.4</Text>
              </View>
              <View style={styles.countP}>
                <FontAwesome name="eye" size={17} color="#DCE015" />
                <Text style={styles.cCo}>Waves</Text>
              </View>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.dT}>
              <Text style={styles.dTo}>What is Wave</Text>
              <Text style={styles.dTo2}>...........</Text>
              <Text style={styles.dTo3}>00.24</Text>
            </View>
            <View style={styles.dT}>
              <Text style={styles.dTo}>Type of Wave</Text>
              <Text style={styles.dTo2}>...........</Text>
              <Text style={styles.dTo3}>10.24</Text>
            </View>
            <View style={styles.dT}>
              <Text style={styles.dTo}>Conclusion </Text>
              <Text style={styles.dTo2}>...........</Text>
              <Text style={styles.dTo3}>30.24</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
