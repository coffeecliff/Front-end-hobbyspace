import { Text, View, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { loginStyles as styles } from '../../styles/screens/loginStyles';
//import { useAuth } from '../../hooks/useAuth';

export default function Login() {
    const router = useRouter ();
    //const { Login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, _setLoading] = useState(false);
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        try {
            // const success = await Login(email, password);
            // if (success) {
            //     router.replace('/home');
            // } else {
            //     Alert.alert('Erro', 'Credencias inválidas. Tente novamente');
            // }
            router.replace('/home'); // remover após implementação do login
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. tente novamnete.')     
        }
    };
    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === "android" ? -85 : 0}
        >
            <View style={styles.content}>
                <Image source= {require('../../assets/favicon.png')} style={styles.logo} resizeMode='contain'/>
                <Text style={styles.title}>Bem-vindo ao APP MeetsStranger!</Text>
                <Text style={styles.subtitle}>Faça login para continuar</Text>
                <View style={styles.inputContainer}>
                    <Input
                    label='email'
                    value= {email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    placeholder='seu@email.com'
                    />
                    <Input
                    label='senha'
                    value= {password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder='*******'
                    />
                    
                </View>
                <Button
                    title={loading ? 'Entrando' : 'Entrar'}
                    onPress={handleLogin}
                    disabled={loading}
                    style={styles.loginButton}
                />
                <Button
                    title='Criar conta'
                    onPress={() => router.push('/auth/register')}
                    variant='outline'
                />
            </View>

        </KeyboardAvoidingView>
    );
}