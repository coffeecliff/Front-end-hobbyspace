import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { loginStyles as styles } from '../../styles/screens/loginStyles';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    return (
        <View style={styles.container}>

            {/* Logo */}
            <Image
                source={require('../../assets/logotransparente.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Título */}
            <Text style={styles.title}>HobbySpace</Text>
            <Text style={styles.subtitle}>Bem-vindo de volta!</Text>

            {/* Card */}
            <View style={styles.card}>

                {/* Email */}
                <Text style={styles.label}>EMAIL</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        placeholder="seu@email.com"
                        style={styles.input}
                    />
                </View>

                {/* Senha */}
                <View style={styles.passwordHeader}>
                    <Text style={styles.label}>SENHA</Text>
                    <Text style={styles.forgot}>Esqueceu sua senha?</Text>
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                        placeholder="••••••••••"
                        secureTextEntry
                        style={styles.input}
                    />
                    <Ionicons name="eye-outline" size={20} color="#999" />
                </View>

                {/* Botão */}
                <Pressable style={styles.mainButton}>
                    <Text style={styles.mainButtonText}>Entrar</Text>
                </Pressable>

                {/* Divider */}
                <View style={styles.divider}>
                    <View style={styles.line} />
                    <Text style={styles.dividerText}>Ou continue com</Text>
                    <View style={styles.line} />
                </View>

                {/* Google */}
                <Pressable style={styles.googleButton}>
                    <Image
                        source={require('../../assets/google.png')}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </Pressable>

            </View>

            {/* Footer */}
            <Text style={styles.footerText}>
                Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
            </Text>

        </View>
    );
}