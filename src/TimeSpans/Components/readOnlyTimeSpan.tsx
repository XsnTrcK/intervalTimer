import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { TimeSpan } from "../timeSpan";

interface ReadOnlyTimeSpanProps {
    length: TimeSpan
    style: StyleProp<ViewStyle>
}

const ReadOnlyTimeSpan = (props: ReadOnlyTimeSpanProps) => {
    const {length, style} = props;
    return (
        <View style={{...(style as object), ...styles.rowStyle}}>
            <Text style={styles.centerText}>
                {length.hour} hr
            </Text>
            <Text style={styles.centerText}>
                {length.minute} min
            </Text>
            <Text style={styles.centerText}>
                {length.second} sec
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({    
    centerText: {
        alignSelf: 'center',
        fontSize: 20,
        paddingRight: 5
    },
    rowStyle: {
        backgroundColor: '#000000',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
});

export default ReadOnlyTimeSpan;