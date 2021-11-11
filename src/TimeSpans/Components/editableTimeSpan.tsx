import React, { useState } from "react";
import { View, StyleProp, ViewStyle, StyleSheet, TextInput, Button } from "react-native";

interface EditableTimeSpanProps {
    style: StyleProp<ViewStyle>,
    callback: () => any
}

const EditableTimeSpan = (props: EditableTimeSpanProps) => {
    return (
        <View style={props.style}>
            <TextInput style={{...styles.enterText, paddingLeft: 10}} placeholder="hr" keyboardType="number-pad"/>
            <TextInput style={styles.enterText} placeholder="min" keyboardType="number-pad"/>
            <TextInput style={styles.enterText} placeholder="sec" keyboardType="number-pad"/>
            <Button title="Update" onPress={() => props.callback()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    enterText: {
        flex: 1,
        fontSize: 30,
        paddingRight: 5
    },
});

export default EditableTimeSpan;
