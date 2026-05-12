import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

export function BottomBar() {
  return (
    <View>

      <TouchableOpacity>
        <Image
          source={require("../assets/chat.png")}
        />

        <Text>Chat IA</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../assets/hobby.png")}
        />

        <Text>Hobbies</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../assets/perfil.png")}
        />

        <Text>Perfil</Text>
      </TouchableOpacity>

    </View>
  );
}