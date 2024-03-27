import React, { FC, useState } from "react"

import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  // TouchableOpacity,
} from "react-native"
import { colors } from "../../theme/color"
import { useNavigation, useRoute } from "@react-navigation/native"
import styles from "./styles"

export const Summary = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { results }: any = route.params

  return (
    <View>
      <ScrollView style={styles.classroomHeader}>
        <ImageBackground
          source={require("../../assets/images/CroxxImage/Quiz.png")}
          style={styles.ClassImage}
        >
          <View style={styles.ImageContent}>
            <View style={styles.textIMC}>
              <Text style={styles.textIM}>Result</Text>
            </View>
          </View>
        </ImageBackground>
        <View>
          <View style={styles.sec}>
            {results.map((result, index) => (
              <>
                <ImageBackground
                  source={require("../../assets/images/CroxxImage/qu.png")}
                  style={styles.exo}
                >
                  <View style={styles.num}>
                    <Text style={styles.qNum}>Question {index + 1}:</Text>
                  </View>
                  <Text style={styles.time}>{result.question}</Text>
                  <Text style={styles.sAns}>Selected Answer: {result.selectedAnswer}</Text>
                  <Text style={styles.sAns}>Correct Answer: {result.correctAnswer}</Text>
                  {result.selectedAnswer == result.correctAnswer ? (
                    <Text style={{ color: colors.lemon }}>Correct</Text>
                  ) : (
                    <Text style={{ color: colors.error }}>Incorrect</Text>
                  )}
                </ImageBackground>
              </>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}