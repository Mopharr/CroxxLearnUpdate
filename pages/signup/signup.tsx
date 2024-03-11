import React, { useState, useEffect } from "react"
import { AxiosError } from "axios";
import { baseStyles } from "../../style";
// import styles from "../signup/styles";
import { useNavigation } from '@react-navigation/native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import handleSignup from "../../handlers/auth/handleSignup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Image
} from 'react-native';

import { useAuth } from '../../contexts/AuthContext';
import { useUser } from "../../contexts/UserContext";
import { useLoading } from "../../contexts/LoadingContext";
import { colors } from "../../theme/color";
import Container, { Toast } from "toastify-react-native"
import { FontAwesome } from "@expo/vector-icons"
import handleSignup from "../../handlers/auth/handleSignup";



type FormData = {
  firstName: string
  lastName: string
  email: string
  // role: string
  password: string
  passwordConfirm: string
}

const back = require("../../assets/images/CroxxImage/backr.png")
const facebook = require("../../assets/CroxxIcon/Facebook.png")
const google = require("../../assets/CroxxIcon/Google.png")

const { height, width } = Dimensions.get("screen");


export default function SignUp() {
  const navigation = useNavigation()
  const { auth, setAuth } = useAuth()
  const { user, setUser } = useUser()
  const { loading, setLoading } = useLoading()

  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')

  const [error, setError] = useState<String | null>(null)

  const signup = async () =>{

    setLoading(true);    
    handleSignup(firstName, lastName, email, password1, password2)
    .then(data => {
      if(data){
        setUser(data.user);
        setAuth(data.success);
        setEmail('');
        setPassword1('');
        setPassword2('');
        setLoading(false);

      }
      console.log(data);
    }).catch(err => {
      if(err instanceof Error){
        setError(err.message)
      }
      if(err instanceof AxiosError){
        switch(err.response?.status){
          case 406:{
            setError(err.response.data)
            break
          }
          case 500:{
            setError("A server error occured, sorry.")
            break
          }
          case undefined:{
            setError("Something went wrong.")
            break
          }
          default:{
            setError("Something went wrong.")
            break
          }
        }
      }
      console.log(err)
      setLoading(false);
    })
  }

  useEffect(()=>{
    // if(auth){
    //   navigation.navigate('main', {screen:'new-challenges'})
    // }
  },[auth]);



  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={styles.screenContentContainer}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
      >
        {/* <Container position="top" /> */}

        <ImageBackground source={back} imageStyle={styles.backgroundImage}>
          <View>
            <View>
              <Text style={styles.stater}>Fill in your</Text>
            </View>

            <Text style={styles.staterText}>Details</Text>
          </View>

          <View style={styles.AuthInput}>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={styles.textField}
              placeholder={"First Name"}
              placeholderTextColor={"grey"}
            />
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={styles.textField}
              placeholder={"First Name"}
              placeholderTextColor={"grey"}
            />

            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.textField}
              placeholder={"First Name"}
              placeholderTextColor={"grey"}
            />
            <TextInput
              style={[styles.textField]}
              placeholder={'Password'}
              onChangeText={(val) => setPassword1(val)}
              secureTextEntry={true}
            />
            <TextInput
              style={[styles.textField]}
              placeholder={'Confirm Password'}
              onChangeText={(val) => setPassword2(val)}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity onPress={() => console.log('set')}>
            <ImageBackground
              source={require("../../assets/images/CroxxImage/rBtn.png")}
              style={styles.tapButton}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.btnLo}>Login</Text>
              )}
            </ImageBackground>
          </TouchableOpacity>

          <View>
            <Text style={styles.or}>--OR--</Text>
          </View>
          <View style={styles.icons}>
            <View style={styles.ic}>
              <Image source={facebook} />
            </View>
            <View style={styles.ic}>
              <Image source={google} />
            </View>
            <View style={styles.ic}>
              <FontAwesome name="apple" size={20} style={styles.apple} />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height,
    width,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    width,
    height,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    marginTop: 150,
  },
  logoText: {
    textAlign: "center",
    color: "#A8A8A8",
    fontSize: 15,
    marginTop: -30,
    marginBottom: 50,
  },
  logoBold: {
    fontWeight: "700",
  },
  loginText: {
    color: "#F2EEF8",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  AuthInput: {
    borderRadius: 31,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingBottom: 20,
    width: "100%",
  },
  textField: {
    width: "95%",
    height: 43,
    backgroundColor: "#2E2E2E",
    borderRadius: 16,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginBottom: 15,
  },
  tapButton: {
    marginTop: 24,
    width: "75%",
    marginLeft: 80,
    marginRight: "auto",
    height: 48,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLo: {
    fontWeight: "800",
    fontSize: 22,
    color: "#fff",
  },
  errorMessage: {
    paddingHorizontal: 12,
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  stater: {
    color: "#fff",
    fontSize: 42,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    width: 223,
    lineHeight: 50,
  },
  staterText: {
    color: "#7EAA00",
    fontSize: 63,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 80,
    marginLeft: "auto",
    marginRight: "auto",
    width: 223,
    marginBottom: 30,
  },
  or: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff",
    fontStyle: "normal",
    textAlign: "center",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 10,
  },
  ic: {
    backgroundColor: "rgba(88, 84, 84, 0.5)",
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  apple: {
    color: "grey",
  }
});
