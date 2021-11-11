import React from "react";
import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import Row from "../../Components/row";
import ReadOnlyTimeSpan from "../../TimeSpans/Components/readOnlyTimeSpan";
import {Timer} from "../timer";

interface ReadOnlyTimerProps {
  timer: Timer;
  style?: StyleProp<ViewStyle> | undefined;
}

const ReadOnlyTimer = ({timer, style}: ReadOnlyTimerProps) => {
  return (
    <Row label={timer.name} style={style}>
      <ReadOnlyTimeSpan style={{alignSelf: "center"}} length={timer.length} />
      <View
        style={{
          ...styles.circleStyle,
          backgroundColor: timer.color.toLowerCase(),
        }}
      />
    </Row>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    margin: 5,
  },
});

export default ReadOnlyTimer;
