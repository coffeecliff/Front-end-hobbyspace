import { Text, View, Alert, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input } from '../../components/Input';
import { registerStyles as styles } from '../../styles/screens/registerStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, _setLoading] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Por favor, preencha os campo');
            return;
        }

        if (password.length <= 8 && password !== confirmPassword) {
            Alert.alert('Error', 'As senhas não coincidem ou são muito curtas. Tente novamente.');
            return;
        }

        try {
            router.replace('/home');
        } catch (error) {
            Alert.alert('Error', 'Ocorreu um erro ao tentar registrar. Tente novamente');
        }
    };

    return (
        <LinearGradient
            colors={['#E9DDF5', '#F5D0FE']}
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === "android" ? -85 : 0}
                style={styles.container}
            >

                {/* TOPO */}
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/logo.png')}
                        resizeMode='contain'
                        style={styles.logo}
                    />

                    <Text style={styles.title}>HobbySpace</Text>

                    <Text style={styles.subtitle}>
                        Junte-se à maior comunidade de entusiastas!
                    </Text>
                </View>

                {/* CARD */}
                <View style={styles.card}>

                    <View style={styles.inputContainer}>
                        <Input
                            label='NOME DE USUÁRIO'
                            value={name}
                            onChangeText={setName}
                            placeholder='seu nome'
                        />

                        <Input
                            label='EMAIL'
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize='none'
                            placeholder='seu@email.com'
                        />

                        <Input
                            label='SENHA'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            placeholder='********'
                        />

                        <Input
                            label='CONFIRMAR SENHA'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            placeholder='********'
                        />
                    </View>

                    {/* BOTÃO COM GRADIENTE */}
                    <TouchableOpacity
                        onPress={handleRegister}
                        disabled={loading}
                        style={{ width: '100%', marginTop: 20 }}
                    >
                        <LinearGradient
                            colors={['#6D28D9', '#9333EA']}
                            style={styles.gradientButton}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? 'Cadastrando...' : 'Cadastrar'}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* TERMOS */}
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>
                            ☑ Aceitar os <Text style={styles.termsLink}>termos de uso</Text>
                        </Text>
                    </View>

                    {/* DIVIDER */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.line} />
                        <Text style={styles.dividerText}>Ou entre com</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Google */}
                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>

            </View>
            
            {/* Login */}
                <TouchableOpacity onPress={() => router.push('/auth/login')}>
                    <Text style={styles.loginText}>
                        Já possui uma conta? <Text style={styles.link}>Entrar</Text>
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </LinearGradient>
    );
}