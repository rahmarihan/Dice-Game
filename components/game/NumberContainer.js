import { View, Text, StyleSheet } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "pink",
    margin: 24,
    padding: 20,
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
  },

  numberText: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontFamily: "open-sans-bold",
  },
});
