import React, { FC } from "react"
// import { Button } from "../..v/components"
import { ViewStyle, Dimensions, ScrollView, View, Text } from "react-native"
import { colors } from "../../theme/color"
import { useNavigation } from "@react-navigation/native"
// import Pdf from "react-native-pdf"
// import PDFView from 'react-native-view-pdf'

const { height, width } = Dimensions.get("screen")
export const ReadPdf = () => {
    const navigation = useNavigation()
    const PdfResource = { uri: 'https://www.lths.net/cms/lib/IL01904810/Centricity/domain/165/units/Soccer.pdf', cache: true };


    return (
        <View>
            <ScrollView style={$classroomHeader}><Text>HEADER</Text></ScrollView>
            {/* <Pdf
                trustAllCerts={false}
                source={PdfResource}
                style={$pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
            /> */}
        </View>
    )
}

const $classroomHeader: ViewStyle = {
    backgroundColor: colors.blackBackground,
    height,
    width,
}
const $pdf: ViewStyle = {
  flex: 1,
  alignSelf: "stretch",
}
