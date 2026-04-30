import { Text, View, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
//import { useAuth } from    '../../hooks/useAuth';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { registerStyles as styles } from '../../styles/screens/registerStyles';
export default function Register() {
    const router = useRouter();
    // const { register } = useAuth();
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
            //     const success = await Register(name, email, password);
            //     if (success) {
            //         router.reload('/home');
            //     } else {
            //         Alert.alert('Erro', 'Não foi possível register. Tente novamente');
            //     }
            router.replace('/home'); //remover apos implementacao do registro
        } catch (error) {
            Alert.alert('Error', 'Ocorreu um erro ao tentar registrar. Tente novamente');
        }
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === "android" ? -85 : 0}
            style={styles.container}
        >
            <View style={styles.content}>
                <Image source={require('../../assets/favicon.png')}
                    resizeMode='contain'
                    style={styles.logo} />
                <Text style={styles.title}>Criar Conta</Text>
                <Text style={styles.subtitle}>Junte-se ao MeetStranger</Text>
                <View style={styles.inputContainer}>
                    <Input
                        label='Nome'
                        value={name}
                        onChangeText={setName}
                        placeholder='Seu nome de usuarios'
                    />
                    <Input
                        label='email'
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        placeholder='seu@email.com'
                    />
                    <Input
                        label='senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder='*******'
                    />
                    <Input
                        label='senha'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        placeholder='*******'
                    />
                </View>
                <Button
                    title={loading ? 'Registrando...' : 'Registrar'}
                    onPress={handleRegister}
                    disabled={loading}
                    style={styles.registerButton}
                />
                <Button
                    title='Já possui uma conta? Faça login'
                    onPress={() => router.push('/auth/login')}
                    variant='outline'
                    style={styles.registerButton}

                />
            </View>
        </KeyboardAvoidingView>


    );
}