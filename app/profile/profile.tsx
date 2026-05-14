import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// ROUTER
import { useRouter } from 'expo-router';

// STYLES
import { profileStyles as styles } from '../../styles/screens/profile.Styles';

// COMPONENTE BOTTOM BAR
import { BottomBar } from '../../components/BottomBar';

export default function Perfil() {

  // ROUTER
  const router = useRouter();

  return (

    // ================= CONTAINER PRINCIPAL =================
    <View style={{ flex: 1 }}>

      {/* ================= SCROLL ================= */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================= HEADER ================= */}
        <View style={styles.header}>

          {/* TÍTULO */}
          <Text style={styles.headerTitle}>
            Perfil
          </Text>

          {/* BOTÃO CONFIG */}
          <Pressable
            onPress={() => router.push('/settings')}
          >

            <Ionicons
              name="settings-sharp"
              size={26}
              color="#4B0082"
            />

          </Pressable>

        </View>

        {/* ================= PERFIL ================= */}
        <View style={styles.profileSection}>

          {/* FOTO */}
          <View style={styles.imageContainer}>

            <Image
              source={require('../../assets/perfilpadrao.png')}
              style={styles.profileImg}
            />

            {/* EDITAR FOTO */}
            <Pressable style={styles.editIconContainer}>

              <MaterialCommunityIcons
                name="pencil"
                size={20}
                color="#FFF"
              />

            </Pressable>

          </View>

          {/* NOME */}
          <Text style={styles.userName}>
            Ronaldo Batista
          </Text>

          {/* EMAIL */}
          <Text style={styles.userEmail}>
            ronaldobatista@gmail.com
          </Text>

        </View>

        {/* ================= ESTATÍSTICAS ================= */}
        <View style={styles.statsRow}>

          {/* CARD 1 */}
          <View style={styles.statCard}>

            <Text style={styles.statValue}>
              2
            </Text>

            <Text style={styles.statLabel}>
              Hobbies{"\n"}Ativos
            </Text>

          </View>

          {/* CARD 2 */}
          <View style={styles.statCard}>

            <Text style={styles.statValue}>
              0
            </Text>

            <Text style={styles.statLabel}>
              Hobbies{"\n"}Finalizados
            </Text>

          </View>

        </View>

        {/* ================= BIOGRAFIA ================= */}
        <Text style={styles.sectionTitle}>
          Biografia
        </Text>

        <View style={styles.bioContainer}>

          <Text style={styles.bioText}>
            Ainda está vazio por aqui...
          </Text>

        </View>

        {/* ================= INSÍGNIAS ================= */}
        <Text style={styles.sectionTitle}>
          Insígnias
        </Text>

        <View style={styles.insigniaRow}>

          {/* INSÍGNIA 1 */}
          <View style={styles.insigniaItem}>

            <Image
              source={require('../../assets/conquistavazia.png')}
              style={styles.insigniaImg}
            />

            <Text
              style={[
                styles.insigniaLabel,
                { color: '#9370DB' },
              ]}
            >
              Insignia nível II
            </Text>

          </View>

          {/* INSÍGNIA 2 */}
          <View style={styles.insigniaItem}>

            <Image
              source={require('../../assets/conquistavazia.png')}
              style={styles.insigniaImg}
            />

            <Text
              style={[
                styles.insigniaLabel,
                { color: '#9370DB' },
              ]}
            >
              Insignia nível I
            </Text>

          </View>

          {/* INSÍGNIA 3 */}
          <View style={styles.insigniaItem}>

            <Image
              source={require('../../assets/conquistavazia.png')}
              style={styles.insigniaImg}
            />

            <Text style={styles.insigniaLabel}>
              Vazio
            </Text>

          </View>

          {/* INSÍGNIA 4 */}
          <View style={styles.insigniaItem}>

            <Image
              source={require('../../assets/conquistavazia.png')}
              style={styles.insigniaImg}
            />

            <Text style={styles.insigniaLabel}>
              Vazio
            </Text>

          </View>

        </View>

        {/* ESPAÇO PARA BOTTOM BAR */}
        <View style={{ height: 120 }} />

      </ScrollView>

      {/* ================= BOTTOM BAR ================= */}
      <BottomBar />

    </View>
  );
}