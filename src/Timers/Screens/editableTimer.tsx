import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native"
import { Timer } from "../timer";
import { Picker } from "@react-native-picker/picker";
import EditableTimeSpan from "../../TimeSpans/Components/editableTimeSpan";
import ReadOnlyTimeSpan from "../../TimeSpans/Components/readOnlyTimeSpan";

const availableColors = [
    "Red", "Orange", "Yellow", "Green",
    "Blue", "Indigo", "Violet"
];
const sixtyInterval = [...Array(60).keys()];
const twentyFourInterval = [...Array(24).keys()];

const EditableTimer = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [color, setColor] = useState("");
    // TODO: Replace with store
    const timer: Timer = {
        color: "red",
        id: 1,
        length: {hour: 0, minute: 5, second: 0},
        name: "Testing"
    }

    return (
        <View>
            <Modal visible={modalVisible} style={styles.modalStyle} transparent={true}>
                <View style={{...styles.columnStyle, flex: 1}}>
                    <EditableTimeSpan
                        style={{...styles.rowStyle, width: "80%", height: "20%"}}
                        callback={() => setModalVisible(false)}
                    />
                </View>
            </Modal>
            <View style={{...styles.rowStyle, marginBottom: 30}}>
                <TextInput value={timer.name} style={{flex: 1, fontSize: 40}} />
            </View>
            <View style={styles.columnStyle}>
                <View style={styles.rowStyle}>
                    <Text style={styles.centerText}>Length:</Text>
                    <Pressable onPress={() => setModalVisible(true)} style={{flex: 1, alignSelf: 'flex-end'}}>
                        <ReadOnlyTimeSpan
                            style={{alignSelf: 'flex-end'}}
                            length={timer.length}
                        />
                    </Pressable>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.centerText}>Color:</Text>
                    <Picker 
                        style={{flex: 1, alignSelf: 'flex-end'}}
                        selectedValue={color} 
                        onValueChange={(value, index) => setColor(value)}
                        mode="dropdown">
                        {
                            availableColors.map((colorValue, index) => {
                                    return (
                                        <Picker.Item
                                            key={index}
                                            label={colorValue}
                                            value={colorValue}
                                            color={colorValue.toLowerCase()}
                                        />
                                    );
                                }
                            )
                        }
                    </Picker>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    columnStyle: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'        
    },
    rowStyle: {
        backgroundColor: '#000000',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    centerText: {
        alignSelf: 'center',
        fontSize: 20
    },
    modalStyle: {
        backgroundColor: '#000000',
        marginBottom: 50,
    }
});

export default EditableTimer;