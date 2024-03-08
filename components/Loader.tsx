import React from "react";
import { StyleSheet, View } from "react-native";
// import Lottie from 'lottie-react-native';

export default function Loader(){
    return(
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            {/* <Lottie source={require('../asset/icons/loader.json')} autoPlay loop
                style={styles.animation}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,2555,0.8)',
        zIndex:1
    },
    animation:{
        width:60,
        height:60,
    }
})