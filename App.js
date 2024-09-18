import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(0,204,249)" }}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 130,
            height: 130,
            borderRadius: 100,
            borderWidth: 15,
          }}
        ></View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>GROW</Text>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>YOUR BUSINESS</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>
          We will help you to grow your business using
        </Text>
        <Text style={{ fontWeight: "bold" }}>online server</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 80,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#E3C000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 80,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#E3C000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
