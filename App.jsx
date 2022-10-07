import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  NativeModules,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
//  This is for Tailwind React Native Classnames: https://github.com/jaredh159/tailwind-react-native-classnames
import tw from "twrnc";
import Tasks from "./components/Tasks";

export default function App() {
  const [goal, setGoal] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    //Alert.alert(`New task entered!: ${goal}`);
    Keyboard.dismiss();
    setTaskItems([...taskItems, goal]);
    setGoal(null);
  };

  //Task deleter:
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  function ThisFun() {
    Alert.alert("Hello");
  }

  return (
    <View style={tw`bg-gray-300 flex flex-1 px-5 pt-20`}>
      <StatusBar backgroundColor={"white"} />
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={tw`text-[25px] mr-2 font-bold`}>Today's Goals</Text>
        <ScrollView style={tw`h-[500px]`}>
          {taskItems.map((goal, index) => {
            return <Tasks CallThis={completeTask} key={index} text={goal} />;
          })}
        </ScrollView>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-row absolute right-[20px] mb-5 bottom-0 items-center justify-between w-[100%]`}
      >
        <TextInput
          style={tw`h-[60px] rounded-full text-center items-center w-[246px] bg-slate-50`}
          placeholder="Enter a task:"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <TouchableOpacity
          style={tw`bg-white items-center justify-center h-[60px] w-[60px] rounded-full`}
          onPress={() => handleTask()}
        >
          <Text style={tw`text-7`}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tasksWrapper: {},
  heading: {},
  views: {},
});
