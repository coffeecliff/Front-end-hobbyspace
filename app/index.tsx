import { Text, View, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { welcomeStyles as styles } from '../styles/screens/welcomeStyles';

export default function Index() {
    return (
        <View style={styles.container}>

            {/* Logo no topo */}
          <Image
                source={require('../assets/logotexto.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Título */}
            <Text style={styles.subtitle}>Seu próximo hobbie começa aqui.</Text>

            {/* Botão principal */}
            <Link href="/auth/register" asChild>
                <Pressable style={styles.mainButton}>
                    <Text style={styles.mainButtonText}>Começar agora →</Text>
                </Pressable>
            </Link>

            {/* Botões menores */}
                <View style={styles.rowButtons}>
            <Link href="/auth/login" asChild>
                <Pressable style={styles.smallButton}>
                    <View style={styles.buttonContent}>
                        <Ionicons name="log-in-outline" size={18} color="#333" />
                        <Text style={styles.smallButtonText}>Entrar</Text>
                    </View>
                </Pressable>
            </Link>

            <Pressable style={styles.smallButton}>
                <View style={styles.buttonContent}>
                    <Ionicons name="compass-outline" size={18} color="#333" />
                    <Text style={styles.smallButtonText}>Explorar</Text>
                </View>
            </Pressable>
        </View>

            {/* Estrelas embaixo */}
            <Image
                source={require('../assets/starleft.png')}
                style={styles.starLeft}
            />
 
            <Image
                source={require('../assets/starright.png')}
                style={styles.starRight}
            />
 

        </View>
    );
}