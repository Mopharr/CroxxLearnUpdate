import React, { useState, useEffect } from "react"
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native"
import { colors } from "../../theme/color"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Entypo } from "@expo/vector-icons"
import styles from "./styles"
import { useRoute } from '@react-navigation/native';
import { usePage } from "../../contexts/PageContext"

export const CourseVideo = () => {
  const route = useRoute()

  const { singleVideo }: any = route.params

  const navigation = useNavigation()

  const [singleVideoWatch, setSingleVideoWatch] = useState([])
  const { setPage } = usePage();


  useFocusEffect(() => {
    setPage('courseVideo');
  });


  const handleVideoWatch = (video: any) => {
    setSingleVideoWatch(video)
  }
  useEffect(() => {
    if (singleVideoWatch && Object.keys(singleVideoWatch).length > 0) {
        navigation.navigate("lesson", { singleVideoWatch });
    }
  }, [singleVideoWatch]);
  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <View style={styles.coTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/CroxxIcon/arr.png")} />
          </TouchableOpacity>

          <Text style={styles.CoText}>video</Text>

          <Entypo name="bell" size={30} color={colors.white} />
        </View>
        <View style={styles.sectionTwo}>
          <View style={styles.ImBac}>
            <Image
              style={styles.ImBacP}
              source={require("../../assets/images/CroxxImage/bac.png")}
            />
            <View style={styles.tutorInfo}>
              <Image style={styles.tPro} source={require("../../assets/images/CroxxImage/tutor.png")} />
              <View>
                <View>
                  <Text style={styles.tu}>Tutor</Text>
                  <Text style={styles.tN}>Micheal</Text>
                </View>
                <View style={styles.qM}>
                  <View style={styles.op}>
                    <View style={styles.ed}>
                      <Image source={require("../../assets/images/CroxxImage/award.png")} />
                    </View>
                    <Text style={styles.edText}>Quiz</Text>
                  </View>
                  <View style={styles.op}>
                    <View style={styles.ed}>
                      <Image source={require("../../assets/images/CroxxImage/note-2.png")} />
                    </View>
                    <Text style={styles.edText}>Materials</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.topicWrap}>
              <TouchableOpacity
                onPress={() =>
                  handleVideoWatch(singleVideo)}
                style={styles.topics}
              >
                <View style={styles.topicContainer}>
                  <View style={styles.topicNameView}>
                    <Text style={styles.topicName}>{singleVideo.courseCode}</Text>
                  </View>
                  <Text style={styles.topicTopic}>{singleVideo.topic}</Text>
                  <Text style={styles.topicTutor}>
                    Tutor <Text style={styles.tutor}>Micheal</Text>
                  </Text>
                  <View style={styles.stre}>
                    <View style={styles.re}>
                      <Entypo name="star" size={12} color={colors.lemon} />
                      <Text style={styles.retxt}>12</Text>
                    </View>
                    <View style={styles.re}>
                      <Entypo name="eye" size={12} color={colors.lemon} />
                      <Text style={styles.retxt}>4 views</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.vid}>
                  <Image source={require("../../assets/images/CroxxImage/video.png")} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}