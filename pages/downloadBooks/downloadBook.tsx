import React, { FC } from "react"
// import { Button } from "../..v/components"
import {
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native"
import { colors } from "../../theme/color"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { books } from "../../data/data"
import styles from "./styles"
import { usePage } from "../../contexts/PageContext"

export const DownloadBooks = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { setPage } = usePage();


  useFocusEffect(() => {
    setPage('downloadBook');
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
                <Text style={styles.textIM}>Books</Text>
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
            //   onPress={() => {
            //     navigation.navigate("Class", { screen: "Download" })
            //   }}
            >
              <Ionicons name="play" size={24} color="#fff" />
              {route.name === "Download" && <Text style={styles.textV}>VIDEO</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={route.name === "DownloadBook" ? [styles.sectionTwoIconDes2] : styles.sectionTwoIconDes2}
            //   onPress={() => {
            //     navigation.navigate("Class", { screen: "DownloadBook" })
            //   }}
            >
              <Ionicons name="book" size={27} color="#fff" />
              {route.name === "DownloadBook" && <Text style={styles.textV}>Book</Text>}
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
            <View style={styles.homeSectionThree}>
              <View style={styles.recentBooks}>
                <Text style={styles.text}>Recent Books</Text>
                <Entypo name="dots-three-horizontal" size={17} color={colors.fill} />
              </View>

              <View style={styles.booksCon}>
                {books.map((book, inx) => (
                  <View key={inx} style={[styles.books, { backgroundColor: book.color }]}>
                    <View style={[styles.bookNo, { backgroundColor: book.colorNo }]}>
                      <Text style={styles.bookNoT}>{book.star}</Text>
                    </View>

                    <View style={styles.bookName}>
                      <Text style={styles.bookNameT}>{book.name}</Text>
                      <Text style={styles.bookNameTS}>{book.topic}</Text>
                    </View>
                    <View style={styles.bookIcon}>
                      <Entypo name="minus" size={17} color={colors.fill} style={styles.iconE} />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}