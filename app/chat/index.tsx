import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { ChatStyles as styles } from "../../styles/screens/chatStyles";

// COMPONENTE DA BOTTOM BAR
import { BottomBar } from "../../components/BottomBar";

export default function Chat() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <Text style={styles.logo}>Chat IA</Text>

        <View style={styles.headerRight}>

          <View style={styles.notificationContainer}>
            <Ionicons
              name="notifications"
              size={22}
              color="#5B11D9"
            />
          </View>

          <Image
            source={require("../../assets/perfil.png")}
            style={styles.profileImage}
          />

        </View>
      </View>

      {/* CHAT */}
      <ScrollView
        style={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      >

        {/* CARD IA */}
        <View style={styles.aiCard}>

          <View style={styles.poweredContainer}>
            <Text style={styles.poweredText}>
              ✨ POWERED BY AI
            </Text>
          </View>

          <Text style={styles.title}>
            Encontre sua{"\n"}próxima paixão
          </Text>

          <Text style={styles.description}>
            Me conte o que você ama, e darei o hobbie
            perfeito para você!
          </Text>

        </View>

        {/* ESPAÇO PARA INPUT */}
        <View style={{ height: 180 }} />

      </ScrollView>

      {/* INPUT */}
      <View style={styles.inputContainer}>

        <TextInput
          placeholder="Enviar uma mensagem..."
          placeholderTextColor="#B6B6B6"
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendButton}>
          <Ionicons
            name="send"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>

      {/* BOTTOM BAR */}
      <BottomBar />

    </View>
  );
}