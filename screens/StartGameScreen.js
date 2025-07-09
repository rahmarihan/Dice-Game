import { TextInput, StyleSheet, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import colors from '../constants/colors'
import Card from '../components/ui/Card'
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmIputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (chosenNumber <= 0 || isNaN(chosenNumber)) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "Okay", styles: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    props.onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Put In Your Number And I Will Guess It 😉</Title>
      <Card>
        <InstructionText>Enter Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmIputHandler}> Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
rootContainer:{
  flex:1,
  marginTop: 100,
  alignItems: 'center',
},
  numberInput: {
    width: 55,
    height: 55,
    fontSize: 20,
    padding: 16,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },


});
