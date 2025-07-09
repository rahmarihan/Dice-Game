import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    margin: 8,
    // borderWidth: Platform.OS === "ios" ? 0 : 0,
    borderWidth: Platform.select({ ios: 0, android: 0}),
    borderColor: "pink",
    padding: 20,
    maxWidth: "80%",
    alignContent: "center",
  },
});
