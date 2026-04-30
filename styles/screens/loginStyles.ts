import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        paddingTop: 60,
    },

    logo: {
        width: 200, // 🔥 maior
        height: 200,
        marginBottom: -20, // 🔥 aproxima do título
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5B2EFF',
    },

    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },

    card: {
        width: '90%',
        backgroundColor: '#EDEDED',
        borderRadius: 25,
        padding: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
    },

    label: {
        fontSize: 12,
        color: '#777',
        marginBottom: 5,
        marginTop: 10,
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 12,
        justifyContent: 'space-between',
    },

    input: {
        flex: 1,
    },

    passwordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    forgot: {
        fontSize: 12,
        color: '#888',
    },

    mainButton: {
        backgroundColor: '#6A0DAD',
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,

        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 18,
        elevation: 10,
    },

    mainButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },

    dividerText: {
        marginHorizontal: 10,
        color: '#777',
        fontSize: 12,
    },

    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 12,
        gap: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },

    googleIcon: {
        width: 20,
        height: 20,
    },

    googleText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },

    footerText: {
        marginTop: 20,
        fontSize: 12,
        color: '#555',
    },

    link: {
        color: '#5B2EFF',
        fontWeight: '600',
    },
});