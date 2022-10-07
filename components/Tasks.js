import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  NativeModules,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import tw from "twrnc";

function Tasks(props) {
  return (
    <View style={tw``}>
      <View
        style={tw`h-[53px] p-[15px] items-center rounded-lg mt-5 bg-black flex-row flex-wrap justify-start `}
      >
        <TouchableOpacity
          style={tw`w-[24px] h-[24px] rounded-lg bg-cyan-500 mr-5`}
          onPress={props.CallThis}
        />
        <Text style={tw`max-w-[80%] text-white`}>{props.text}</Text>
        <View
          style={tw`w-[12px] h-[12px] absolute right-10 rounded-lg bg-white border-solid border-2 border-sky-500 `}
        />
      </View>
    </View>
  );
}

export default Tasks;
