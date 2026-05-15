import React from "react";

import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";

// IMPORTAR ROUTER
import {
  useRouter,
  usePathname
} from "expo-router";

export function BottomBar() {

  // ROTAS
  const router = useRouter();

  // PEGA ROTA ATUAL
  const pathname = usePathname();

  return (

    // CONTAINER DA BARRA
    <View style={styles.container}>

      {/* ================= CHAT IA ================= */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/chat")}
      >

        <Image
          source={
            pathname === "/chat"
              ? require("../assets/chatIAcor.png")
              : require("../assets/chat.png")
          }
          style={styles.icon}
        />

      </TouchableOpacity>

      {/* ================= HOBBIES ================= */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/home")}
      >

        <Image
          source={
            pathname === "/home"
              ? require("../assets/hobbycor.png")
              : require("../assets/hobby.png")
          }
          style={styles.hobbyIcon}
        />

      </TouchableOpacity>

      {/* ================= PERFIL ================= */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/profile/profile")}
      >

        <Image
          source={
            pathname === "/profile/profile"
              ? require("../assets/perfilcor.png")
              : require("../assets/perfil.png")
          }
          style={styles.icon}
        />

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

 // ================= BARRA =================
container: {
  position: "absolute",
  bottom: 0,

  width: "100%",
  height: 90,

  backgroundColor: "#f1f2f2",

  flexDirection: "row",

  alignItems: "center",
  justifyContent: "space-around",

  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,

  // SOMBRA IOS
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: -4,
  },
  shadowOpacity: 0.12,
  shadowRadius: 10,

  // SOMBRA ANDROID
  elevation: 10,
},

// ================= BOTÕES =================
button: {
  alignItems: "center",
  justifyContent: "center",
},

// ================= ÍCONES =================
icon: {
  width: 54,
  height: 54,

  resizeMode: "contain",
},

// ================= HOBBY =================
hobbyIcon: {
  width: 85,
  height: 85,

  resizeMode: "contain",
},

});