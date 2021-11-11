import React, {ReactNode} from "react";
import {StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";

interface RowProps {
  label: string;
  style?: StyleProp<ViewStyle> | undefined;
  children?: ReactNode | undefined;
}

const Row = ({label, style, children}: RowProps) => {
  style = style ?? {};
  return (
    <View
      style={{
        ...(style as object),
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 5,
          marginHorizontal: 10,
        }}>
        {label}
      </Text>
      <View style={styles.rowStyle}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },
});

export default Row;
