import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  Ionicons,
  EntypoFeather,
  Entypo,
  Octicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View>
          <View className="mt-5 ">
            <Text className="text-center text-xl mb-2">Employee Managament System</Text>
          </View>

          <View className=" flex-row items-center ">
            <Pressable
              onPress={() => router.push("/(home)/employees")}
              className="bg-gray-200  mt-2 mx-2 my-2 p-8 rounded-xl w-52 h-44 flex items-center justify-center flex-1"
            >
              <View className="flex items-center justify-center w-32 h-28 rounded-lg bg-white">
                <FontAwesome6 name="people-group" size={40} color="black" />
                <Text className=" mt-2 text-md text">Employee List</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              className="bg-gray-200  mt-2 mx-2 my-2 p-8 w-52 h-44 rounded-xl flex items-center justify-center flex-1"
            >
              <View className="flex items-center justify-center w-32 h-28  rounded-lg bg-white">
                <Ionicons name="bookmarks" size={40} color="black" />
                <Text className=" mt-2 text-md ">Mark Attendance</Text>
              </View>
            </Pressable>
          </View>

          <View className="mt-2 bg-slate-100 mx-2 my-2 rounded-xl ">
            <Pressable className="bg-slate-400 rounded-md p-2 flex-row items-center my-3 mx-3">
              <View className="p-2 w-10 h-10 rounded-md bg-white items-center justify-center">
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text className=" ml-5 text-xs font-bold flex-1">Attedance Report</Text>
              <View className="w-10 h-10 rounded-md bg-white items-center justify-center">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable className="bg-slate-400 rounded-md p-2 flex-row items-center my-3 mx-3">
              <View className="p-2 w-10 h-10 rounded-md bg-white items-center justify-center">
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text className=" ml-5 text-xs font-bold flex-1"> Summary Report</Text>
              <View className="w-10 h-10 rounded-md bg-white items-center justify-center">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable className="bg-slate-400 rounded-md p-2 flex-row items-center my-3 mx-3">
              <View className="p-2 w-10 h-10 rounded-md bg-white items-center justify-center">
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text className=" ml-5 text-xs font-bold flex-1">
                {" "}
                All Generate Reports
              </Text>
              <View className="w-10 h-10 rounded-md bg-white items-center justify-center">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable className="bg-slate-400 rounded-md p-2 flex-row items-center my-3 mx-3">
              <View className="p-2 w-10 h-10 rounded-md bg-white items-center justify-center">
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text className=" ml-5 text-xs font-bold flex-1"> Overtime Employees</Text>
              <View className="w-10 h-10 rounded-md bg-white items-center justify-center">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View className="bg-gray-300 flex-row">
            <View className="bg-red-400 mx-2 my-2 rounded-xl w-44 h-20  items-center justify-center ">
              <View className="flex items-center justify-center w-12 h-11 rounded-md bg-white">
                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
              </View>
              <Text>Attendance Criteria</Text>
            </View>
            <View className="bg-blue-400 mx-2 my-2 rounded-xl w-44 h-20  items-center justify-center ">
              <View className="flex items-center justify-center w-12 h-11 rounded-md bg-white">
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text>Increased Workflow</Text>
            </View>
          </View>
          <View className="bg-gray-300 flex-row">
            <View className="bg-zinc-400 mx-2 my-2 rounded-xl w-44 h-20  items-center justify-center ">
              <View className="flex items-center justify-center w-12 h-11 rounded-md bg-white">
                <MaterialIcons name="energy-savings-leaf" size={24} color="black" />
              </View>
              <Text>Cost Savings</Text>
            </View>
            <View className="bg-green-400 mx-2 my-2 rounded-xl w-44 h-20  items-center justify-center ">
              <View className="flex items-center justify-center w-12 h-11 rounded-md bg-white">
                <MaterialCommunityIcons name="chart-line" size={24} color="black" />
              </View>
              <Text>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
