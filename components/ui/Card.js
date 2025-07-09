import {View, StyleSheet, Dimensions} from 'react-native';

function Card({children}) {
  return(
    <View style={styles.iputContainer}>{children}</View>
  );
}

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({

  iputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 :36,
    marginHorizontal: 24,
    backgroundColor: "pink",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

});
