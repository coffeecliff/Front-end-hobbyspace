// app/notifications/index.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { NotificationsStyles as styles } from "../../styles/screens/notificationsStyles";

// COMPONENTE
import { NotificationCategory } from "../../components/NotificationCategory";

// BOTTOM BAR
import { BottomBar } from "../../components/BottomBar";

export default function Notifications() {

  // CATEGORIA SELECIONADA
  const [selected, setSelected] = useState("Todas");

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <Text style={styles.title}>
          Notificações
        </Text>

        <Pressable>
          <Text style={styles.markRead}>
            Marcar todas como lidas
          </Text>
        </Pressable>

      </View>

      {/* CATEGORIAS */}
      <View style={styles.categories}>

        <NotificationCategory
          title="Todas"
          active={selected === "Todas"}
          onPress={() => setSelected("Todas")}
        />

        <NotificationCategory
          title="Comunidade"
          active={selected === "Comunidade"}
          onPress={() => setSelected("Comunidade")}
        />

        <NotificationCategory
          title="Progresso"
          active={selected === "Progresso"}
          onPress={() => setSelected("Progresso")}
        />

      </View>

      {/* CONTEÚDO */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* CARD 1 */}
        <View style={styles.notificationCard}>

          <View style={styles.leftContent}>

            <View style={styles.avatarContainer}>

              <Image
                source={require("../../assets/perfil.png")}
                style={styles.avatar}
              />

              <View style={styles.likeIcon}>
                <Ionicons
                  name="heart"
                  size={12}
                  color="#FFFFFF"
                />
              </View>

            </View>

            <View style={styles.textContainer}>

              <Text style={styles.description}>
                <Text style={styles.bold}>
                  João dos fotão
                </Text>
                {" "}curtiu sua foto na comunidade de fotografia
              </Text>

              <Text style={styles.time}>
                há 10m
              </Text>

            </View>

          </View>

          <Image
            source={require("../../assets/foto.png")}
            style={styles.preview}
          />

        </View>

        {/* CARD 2 */}
        <View style={styles.notificationCard}>

          <View style={styles.leftContent}>

            <View style={styles.progressIcon}>
              <Ionicons
                name="star"
                size={18}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.textContainer}>

              <Text style={styles.description}>
                <Text style={styles.bold}>
                  Parabéns!
                </Text>
                {" "}Você alcançou o nível 3 em fotografia
              </Text>

              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>

              <Text style={styles.levelText}>
                Próximo nível: IV
              </Text>

            </View>

          </View>

        </View>

        {/* CARD 3 */}
        <View style={styles.notificationCard}>

          <View style={styles.leftContent}>

            <View style={styles.avatarContainer}>

              <Image
                source={require("../../assets/perfil.png")}
                style={styles.avatar}
              />

              <View style={styles.likeIcon}>
                <Ionicons
                  name="heart"
                  size={12}
                  color="#FFFFFF"
                />
              </View>

            </View>

            <View style={styles.textContainer}>

              <Text style={styles.description}>
                <Text style={styles.bold}>
                  Nanda
                </Text>
                {" "}curtiu sua fotografia na comunidade de fotografia
              </Text>

              <Text style={styles.time}>
                há 48m
              </Text>

            </View>

          </View>

          <Image
            source={require("../../assets/foto.png")}
            style={styles.preview}
          />

        </View>

        <View style={{ height: 140 }} />

      </ScrollView>

      {/* BOTTOM BAR */}
      <BottomBar />

    </View>
  );
}