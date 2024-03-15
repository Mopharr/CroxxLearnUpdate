import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
import { Entypo, FontAwesome5 } from "@expo/vector-icons"

const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("./../.././../app/assets/images/CroxxImage/editProfile.png")}
        style={{
          width: "100%",
          height: "90%",
        }}
      >
        <View style={styles.editHeader}>
          <View style={styles.editHeaderOne}>
            <TouchableOpacity style={styles.editHeaderIcon} onPress={() => navigation.goBack()}>
              <Entypo name="back" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.ProfileText}>
              Edit
              <Text style={{ color: "#F3CE09" }}> Profile</Text>
            </Text>
          </View>
          <View style={styles.profileImageHead}>
            <Image
              source={require("../../../app/assets/images/CroxxImage/profileImage.png")}
              style={{
                width: 131,
                height: 131,
                borderRadius: 300,
                alignSelf: "center",
              }}
            />

            <TouchableOpacity style={styles.editImageIcon}>
              <FontAwesome5 name="pen" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.editNameHead}>
            <View style={styles.editNameHeadView}>
              <Text style={styles.editName}>Umeh</Text>
            </View>
            <View style={styles.editNameHeadView}>
              <Text style={styles.editName}>David</Text>
            </View>

            <View style={styles.editNameHeadView}>
              <View style={styles.editNameHeadView2}>
                <Text style={styles.editName}>100 Level</Text>
                <FontAwesome5 name="arrow-down" size={16} color="#999999" />
              </View>
            </View>

            <View style={styles.editNameHeadView}>
              <View style={styles.editNameHeadView2}>
                <Text style={styles.editName}>Science</Text>
                <FontAwesome5 name="arrow-down" size={16} color="#999999" />
              </View>
            </View>
          </View>

          <View style={styles.editNameHeadViewAd}>
            <Text style={styles.editName}>Advance settings</Text>
          </View>
        </View>
      </ImageBackground>

      <TouchableOpacity>
        <Image
          source={require("./../.././../app/assets/images/CroxxImage/save.png")}
          style={{
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default EditProfile
