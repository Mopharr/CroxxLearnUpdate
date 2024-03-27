import React from "react"
// import { Button } from "../..v/components"
import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native"

import { useNavigation, useRoute } from "@react-navigation/native"
import styles from "./styles"

export const StartTest = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { examLink }: any = route.params


  const handleGetexamLink = () => {
    navigation.navigate("test", { examLink })
  }

  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <View>
          <ImageBackground
            source={require("../../assets/images/CroxxImage/Quiz.png")}
            style={styles.ClassImage}
          >
            <View style={styles.ImageContent}>
              <View style={styles.textIMC}>
          <Text style={styles.textIM}>{examLink.category}</Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.sec}>

            <ImageBackground
              source={require("../../assets/images/CroxxImage/qu.png")}
              style={styles.exo}
            >
              <Text style={styles.topic}>{examLink.name}</Text>
              <Text style={styles.topic}>Quiz</Text>
              <Text style={styles.time}>
                23 Quesion, <Text style={styles.timeSpan}>{examLink.duration} Minutes</Text>
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleGetexamLink()}
              style={styles.start}
            >
              <Text style={styles.cancelText}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}