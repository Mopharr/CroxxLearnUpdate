import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const EditProfile = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <ImageBackground
                source={require("../../assets/images/CroxxImage/editProfile.png")}
                style={styles.ImageBackground}
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
                            source={require("../../assets/images/CroxxImage/profileImage.png")}
                            style={styles.Image}
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
                    source={require("../../assets/images/CroxxImage/save.png")}
                    style={{
                        alignSelf: "center",
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile
