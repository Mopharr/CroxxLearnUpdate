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
import styles from "./styles";

const back = require("../../assets/images/CroxxImage/backr.png")
const facebook = require("../../assets/CroxxIcon/Facebook.png")
const google = require("../../assets/CroxxIcon/Google.png")

const { height, width } = Dimensions.get("screen");
const logo = require("../../assets/images/CroxxImage/logo1.png");


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

  const [error, setError] = useState<string | null>(null);

  const signup = async () => {

    setLoading(true);
    // console.log(firstName, lastName, email, password1, password2)
    handleSignup(firstName, lastName, email, password1, password2)
      .then(data => {
        if (data) {
          setEmail('');
          setFirstName('');
          setLastName('');
          setPassword1('');
          setPassword2('');
          setLoading(false);

        }
       navigation.navigate('auth', { screen: 'signin' } as { screen: string });
      }).catch(err => {
        console.log(err)
        handleError(err)
        setLoading(false);
      })
  }

  const handleError = (err: any) => {
    if (err.response) {
      switch (err.response.status) {
        case 404:
          setError("Invalid email address and password");
          break;
        case 500:
          setError("A server error occurred, sorry.");
          break;
        default:
          setError("Something went wrong.");
      }
    } else {
      setError("Request timed out");
    }
  };

  useEffect(() => {
    // if(auth){
    //   navigation.navigate('main', {screen:'new-challenges'})
    // }
  }, [auth]);



  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={styles.screenContentContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground source={back} style={styles.backgroundImage}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>
            Bringing out the <Text style={styles.logoBold}>genius</Text> in you
          </Text>

          <View>
              <Text style={styles.stater}>Fill in your Details</Text>
            </View>
          {error && <Text style={styles.errorMessage}>{error}</Text>}
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
              placeholder={"Last Name"}
              placeholderTextColor={"grey"}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.textField}
              placeholder={"Email"}
              placeholderTextColor={"grey"}
            />
            <TextInput
              style={[styles.textField]}
              placeholder={'Password'}
              onChangeText={(val) => setPassword1(val)}
              secureTextEntry={true}
              placeholderTextColor={"grey"}
            />
            <TextInput
              style={[styles.textField]}
              placeholder={'Confirm Password'}
              onChangeText={(val) => setPassword2(val)}
              secureTextEntry={true}
              placeholderTextColor={"grey"}
            />
            <TouchableOpacity onPress={signup}>
              <ImageBackground
                source={require("../../assets/images/CroxxImage/rBtn.png")}
                style={styles.tapButton}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.btnLo}>Sign up</Text>
                )}
              </ImageBackground>
            </TouchableOpacity>

          </View>
          <Text style={styles.acc}>
            Do you have an account?
            <Text
              style={styles.signUp}
              onPress={() => navigation.navigate("auth", { screen: "signin" })}
            >
              Login
            </Text>
          </Text>
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