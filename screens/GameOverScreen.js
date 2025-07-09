import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundNumber, userNumber, onPlayAgain }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 500) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>

        <Text style={styles.summaryText}>
          It took <Text style={styles.highlight}>{roundNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{userNumber}</Text>{" "}
        </Text>
        <View style={{ alignItems: "center" }}>
          <PrimaryButton onPress={onPlayAgain}>Play Again</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    felx: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: 200,
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
