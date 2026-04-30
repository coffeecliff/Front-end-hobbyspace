import { Text, View, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { welcomeStyles as styles } from '../styles/screens/welcomeStyles';

export default function Index() {
    return (
        <View style={styles.container}>

            {/* Logo no topo */}
          <Image
                source={require('../assets/logotextotransparente.png')}
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
                        <Text style={styles.smallButtonText}>Entrar</Text>
                    </Pressable>
                </Link>

                <Pressable style={styles.smallButton}>
                    <Text style={styles.smallButtonText}>Explorar</Text>
                </Pressable>
            </View>

        </View>
    );
}