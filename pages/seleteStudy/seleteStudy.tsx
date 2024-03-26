import React, { FC } from "react"
import {
  TextStyle,
  ViewStyle,
  Dimensions,
  ImageStyle,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"
import { colors } from "../../theme/color"

const back = require("../../assets/images/CroxxImage/backr.png")


const { height, width } = Dimensions.get("screen")

export const SelectStudy = () => {
  const navigation = useNavigation()

//   function signUp() {
//     navigation.navigate("Class", { screen: "Home" })
//   }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={styles.screenContentContainer}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
      >
      <ImageBackground source={back} imageStyle={styles.backgroundImage}>
        {/* <Text style={$loginText}>
          let’s get you <Text style={$loStart}>started</Text>
        </Text> */}
        <View>
          <View>
            <Text style={styles.stater}>Set Your</Text>
          </View>

          <Text style={styles.staterText}>Study!</Text>
        </View>

        <View style={styles.AuthInput}>
          <View style={styles.search}>
            <TextInput
              style={styles.textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="Search"
            />
            <FontAwesome name="search" size={16} style={styles.searchIcon} />
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="MAT111"
            />
            <View style={styles.iconBac}>
              <FontAwesome name="check" size={16} style={styles.searchIcon} />
            </View>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="Chem 101"
            />
            <View style={styles.iconBac}>
              <FontAwesome name="check" size={16} style={styles.searchIcon} />
            </View>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="Phy 101"
            />
            <View style={styles.iconBac}>
              <FontAwesome name="check" size={16} style={styles.searchIcon} />
            </View>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="Bio 101"
            />
            <View style={styles.iconBac}>
              <FontAwesome name="check" size={16} style={styles.searchIcon} />
            </View>
          </View>
        </View>
        <TouchableOpacity testID="login-button" style={styles.tapButton} onPress={() => navigation.navigate("main", { screen: "classRoom" })}>
          <Text style={styles.btnLo}>Continue</Text>
        </TouchableOpacity>
      
      </ImageBackground>
    </KeyboardAvoidingView>
    </View>
  )
}