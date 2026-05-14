import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  ArrowLeft,
  User,
  Lock,
  Bell,
  ShieldCheck,
  Info,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

// STYLES
import { settingsStyles as styles } from '../styles/screens/settingsStyles';

export default function Settings() {

  // ROUTER
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeContainer}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <ArrowLeft
              color="#6A0DAD"
              size={26}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Configurações
          </Text>

          {/* ESPAÇAMENTO */}
          <View style={styles.headerSpacer} />

        </View>

        {/* CONTA */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Conta
          </Text>

          <View style={styles.card}>

            {/* EDITAR PERFIL */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.item}
            >

              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: '#EAD8FF' },
                ]}
              >
                <User
                  color="#6A0DAD"
                  size={22}
                />
              </View>

              <View style={styles.textContainer}>

                <Text style={styles.itemTitle}>
                  Editar Perfil
                </Text>

                <Text style={styles.itemSubtitle}>
                  Nome, foto e bio
                </Text>

              </View>

            </TouchableOpacity>

            <View style={styles.divider} />

            {/* ALTERAR SENHA */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.item}
            >

              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: '#FFE4D1' },
                ]}
              >
                <Lock
                  color="#FF8C42"
                  size={22}
                />
              </View>

              <View style={styles.textContainer}>

                <Text style={styles.itemTitle}>
                  Alterar Senha
                </Text>

                <Text style={styles.itemSubtitle}>
                  Atualize sua senha com segurança
                </Text>

              </View>

            </TouchableOpacity>

          </View>
        </View>

        {/* PREFERÊNCIAS */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Preferências
          </Text>

          <View style={styles.card}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.item}
            >

              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: '#EAD8FF' },
                ]}
              >
                <Bell
                  color="#6A0DAD"
                  size={22}
                />
              </View>

              <View style={styles.textContainer}>

                <Text style={styles.itemTitle}>
                  Notificações
                </Text>

                <Text style={styles.itemSubtitle}>
                  E-mail e atualizações da comunidade
                </Text>

              </View>

            </TouchableOpacity>

          </View>
        </View>

        {/* SUPORTE */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Suporte e Termos
          </Text>

          <View style={styles.card}>

            {/* PRIVACIDADE */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.item}
            >

              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: '#EEEEEE' },
                ]}
              >
                <ShieldCheck
                  color="#777"
                  size={22}
                />
              </View>

              <View style={styles.textContainer}>

                <Text style={styles.itemTitle}>
                  Privacidade
                </Text>

                <Text style={styles.itemSubtitle}>
                  Dados, permissões e segurança
                </Text>

              </View>

            </TouchableOpacity>

            <View style={styles.divider} />

            {/* AJUDA */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.item}
            >

              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: '#EEEEEE' },
                ]}
              >
                <Info
                  color="#777"
                  size={22}
                />
              </View>

              <View style={styles.textContainer}>

                <Text style={styles.itemTitle}>
                  Ajuda e Suporte
                </Text>

                <Text style={styles.itemSubtitle}>
                  FAQ, contato e termos de uso
                </Text>

              </View>

            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}