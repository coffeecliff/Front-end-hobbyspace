import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    logo: {
        width: 520,     // 🔥 maior
        height: 400,
        marginTop: -200, // 🔥 sobe a logo
        marginBottom: 10,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5B2EFF',
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 18,
        color: '#777',
        marginBottom: 60,
    },

   mainButton: {
    width: '100%',
    backgroundColor: '#6A0DAD',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,

    // 🌑 sombra em volta
    shadowColor: '#6A0DAD',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,   // 🔥 mais opaco
    shadowRadius: 20,     // 🔥 espalha mais

    elevation: 8, // Android
},
    mainButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },

    rowButtons: {
        flexDirection: 'row',
        gap: 15,
    },

smallButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 12,

    // 🌑 sombra em volta
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 20,

    elevation: 6,
},

    smallButtonText: {
        color: '#333',
        fontSize: 15,
        fontWeight: '700',
    },
    starLeft: {
        position: 'absolute',
        bottom: 165,
        left: 59,
        width: 50,   
        height: 50,  
    },

    starRight: {
        position: 'absolute',
        bottom: 140,
        right: 70,
        width: 70,   
        height: 70,
    },
    buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
},
});