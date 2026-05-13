import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';

import { useRouter } from 'expo-router';

import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

import { hobbiesStyles as styles } from '../../styles/screens/hobbiesStyles';

// COMPONENTE DA BOTTOM BAR
import { BottomBar } from '../../components/BottomBar';


// ================= COMPONENTE CARD =================
function HobbyCard(props: any) {

  return (

    <View style={styles.hobbyCard}>

      {/* ================= TOPO ================= */}
      <View style={styles.cardTopRow}>

        {/* ÍCONE */}
        <View style={styles.iconBox}>

          <FontAwesome5
            name={props.icon}
            size={22}
            color="#4B0082"
          />

        </View>

        {/* NOME */}
        <Text style={styles.hobbyTitle}>
          {props.name}
        </Text>

        {/* NÍVEL */}
        <View style={styles.levelCircle}>

          <Text style={styles.levelText}>
            {props.level}
          </Text>

        </View>

      </View>

      {/* ================= PROGRESSO ================= */}
      <View style={styles.progressWrapper}>

        {/* TEXTO */}
        <Text style={styles.percentageText}>
          {props.percent}
        </Text>

        {/* FUNDO */}
        <View style={styles.progressBarBg}>

          {/* BARRA */}
          <View
            style={[
              styles.progressBarFill,
              { width: props.progress },
            ]}
          />

        </View>

      </View>

    </View>
  );
}


// ================= TELA =================
export default function MeusHobbies() {

  const router = useRouter();

  return (

    <View style={{ flex: 1 }}>

      {/* ================= SCROLL ================= */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================= HEADER ================= */}
        <View style={styles.header}>

          {/* BOTÃO VOLTAR */}
          <Pressable onPress={() => router.back()}>

            <Ionicons
              name="arrow-back"
              size={28}
              color="#4B0082"
            />

          </Pressable>

          {/* TÍTULO */}
          <Text style={styles.headerTitle}>
            Meus Hobbies
          </Text>

        </View>

        {/* ================= CONTEÚDO ================= */}
        <View style={styles.content}>

          {/* TEXTO */}
          <Text style={styles.subtitle}>
            Continue sua jornada de aprendizado.
            Aqui estão os hobbies que você está
            explorando no momento.
          </Text>

          {/* ÍCONE INFO */}
          <View style={styles.infoContainer}>

            <MaterialIcons
              name="info"
              size={22}
              color="#CCC"
            />

          </View>

          {/* ================= CARD FOTOGRAFIA ================= */}
          <HobbyCard
            icon="camera"
            name="Fotografia"
            level="III"
            progress="50%"
            percent="50%"
          />

          {/* ================= CARD MÚSICA ================= */}
          <HobbyCard
            icon="music"
            name="Música"
            level="II"
            progress="75%"
            percent="75%"
          />

          {/* ================= CARD CULINÁRIA ================= */}
          <HobbyCard
            icon="utensils"
            name="Culinária"
            level="I"
            progress="35%"
            percent="35%"
          />

        </View>

        {/* ================= ESPAÇO BOTTOM BAR ================= */}
        <View style={{ height: 120 }} />

      </ScrollView>

      {/* ================= BOTTOM BAR ================= */}
      <BottomBar />

    </View>
  );
}