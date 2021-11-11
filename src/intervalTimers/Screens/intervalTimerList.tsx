import React from "react";
import {FlatList, View, Text} from "react-native";
import { IntervalTimer } from "../intervalTimer";

const IntervalTimerList = () => {
  const intervalTimers: IntervalTimer[] = [];

  return (
    <View>
      <FlatList 
        data={intervalTimers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <Text>{item.id}</Text>
          )
        }}
      />
    </View>
  );
};

export default IntervalTimerList;