import React, { FC, useEffect, useState } from "react"
// import { Button } from "../../components"
import {
  ViewStyle,
  Dimensions,
  View,
  ImageBackground,
  Image,
  Text,
  TextStyle,
  TextInput,
  ScrollView,
  ImageStyle,
  TouchableOpacity,
  Alert,
} from "react-native" // Added TextStyle
import { colors } from "../../theme/color"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from "@expo/vector-icons"
import { subjects } from "../../data/data"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { getAllVideos } from "../../handlers/main/video/videos"
import { useUser } from "../../contexts/UserContext"
import { pdfs } from "../../handlers/main/pdf/pdfs"
import { usePage } from "../../contexts/PageContext"
import * as FileSystem from 'expo-file-system';
import * as WebBrowser from 'expo-web-browser';
// import { SafeAreaView } from "react-native-safe-area-context"

const { height } = Dimensions.get("screen")


export const Home = () => {

  const navigation = useNavigation()
  const backgroundColors = ["#343333", "#0E1282", "#970912"]
  const backgroundPdfColors = ["#524848", "#95C900", "#3200E0"]
  const backgroundPdfNumber = ["#95C900", "#524848", "#3200E0"]

  const [getVideos, setGetVideo] = useState([])
  const [getPdf, setGetPdf] = useState([])
  const [singleVideo, setSingleVideo] = useState([])
  const { user } = useUser()
  const { setPage } = usePage();


  useFocusEffect(() => {
    setPage('home');
  });

  useEffect(() => {
    getAllVideos().then((res) => {
      setGetVideo(res)
    })
    pdfs().then((pdfs) => {
      setGetPdf(pdfs)
    })
  }, [])

  const handleVideo = (video: any) => {
    setSingleVideo(video)
  }

  useEffect(() => {
    if (singleVideo) {
      navigation.navigate("courseVideo", { singleVideo });
    }
  }, [singleVideo]);

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


  return (
    <View>
      <ScrollView style={$BidPage}>
        <ImageBackground
          source={require("../../assets/images/CroxxImage/HomeHeader.png")}
          style={$HomeHeader}
        >
          <View style={$Image}>
            <View>
              <Image source={require("../../assets/images/CroxxImage/face.png")} />
            </View>
            <View>
              <Text style={$userName}>
                <Text style={$Hi}>Hi</Text>, {user.firstName}
              </Text>
              <Text style={$what}>What will you learn</Text>
              <Text style={$today}>today ?</Text>
            </View>
          </View>

          <View style={$searchBarContainer}>
            <TextInput
              style={$searchInput}
              placeholder="Search"
              placeholderTextColor={colors.palceHolder}
            />

            <Ionicons name="search" size={19} color="#6A6A6A" />
          </View>
        </ImageBackground>

        <View style={$homeSectionTwo}>
          <View style={$learnCategory}>
            <Text style={$text}>learn category</Text>
            <Entypo name="dots-three-horizontal" size={17} color={colors.fill} />
          </View>

          <View style={$listSubject}>
            {subjects.map((subject, inx) => (
              <View key={inx} style={$subject}>
                <Text style={$tesb}>
                  {subject.name}
                </Text>
              </View>
            ))}
          </View>

          <View>
            <View style={$learnCategory}>
              <Text style={$text}>Recent Topics</Text>
              <Entypo name="dots-three-horizontal" size={17} color={colors.fill} />
            </View>

            <View>
              {getVideos.length > 0 ? (
                getVideos.splice(0, 5).map((video, inx) => {
                  const backgroundColor = backgroundColors[inx % backgroundColors.length]
                  return (
                    <TouchableOpacity
                      style={[$topics, { backgroundColor }]}
                      key={inx}
                      onPress={() => {
                        handleVideo(video)
                      }}
                    >
                      <View style={$topicContainer}>
                        <View style={$topicNameView}>
                          <Text style={$topicName}>{video.courseCode}</Text>
                        </View>
                        <Text style={$topicTopic}>{video.topic}</Text>
                        <Text style={$topicTutor}>
                          Tutor <Text style={$tutor}>Micheal</Text>
                        </Text>
                        <View style={$stre}>
                          <View style={$re}>
                            <Entypo name="star" size={12} color={colors.lemon} />
                            <Text style={$retxt}>3.4</Text>
                          </View>
                          <View style={$re}>
                            <Entypo name="eye" size={12} color={colors.lemon} />
                            <Text style={$retxt}>100 views</Text>
                          </View>
                        </View>
                      </View>
                      <View style={$vid}>
                        <View style={$vid}>
                          <Image source={require("../../assets/images/CroxxImage/video.png")} />
                          {/* <Image
                            style={$play}
                            source={require("../../assets/images/CroxxImage/start.png")}
                          /> */}
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                })
              ) : (
                <Text style={$avi}>No Video Available</Text>
              )}
            </View>
          </View>
        </View>
        <View style={$homeSectionThree}>
          <View style={$recentBooks}>
            <Text style={$text}>Recent Books</Text>
            <Entypo name="dots-three-horizontal" size={17} color={colors.fill} />
          </View>

          <View style={$booksCon}>
            {getPdf.length > 1 ? (
              getPdf.splice(0, 5).map((book, inx) => {
                const backgroundColor = backgroundPdfColors[inx % backgroundPdfColors.length]
                const backgroundNum = backgroundPdfNumber[inx % backgroundPdfNumber.length]
                return (
                  <TouchableOpacity
                        onPress={() => openPDF(book.imageUrl, book.topic)}
                        key={inx}
                      >
                  <View key={inx} style={[$books, { backgroundColor }]}>
                    <View style={[$bookNo, { backgroundColor: backgroundNum }]}>
                      <Text style={$bookNoT}>{"0" + inx}</Text>
                    </View>

                    <View style={$bookName}>
                      <Text style={$bookNameT}>{book.topic}</Text>
                      <Text style={$bookNameTS}>Dr Tunde</Text>
                    </View>
                    <View style={$bookIcon}>
                      <Entypo name="minus" size={17} color={colors.fill} style={$iconE} />
                    </View>
                  </View>
                  </TouchableOpacity>
                )
              })
            ) : (
              <Text style={$avi}>No Books Available</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}


const $downNavigationContainer: ViewStyle = {
  position: "absolute",
  bottom: "0%",
  left: "5%",
  width: "100%",
}
const $BidPage: ViewStyle = {
  backgroundColor: colors.blackBackground,
  height,
}
const $avi: TextStyle = {
  color: "#fff",
  fontSize: 16,
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 16,
  marginTop: 50,
}
const $text: TextStyle = {
  color: "#E8E5E5",
  // fontFamily: "Poppins",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 16,
}

const $HomeHeader: ViewStyle = {
  height: 235,
  paddingHorizontal: 31,
  borderRadius: 50,
}

const $Image: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 66,
}

const $userName: TextStyle = {
  fontSize: 23,
  fontWeight: "800",
  left: 50,
}

const $Hi: TextStyle = {
  fontSize: 23,
  fontWeight: "500",
}

const $searchBarContainer: ImageStyle = {
  marginTop: 25,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: colors.lightGrey,
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 16,
}
const $what: TextStyle = {
  fontSize: 19,
  fontWeight: "500",
  color: "#FCFCFC",
}
const $today: TextStyle = {
  fontSize: 19,
  fontWeight: "500",
  color: "#FCFCFC",
  left: 85,
}

const $searchInput: TextStyle = {}

const $homeSectionTwo: ViewStyle = {
  marginHorizontal: 20,
  marginBottom: 42,
}

const $homeSectionThree: ViewStyle = {
  marginHorizontal: 20,
  marginBottom: 42,
}

const $learnCategory: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 32,
}
const $recentBooks: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // marginTop: 32,
}

const $listSubject: ImageStyle = {
  marginTop: 20,
  display: "flex",
  flexDirection: "row",
  gap: 5,
  flexWrap: "wrap",
  justifyContent: "flex-start",
}

const $subject: TextStyle = {
  color: "#C9C9C9",
  fontSize: 12,
  fontWeight: "400",
  backgroundColor: colors.lightGrey,
  paddingHorizontal: 22,
  paddingVertical: 12,
  borderRadius: 15,
}

const $tesb: TextStyle = {
  color: "#C9C9C9",
  fontSize: 12,
  fontWeight: "400",
  backgroundColor: colors.lightGrey,
}

const $topics: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 21,
  marginTop: 20,
  paddingHorizontal: 14,
  paddingTop: 11,
  paddingBottom: 28,
}

const $vid: ViewStyle = {
  position: "relative",
}

const $play: ImageStyle = {
  position: "absolute",
  top: "25%",
  left: "27%",
}

const $topicContainer: ViewStyle = {
  width: "50%",
}
const $topicNameView: ViewStyle = {
  backgroundColor: "rgba(94, 91, 91, 0.33)",
  paddingHorizontal: 18,
  paddingVertical: 12,
  borderRadius: 15,
  marginBottom: 10,
  width: 100,
}

const $topicName: TextStyle = {
  color: colors.lemon,
  fontSize: 12,
  fontWeight: "600",
}

const $topicTopic: TextStyle = {
  fontSize: 24,
  fontWeight: "600",
  color: colors.white,
  marginBottom: 6,
}

const $topicTutor: TextStyle = {
  fontSize: 15,
  fontWeight: "400",
  color: colors.white,
}

const $tutor: TextStyle = {
  color: colors.lemon,
}

const $stre: ViewStyle = {
  marginTop: 23,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}
const $re: ViewStyle = {
  marginRight: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}
const $retxt: TextStyle = {
  color: "#AFACAC",
}

const $books: ViewStyle = {
  borderRadius: 15,
  marginBottom: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  paddingLeft: 8,
  paddingRight: 33,
  paddingVertical: 10,
}
const $bookNo: ViewStyle = {
  borderRadius: 10,
}
const $bookNoT: TextStyle = {
  padding: 7,
  fontSize: 15,
  color: colors.white,
  fontWeight: "500",
}

const $bookName: TextStyle = {
  marginLeft: 22,
  width: 230,
}
const $bookNameT: TextStyle = {
  fontWeight: "500",
  fontSize: 15,
  color: "#EEF0EA",
}

const $bookNameTS: TextStyle = {
  fontWeight: "900",
  fontSize: 10,
  color: "#EEF0EA",
}
const $bookIcon: ViewStyle = {
  backgroundColor: "#2B2929",
  borderRadius: 20,
}
const $booksCon: ViewStyle = {
  marginTop: 28,
}
const $iconE: ViewStyle = {
  padding: 8,
}
