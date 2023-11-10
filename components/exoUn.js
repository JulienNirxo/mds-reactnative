import { StyleSheet } from "react-native";
import { View } from "react-native";
import Square from "../../components/atoms/Square";

function Exo1() {
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.container2}>
        {
          // Loop to create 3 squares
          [...Array(3)].map((_, index) => (
            <Square key={index} color="yellow" size={50} borderColor="black" />
          ))
        }
      </View>
      <View style={styles.container3}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 5,
    backgroundColor: "red",
  },
  container2: {
    flex: 1 / 5,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container3: {
    flex: 3 / 5,
    backgroundColor: "blue",
  },
});

export default Exo1;