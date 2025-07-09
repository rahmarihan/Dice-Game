import { Text, View, Image, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundNumber, userNumber, onPlayAgain}) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        It took <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{userNumber}</Text>{" "}
      </Text>
      <View style={{alignItems: "center"}}>
      <PrimaryButton onPress={onPlayAgain}>Play Again</PrimaryButton>
   </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.ButtonColor,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: colors.BGColor,
    textAlign: "center",
    fontWeight: "bold",
    margin: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "white",
  },
});
