import { StyleSheet } from 'react-native';

export const registerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9DDF5', // fallback (caso não use gradient)
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    header: {
        alignItems: 'center',
        marginBottom: 20,
    },

    gradientButton: {
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

    card: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 24,
        padding: 20,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 5,
    },

    logo: {
        width: 90,
        height: 90,
        marginBottom: 10,
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#5B21B6',
        marginBottom: 4,
    },

    subtitle: {
        fontSize: 13,
        color: '#6B7280',
        marginBottom: 20,
        textAlign: 'center',
    },

    inputContainer: {
        width: '100%',
    },

    mainButton: {
        marginTop: 20,
        width: '100%',
        borderRadius: 999,
    },

    // 🔽 Divider
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#D1D5DB',
    },

    dividerText: {
        marginHorizontal: 10,
        color: '#6B7280',
        fontSize: 12,
    },

    // 🔽 Google button
    googleButton: {
        width: '100%',
        backgroundColor: '#F3F4F6',
        paddingVertical: 12,
        borderRadius: 999,
        alignItems: 'center',
        marginBottom: 5,

        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },

    googleText: {
        fontWeight: '600',
        color: '#374151',
        fontSize: 14,
    },

    // 🔽 Login
    loginText: {
        fontSize: 12,
        color: '#6B7280',
    },

    link: {
        color: '#2563EB',
        fontWeight: '600',
    },

    // 🔽 Checkbox area
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 6,
        alignSelf: 'flex-start',
    },

    termsText: {
        fontSize: 11,
        color: '#6B7280',
    },

    termsLink: {
        color: '#2563EB',
    },
});