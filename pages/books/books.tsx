import React, { FC, useState, useEffect } from "react"
// import { Button } from "../..v/components"
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
  TouchableOpacity,
} from "react-native"
import styles from "./styles"


import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"
// import { vh } from "react-native-expo-viewport-units"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { colors } from "../../theme/color"


export const Books = () => {
  const backgroundPdfColors = ["#524848", "#95C900", "#3200E0"]
  const backgroundPdfNumber = ["#95C900", "#524848", "#3200E0"]
  const navigation = useNavigation()
  const route = useRoute()

  const [getPdf, setGetPdf] = useState([])
  const [filteredPdfs, setFilteredPdfs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

//   async function queryPdf() {
//     const token = await AsyncStorage.getItem("token")
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     }

//     return axios
//       .get("https://croxxlearn-d5874d7f0aa7.herokuapp.com/api/v1/images", {
//         headers,
//       })
//       .then((res) => {
//         setGetPdf(res.data.images)
//       })
//       .catch((error) => {
//         console.log("err", error)
//       })
//   }

//   useEffect(() => {
//     queryPdf()
//   }, [])

//   useEffect(() => {
//     if (searchQuery === "") {
//       setFilteredPdfs(getPdf)
//     } else {
//       const filtered = getPdf.filter((pdf) =>
//         pdf.department.name.toLowerCase().includes(searchQuery.toLowerCase()),
//       )
//       setFilteredPdfs(filtered)
//     }
//   }, [searchQuery, getPdf])

//   const [pdfLink, setPdfLink] = useState("")

//   const handleGetPdfLink = (link) => {
//     setPdfLink(link)
//     navigation.navigate("ReadPdf", { pdfLink })
//   }

//   const handleSubjectFilter = (subject: string) => {
//     const filtered = filteredPdfs.filter((pdf) => pdf.department.name === subject)
//     setFilteredPdfs(filtered)
//   }

//   const isActive = (subject: string) => {
//     if (subject === "All") return true
//     return filteredPdfs.length > 0 && filteredPdfs.every((pdf) => pdf.department.name === subject)
//   }

  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <View>
          <ImageBackground
            source={require("../../assets/images/CroxxImage/Books.png")}
            style={styles.classImage}
          >
            <View style={styles.imageContent}>
              <View style={styles.textIMC}>
                <Text style={styles.textIM}>Books</Text>
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
            //   onPress={() => {
            //     // navigation.navigate("Class", { screen: "ClassRoom" })
            //   }}
            >
              <Ionicons name="play" size={24} color="#fff" />
              {route.name === "ClassRoom" && <Text style={styles.textV}>VIDEO</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={route.name === "Books" ? [styles.sectionTwoIconDes2] : styles.sectionTwoIconDes2}
            //   onPress={() => {
            //     navigation.navigate("Class", { screen: "Books" })
            //   }}
            >
              <Ionicons name="book" size={27} color="#fff" />
              {route.name === "Books" && <Text style={styles.textV}>Book</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={route.name === "Quiz" ? [styles.sectionTwoIconDes3] : styles.sectionTwoIconDes3}
            //   onPress={() => {
            //     navigation.navigate("Class", { screen: "Quiz" })
            //   }}
            >
              <Ionicons name="medal" size={27} color="#fff" />
              {route.name === "Quiz" && <Text style={styles.textV}>Test</Text>}
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.subject}>
              <TouchableOpacity
                // onPress={() => setFilteredPdfs(getPdf)}
                // style={isActive("All") ? $subjectTV1 : $subjectTV}
              >
                <Text style={styles.subjectT}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => handleSubjectFilter("physics")}
                // style={isActive("physics") ? $subjectTV1 : $subjectTV}
              >
                <Text style={styles.subjectT}>Physics</Text>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => handleSubjectFilter("chemistry")}
                // style={isActive("chemistry") ? $subjectTV1 : $subjectTV}
              >
                <Text style={styles.subjectT}>Chemistry</Text>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => handleSubjectFilter("biology")}
                // style={isActive("biology") ? $subjectTV1 : $subjectTV}
              >
                <Text style={styles.subjectT}>Biology</Text>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => handleSubjectFilter("botany")}
                // style={isActive("botany") ? $subjectTV1 : $subjectTV}
              >
                <Text style={styles.subjectT}>Botany</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.homeSectionThree}>
              <View style={styles.recentBooks}>
                <Text style={styles.text}>Recent Books</Text>
                <Entypo name="dots-three-horizontal" size={17} color={colors.fill} />
              </View>

              <View style={styles.booksCon}>
                {filteredPdfs.length > 0 ? (
                  filteredPdfs.map((book, inx) => {
                    const backgroundColor = backgroundPdfColors[inx % backgroundPdfColors.length]
                    const backgroundNum = backgroundPdfNumber[inx % backgroundPdfNumber.length]
                    return (
                      <TouchableOpacity
                        // onPress={() => {
                        //   return handleGetPdfLink(book.imageUrl)
                        // }}
                        key={inx}
                        style={[styles.books, { backgroundColor }]}
                      >
                        <View style={[styles.bookNo, { backgroundColor: backgroundNum }]}>
                          <Text style={styles.bookNoT}>{"0" + inx}</Text>
                        </View>

                        <View style={styles.bookName}>
                          <Text style={styles.bookNameT}>book.topic</Text>
                          <Text style={styles.bookNameTS}>Dr Tunde</Text>
                        </View>
                        <View style={styles.bookIcon}>
                          <Entypo name="minus" size={17} color={colors.fill} style={styles.iconE} />
                        </View>
                      </TouchableOpacity>
                    )
                  })
                ) : (
                  <Text style={styles.avi}>No PDF Available</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}