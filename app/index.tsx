import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>Welcome MeetStranger</Text>
            <Link href="/home" asChild>
                <Pressable style={{ padding: 10, backgroundColor: '#000' }}>
                    <Text style={{ color: '#fff' }}>Ir para Home</Text>
                </Pressable>
            </Link>
            <Link href="/auth/login" asChild>
                <Pressable style={{ padding: 10, backgroundColor: '#000' }}>
                    <Text style={{ color: 'rgba(13, 9, 255, 0.87)' }}>Ir para Login</Text>
                </Pressable>
            </Link>
        </View>
    );
}