/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState, useEffect } from "react"
import {
  ViewStyle,
  Dimensions,
  ScrollView,
  ImageBackground,
  View,
  ImageStyle,
  TextStyle,
  Text,
  TouchableOpacity,
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import styles from "./styles"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { colors } from "../../theme/color"

export const Test = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { examLink }: any = route.params

  const [quizData, setQuizData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null))
  const [timer, setTimer] = useState(0)
  let countdownInterval: NodeJS.Timeout

  const [correctAns, setCorrectAns] = useState([])
  const [showResults, setShowResults] = useState(false)

  async function queryQuesions() {
    const token = await AsyncStorage.getItem("token")
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }

    return axios
      .get(`https://croxxlearn-d5874d7f0aa7.herokuapp.com/api/v1/exams/${examLink._id}`, {
        headers,
      })
      .then((res) => {
        setQuizData(res.data.exam.questions)
        setCorrectAns(res.data.exam.questions.map((ans) => ans.correctOption))
        setTimer(res.data.exam.duration * 60)
        countdownInterval = setInterval(() => {
          setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0))
        }, 1000)
      })
      .catch((error) => {
        console.log("err", error)
      })
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  }

  const handleSelectAnswer = (answer) => {
    const updatedSelectedAnswers = [...selectedAnswers]
    updatedSelectedAnswers[currentQuestionIndex] = answer
    setSelectedAnswers(updatedSelectedAnswers)
    console.log(answer)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    const results = calculateResults()

    navigation.navigate("summary", { results })
  }

  const calculateResults = () => {
    return selectedAnswers.map((selectedAnswer, index) => ({
      question: quizData[index].name,
      selectedAnswer,
      correctAnswer: correctAns[index],
      isCorrect: selectedAnswer === correctAns[index],
    }))
  }

  useEffect(() => {
    queryQuesions()
    countdownInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0))
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clearInterval(countdownInterval)
      // handleSubmit()
    }
  }, [timer])

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
              <View style={styles.num}>
                <Text style={styles.qNum}>Question {currentQuestionIndex + 1}:</Text>
              </View>
              <Text style={styles.time}>{quizData[currentQuestionIndex]?.name}</Text>

              <View style={styles.nP}>
                <TouchableOpacity onPress={() => handlePreviousQuestion()}>
                  <FontAwesome name="arrow-circle-left" size={23} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNextQuestion()}>
                  <FontAwesome name="arrow-circle-right" size={23} color="#fff" />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.optionsContainer}>
            {quizData[currentQuestionIndex]?.options &&
              Object.entries(quizData[currentQuestionIndex]?.options).map(
                ([optionKey, optionValue]) => (
                  <TouchableOpacity
                    key={optionKey}
                    onPress={() => handleSelectAnswer(optionValue)}
                    style={[
                      styles.option, // Use styles.option instead of $option
                      selectedAnswers[currentQuestionIndex] === optionValue && styles.selectedOption, // Apply styles.selectedOption conditionally
                    ]}
                  >
                    <Text
                      style={
                        selectedAnswers[currentQuestionIndex] === optionValue
                          ? styles.selectedText // Use styles.selectedText instead of $selectedText
                          : styles.normalText // Use styles.normalText instead of $normalText
                      }
                    >
                      {optionKey}. {optionValue}
                    </Text>
                  </TouchableOpacity>
                )
              )}
          </View>

          <View style={styles.questionNumbersContainer}>
            {quizData.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentQuestionIndex(index)}
                style={[styles.questionNumber, currentQuestionIndex === index && styles.selectedQuestionNumber]}
              >
                <Text
                  style={currentQuestionIndex === index ? styles.selectedQuestionText : styles.questionText}
                >
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.timeCal}>
            <View style={styles.CalTimer}>
              <Text style={styles.timerVal}>{formatTime(timer)}</Text>
            </View>
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.CalTimer}>
              <Text style={styles.timerVal}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timeCal}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancel}>
              <Text style={styles.cancelText}>Cancel quiz</Text>
            </TouchableOpacity>
          </View>
          {showResults && (
            <View>
              <Text style={styles.textIM}>Results:</Text>
              {calculateResults().map((result, index) => (
                <View key={index}>
                  <Text>{result.question}</Text>
                  <Text>Selected Answer: {result.selectedAnswer}</Text>
                  <Text>Correct Answer: {result.correctAnswer}</Text>
                  {result.isCorrect ? (
                    // eslint-disable-next-line react-native/no-inline-styles
                    <Text style={{ color: colors.lemon }}>Correct</Text>
                  ) : (
                    <Text style={{ color: colors.error }}>Incorrect</Text>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}