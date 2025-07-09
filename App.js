import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState();
  const [gameId, setGameId] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(numbeOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numbeOfRounds);
  }

  function playAgainHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    setGameIsOver(false);
    setGameId((id) => id + 1);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        key={gameId}
        userNumber={userNumber}
        roundNumber={guessRounds}
        onPlayAgain={playAgainHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient colors={["#92063c", "pink"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.27,
  },
});
