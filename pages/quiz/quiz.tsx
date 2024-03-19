import React, { useState, useEffect } from "react"
import {
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native"
import { colors } from "../../theme/color"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"

import { useNavigation, useRoute } from "@react-navigation/native"
import styles from "./styles"



export const Quiz = () => {
  const backgroundPdfColors = ["#524848", "#95C900", "#3200E0"]
  const backgroundPdfNumber = ["#95C900", "#524848", "#3200E0"]
  const navigation = useNavigation()
  const route = useRoute()

  const [getExam, setgetExam] = useState([])
  const [filteredExams, setFilteredExams] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
//   async function queryExam() {
//     const token = await AsyncStorage.getItem("token")
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     }

//     return axios
//       .get("https://croxxlearn-d5874d7f0aa7.herokuapp.com/api/v1/exams", {
//         headers,
//       })
//       .then((res) => {
//         setgetExam(res.data.exams)
//       })
//       .catch((error) => {
//         console.log("err", error)
//       })
//   }

//   useEffect(() => {
//     queryExam()
//   }, [])
//   const [examLink, setexamLink] = useState("")

//   const handleGetexamLink = (link) => {
//     setexamLink(link)
//   }

//   useEffect(() => {
//     if (searchQuery === "") {
//       setFilteredExams(getExam)
//     } else {
//       const filtered = getExam.filter((exam) =>
//         exam.category.toLowerCase().includes(searchQuery.toLowerCase()),
//       )
//       setFilteredExams(filtered)
//     }
//   }, [searchQuery, getExam])

//   const handleSubjectFilter = (subject: string) => {
//     const filtered = getExam.filter((exam) => exam.category === subject)
//     setFilteredExams(filtered)
//   }

//   const isActive = (subject: string) => {
//     if (subject === "All") return true
//     return getExam.length > 0 && getExam.every((exam) => exam.category === subject)
//   }

//   useEffect(() => {
//     if (examLink) {
//       navigation.navigate("StartTest", { examLink })
//     }
//   }, [examLink])

  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <View>
          <ImageBackground
            source={require("../../assets/images/CroxxImage/Quiz.png")}
            style={styles.classImage}
          >
            <View style={styles.ImageContent}>
              <View style={styles.textIMC}>
                <Text style={styles.textIM}>Quiz</Text>
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
            //   style={route.name === "ClassRoom" ? [$sectionTwoIcon1] : $sectionTwoIcon1}
            // //   onPress={() => {
            // //     navigation.navigate("Class", { screen: "ClassRoom" })
            // //   }}
            >
              <Ionicons name="play" size={24} color="#fff" />
              {route.name === "ClassRoom" && <Text style={styles.textV}>VIDEO</Text>}
            </TouchableOpacity>
            <TouchableOpacity
            //   style={route.name === "Books" ? [$sectionTwoIconDes2] : $sectionTwoIconDes2}
            //   onPress={() => {
            //     navigation.navigate("Class", { screen: "Books" })
            //   }}
            >
              <Ionicons name="book" size={27} color="#fff" />
              {route.name === "Books" && <Text style={styles.textV}>Book</Text>}
            </TouchableOpacity>
            <TouchableOpacity
            //   style={route.name === "Quiz" ? [$sectionTwoIconDes3] : $sectionTwoIconDes3}
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
                // onPress={() => setFilteredExams(getExam)}
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
                {filteredExams.length > 0 ? (
                  filteredExams.map((book, inx) => {
                    const backgroundColor = backgroundPdfColors[inx % backgroundPdfColors.length]
                    const backgroundNum = backgroundPdfNumber[inx % backgroundPdfNumber.length]
                    return (
                      <TouchableOpacity
                        // onPress={() => {
                        //   return handleGetexamLink(book)
                        // }}
                        key={inx}
                        style={[styles.books, { backgroundColor }]}
                      >
                        <View style={[styles.bookNo, { backgroundColor: backgroundNum }]}>
                          <Text style={styles.bookNoT}>{"0" + inx}</Text>
                        </View>

                        <View style={styles.bookName}>
                          <Text style={styles.bookNameT}>book.name</Text>
                          <Text style={styles.bookNameTS}>book.category</Text>
                        </View>
                        <Text style={styles.bookNameTS}>25 Quesion</Text>
                      </TouchableOpacity>
                    )
                  })
                ) : (
                  <Text style={styles.avi}>No Quiz Available</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}