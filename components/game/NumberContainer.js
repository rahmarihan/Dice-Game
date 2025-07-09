import { View, Text, StyleSheet,Dimensions } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const devicewidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "pink",
    margin: devicewidth < 380 ? 12 :24,
    padding: devicewidth < 380 ? 12 :24,
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
