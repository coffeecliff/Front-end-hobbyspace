import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    logo: {
        width: 160,
        height: 160,
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5B2EFF',
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 14,
        color: '#777',
        marginBottom: 30,
    },

    mainButton: {
        width: '100%',
        backgroundColor: '#6A0DAD',
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 20,
    },

    mainButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    rowButtons: {
        flexDirection: 'row',
        gap: 15,
    },

    smallButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 12,
        elevation: 3,
    },

    smallButtonText: {
        color: '#333',
        fontWeight: '500',
    },

    starLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        width: 60,
        height: 60,
    },

    starRight: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 80,
        height: 80,
    },
});