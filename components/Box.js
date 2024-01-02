import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Box = (props) => {
    const { backgroundcolor } = props;
    console.log("background color",backgroundcolor);
    return (
        <View style={{
            height: "25%",
            width: "45%",
            backgroundColor: backgroundcolor,
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
        }}>
            <Text>Box</Text>
        </View>
    )
}

export default Box

const styles = StyleSheet.create({
    boxStyle: {
        height: "25%",
        width: "45%",
        // backgroundColor: backgroundcolor,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    }

})