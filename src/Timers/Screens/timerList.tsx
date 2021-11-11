import React from "react";
import {FlatList, View, Button} from "react-native";
import { Timer } from "../timer";
import ReadOnlyTimer from "./readOnlyTimer";

const TimerList = () => {
  const timers: Timer[] = [
      {
          id: 1,
          color: "red",
          length: {hour: 0, minute: 5, second: 0},
          name: "Jump Rope"
      }
  ];

  return (
    <View style={{marginVertical: 10}}>
      <FlatList 
        data={timers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <ReadOnlyTimer timer={item}/>
        }}
      />
      <Button 
        title="Add New Timer"
        onPress={() => {}}
      />
    </View>
  );
};

export default TimerList;