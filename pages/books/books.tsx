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
  Alert,
} from "react-native"
import styles from "./styles"


import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"
// import { vh } from "react-native-expo-viewport-units"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { colors } from "../../theme/color"
import { pdfs } from "../../handlers/main/pdf/pdfs"
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { usePage } from "../../contexts/PageContext"



export const Books = () => {
  const backgroundPdfColors = ["#524848", "#95C900", "#3200E0"]
  const backgroundPdfNumber = ["#95C900", "#524848", "#3200E0"]
  const navigation = useNavigation()
  const route = useRoute()

  const [getPdf, setGetPdf] = useState([])
  const [filteredPdfs, setFilteredPdfs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [downloadConfirmed, setDownloadConfirmed] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const { setPage } = usePage();


  useFocusEffect(() => {
    setPage('books');
  });


  useEffect(() => {
    pdfs().then((res) => {
      // console.log(res, 'hhhh')
      setGetPdf(res)
    })
  }, [])

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPdfs(getPdf)
    } else {
      const filtered = getPdf.filter((pdf) =>
        pdf.department.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredPdfs(filtered)
    }
  }, [searchQuery, getPdf])

  const [pdfLink, setPdfLink] = useState("")

  // const handleGetPdfLink = (link) => {
  //   setPdfLink(link)
  //   navigation.navigate("ReadPdf", { pdfLink })
  // }

  const handleSubjectFilter = (subject: string) => {
    const filtered = filteredPdfs.filter((pdf) => pdf.department.name === subject)
    setFilteredPdfs(filtered)
  }

  const openPDF = async (url: string, topic: string) => {
    Alert.alert(
      'Download PDF',
      `Do you want to download ${topic}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Set the PDF URL and confirm download
            downloadPDF(url, topic)
          },
        },
      ],
      { cancelable: false }
    );
  };

  const downloadPDF = async (pdfUrl: string, pdfFileName: string) => {
  try {
    const downloadResumable = FileSystem.createDownloadResumable(
      pdfUrl,
      FileSystem.documentDirectory + pdfFileName
    );

    const uri = await downloadResumable.downloadAsync();

    console.log('PDF downloaded to:', uri?.uri);
    await WebBrowser.openBrowserAsync(pdfUrl);
  } catch (error) {
    console.error('Failed to download PDF:', error);
    return null; // Return null if download fails
  }
};



  const isActive = (subject: string) => {
    if (subject === "All") return true
    return filteredPdfs.length > 0 && filteredPdfs.every((pdf) => pdf.department.name === subject)
  }

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
                onPress={() => setFilteredPdfs(getPdf)}
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
                        onPress={() => openPDF(book.imageUrl, book.topic)}
                        key={inx}
                        style={[styles.books, { backgroundColor }]}
                      >
                        <View style={[styles.bookNo, { backgroundColor: backgroundNum }]}>
                          <Text style={styles.bookNoT}>{"0" + inx}</Text>
                        </View>

                        <View style={styles.bookName}>
                          <Text style={styles.bookNameT}>{book.topic}</Text>
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