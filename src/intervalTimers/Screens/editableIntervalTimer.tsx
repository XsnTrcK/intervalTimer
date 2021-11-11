import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import Row from "../../Components/row";
import ReadOnlyTimer from "../../Timers/Screens/readOnlyTimer";
import TimerList from "../../Timers/Screens/timerList";
import {IntervalTimer} from "../intervalTimer";

const EditableIntervalTimer = () => {
  const intervalTimer: IntervalTimer = {
    id: 0,
    name: "Test Timer",
    timers: [],
    breakBetweenTimers: {
      id: 1,
      name: "Rest Between Intervals",
      length: {
        hour: 0,
        minute: 0,
        second: 0,
      },
      color: "Yellow",
    },
    amountOfSets: 1,
    breakBetweenSets: {
      id: 2,
      name: "Break Between Sets",
      length: {
        hour: 0,
        minute: 0,
        second: 0,
      },
      color: "Yellow",
    },
  };
  return (
    <View>
      <View style={{...styles.rowStyle, marginBottom: 30}}>
        <TextInput value={intervalTimer.name} style={{flex: 1, fontSize: 40}} />
      </View>
      <TimerList />
      <ReadOnlyTimer
        timer={intervalTimer.breakBetweenTimers}
        style={{marginBottom: 10}}
      />
      <View style={styles.columnStyle}>
        <View style={styles.rowStyle}>
          <Row label="Amount of Sets">
            <TextInput style={{padding: 0, fontSize: 20}} keyboardType="number-pad" placeholder="#"/>
          </Row>          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  rowStyle: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  centerText: {
    alignSelf: "center",
    fontSize: 20,
  },
  modalStyle: {
    backgroundColor: "#000000",
    marginBottom: 50,
  },
});

export default EditableIntervalTimer;
