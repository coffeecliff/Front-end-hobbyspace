import { StyleSheet } from "react-native";

export const ChatStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    paddingTop: 55,
  },

  /* HEADER */

header: {
  paddingHorizontal: 20,

  // AUMENTA A ALTURA
  paddingTop: 25,
  paddingBottom: 20,

  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: 15,
  marginTop: -55,

  backgroundColor: "#FFFF",

  // OPCIONAL: ARREDONDAR EMBAIXO
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
},

  logo: {
    fontSize: 34,
    fontWeight: "700",
    color: "#4B0FAE",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  notificationContainer: {
    position: "relative",
  },

  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,

    width: 14,
    height: 14,
    borderRadius: 10,

    backgroundColor: "#FF2D55",

    alignItems: "center",
    justifyContent: "center",
  },

  notificationText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },

  /* CHAT */

  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },

  aiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,

    padding: 22,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  poweredContainer: {
    backgroundColor: "#F7B59B",

    alignSelf: "flex-start",

    paddingHorizontal: 10,
    paddingVertical: 4,

    borderRadius: 30,
    marginBottom: 15,
  },

  poweredText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#4B0FAE",
    lineHeight: 30,
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: "#2B2B2B",
    lineHeight: 22,
  },

  /* USER MESSAGE */

  userMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 20,
    gap: 8,
  },

  userMessage: {
    backgroundColor: "#7B5CFF",

    paddingHorizontal: 16,
    paddingVertical: 14,

    borderRadius: 18,

    maxWidth: "78%",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  userMessageText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },

  smallProfile: {
    width: 34,
    height: 34,
    borderRadius: 50,
  },

  /* IA RESPONSE */

  aiResponseContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
    gap: 10,
  },

  starContainer: {
    width: 34,
    height: 34,
    borderRadius: 50,

    backgroundColor: "#6B19FF",

    alignItems: "center",
    justifyContent: "center",
  },

  aiResponse: {
    backgroundColor: "#FFFFFF",

    padding: 16,

    borderRadius: 18,

    maxWidth: "78%",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  responseText: {
    color: "#2B2B2B",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 10,
  },

  topic: {
    color: "#5B11D9",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },

  /* INPUT */

  inputContainer: {
    position: "absolute",
    bottom: 90,

    width: "100%",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 10,

    backgroundColor: "#F3F3F3",
  },

  input: {
    flex: 1,

    height: 48,

    backgroundColor: "#FFFFFF",

    borderRadius: 30,

    paddingHorizontal: 18,

    borderWidth: 1,
    borderColor: "#D8D8D8",

    fontSize: 14,
    color: "#000000",

    // SOMBRA
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  sendButton: {
    width: 48,
    height: 48,

    borderRadius: 50,

    backgroundColor: "#6B19FF",

    alignItems: "center",
    justifyContent: "center",

    marginLeft: 10,

    // SOMBRA
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

});