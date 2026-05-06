import React, {useState} from 'react';
import { Text, View, TextInput, Pressable, Image, TouchableOpacity, Alert } from 'react-native';
import { loginStyles as styles } from '../../styles/screens/loginStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();
    // const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, _setLoading] = useState(false);
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }
        try {
            // const success = await Login(email, password);
            // if (success) {
            //     router.replace('/home');
            // } else {
            //     Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
            // }
            router.replace('/home');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.')
        }
    };
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/backgrounds/bg2.png')}
                style={styles.background}
                resizeMode="cover"
            />

            {/* Logo */}
            <Image
                source={require('../../assets/logoG.png')}
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
                        source={require('../../assets/icon.png')}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </Pressable>

            </View>

            {/* Footer */}
            <TouchableOpacity onPress={() => router.push('/auth/register')}>
                <Text style={styles.footerText}>
                    Já possui uma conta? <Text style={styles.link}>Entrar</Text>
                </Text>
            </TouchableOpacity>

        </View>
    );
}