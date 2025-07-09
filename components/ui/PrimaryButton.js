import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }

  return (
    <View style={Styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [Styles.buttonInnerContainer, Styles.pressed]
            : Styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={Styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const Styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: colors.ButtonColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
});
