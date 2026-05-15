import React from 'react';

import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  ImageBackground
} from 'react-native';

import { useRouter } from 'expo-router';

import {
  Ionicons,
  FontAwesome5,
  MaterialIcons
} from '@expo/vector-icons';

import { homestyles as styles } from '../../styles/screens/homeStyles';

// COMPONENTE DA BOTTOM BAR
import { BottomBar } from "../../components/BottomBar";

export default function Home() {

  const router = useRouter();

  return (

    // ================= CONTAINER PRINCIPAL =================
    <View style={{ flex: 1 }}>

      {/* ================= SCROLL DA TELA ================= */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================= HEADER ================= */}
        <View style={styles.header}>

          <Text style={styles.logoText}>
            HobbySpace
          </Text>

          <View style={styles.headerIcons}>

            {/* BOTÃO DE NOTIFICAÇÃO */}
            <Pressable
              style={styles.notificationBtn}
              onPress={() => router.push("/notifications")}
            >

              <Ionicons
                name="notifications"
                size={28}
                color="#4B0082"
              />

            </Pressable>

            {/* FOTO DE PERFIL */}
            <Image
              source={require('../../assets/perfilpadrao.png')}
              style={styles.profileImg}
            />

          </View>

        </View>

        {/* ================= BARRA DE PESQUISA ================= */}
        <View style={styles.searchBar}>

          <Ionicons
            name="search"
            size={20}
            color="#999"
          />

          <TextInput
            placeholder="Explore novos hobbies..."
            style={styles.searchInput}
            placeholderTextColor="#999"
          />

        </View>

        {/* ================= MEUS HOBBIES ================= */}
        <View style={styles.sectionHeader}>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >

            <Text style={styles.sectionTitle}>
              Meus Hobbies
            </Text>

            <MaterialIcons
              name="info-outline"
              size={18}
              color="#CCC"
              style={{ marginLeft: 8 }}
            />

          </View>

          {/* BOTÃO VER TODOS */}
          <Pressable
            onPress={() => router.push('/home/meushobbies')}
          >

            <Text style={styles.verMais}>
              Ver Todos

            </Text>

          </Pressable>

        </View>

        {/* ================= CARD FOTOGRAFIA ================= */}
        <View style={styles.hobbyCard}>

          <View style={styles.cardHeader}>

            {/* ÍCONE */}
            <View style={styles.iconContainer}>

              <FontAwesome5
                name="camera"
                size={20}
                color="#4B0082"
              />

            </View>

            {/* NOME */}
            <Text style={styles.hobbyName}>
              Fotografia
            </Text>

            {/* NÍVEL */}
            <View style={styles.levelBadge}>

              <Text style={styles.levelText}>
                III
              </Text>

            </View>

          </View>

          {/* BARRA DE PROGRESSO */}
          <View style={styles.progressContainer}>

            <View
              style={[
                styles.progressBar,
                { width: '50%' }
              ]}
            />

          </View>

          {/* PORCENTAGEM */}
          <Text style={styles.percentText}>
            50%
          </Text>

        </View>

        {/* ================= CARD MÚSICA ================= */}
        <View style={styles.hobbyCard}>

          <View style={styles.cardHeader}>

            <View style={styles.iconContainer}>

              <FontAwesome5
                name="music"
                size={18}
                color="#4B0082"
              />

            </View>

            <Text style={styles.hobbyName}>
              Música
            </Text>

            <View style={styles.levelBadge}>

              <Text style={styles.levelText}>
                II
              </Text>

            </View>

          </View>

          {/* BARRA DE PROGRESSO */}
          <View style={styles.progressContainer}>

            <View
              style={[
                styles.progressBar,
                { width: '75%' }
              ]}
            />

          </View>

          {/* PORCENTAGEM */}
          <Text style={styles.percentText}>
            75%
          </Text>

        </View>

        {/* ================= TÍTULO DESCOBRIR ================= */}
        <Text
          style={[
            styles.sectionTitle,
            {
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 15
            }
          ]}
        >
          Descobrir
        </Text>

        {/* ================= GRID DESCOBRIR ================= */}
        <View style={styles.gridContainer}>

          {/* ================= COLUNA ESQUERDA ================= */}
          <View style={styles.column}>

            {/* CARD FOTOGRAFIA */}
            <Pressable
              style={[
                styles.discoverCard,
                { height: 220 }
              ]}
              onPress={() => router.push('/categoria/fotografia')}
            >

              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
                }}
                style={styles.discoverImg}
                imageStyle={styles.imageRadius}
              >

                <View style={styles.cardOverlay}>

                  <Text style={styles.cardTitle}>
                    Fotografia
                  </Text>

                  <Text style={styles.cardSub}>
                    2.5K Pessoas
                  </Text>

                </View>

              </ImageBackground>

            </Pressable>

            {/* CARD CROCHÊ */}
            <Pressable
              style={[
                styles.discoverCard,
                { height: 160 }
              ]}
              onPress={() => router.push('/categoria/croche')}
            >

              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a'
                }}
                style={styles.discoverImg}
                imageStyle={styles.imageRadius}
              >

                <View style={styles.cardOverlay}>

                  <Text style={styles.cardTitle}>
                    Crochê
                  </Text>

                  <Text style={styles.cardSub}>
                    2.5K Pessoas
                  </Text>

                </View>

              </ImageBackground>

            </Pressable>

          </View>

          {/* ================= COLUNA DIREITA ================= */}
          <View style={styles.column}>

            {/* CARD JARDINAGEM */}
            <Pressable
              style={[
                styles.discoverCard,
                { height: 160 }
              ]}
              onPress={() => router.push('/categoria/jardinagem')}
            >

              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735'
                }}
                style={styles.discoverImg}
                imageStyle={styles.imageRadius}
              >

                <View style={styles.cardOverlay}>

                  <Text style={styles.cardTitle}>
                    Jardinagem
                  </Text>

                  <Text style={styles.cardSub}>
                    1.4K Pessoas
                  </Text>

                </View>

              </ImageBackground>

            </Pressable>

            {/* CARD CALIGRAFIA */}
            <Pressable
              style={[
                styles.discoverCard,
                { height: 220 }
              ]}
              onPress={() => router.push('/categoria/caligrafia')}
            >

              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1455390582262-044cdead277a'
                }}
                style={styles.discoverImg}
                imageStyle={styles.imageRadius}
              >

                <View style={styles.cardOverlay}>

                  <Text style={styles.cardTitle}>
                    Caligrafia
                  </Text>

                  <Text style={styles.cardSub}>
                    3.3K Pessoas
                  </Text>

                </View>

              </ImageBackground>

            </Pressable>

          </View>

        </View>

        {/* ================= ESPAÇO DA BOTTOMBAR ================= */}
        <View style={{ height: 120 }} />

      </ScrollView>

      {/* ================= BOTTOM BAR ================= */}
      <BottomBar />

    </View>
  );
}