import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

function Exo3() {
  const person = [
    "Toto",
    "Titi",
    "Tata",
    "Tutu",
    "Tete",
    "Truc",
    "Machin",
    "Bidule",
    "Chose",
    "Machine",
    "Jean",
    "Pierre",
    "Paul",
    "Jacques",
    "Robert",
    "Marcel",
    "Jeanne",
    "Marie",
  ];
  const flatListRenderItem = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => alert(`Bonjour ${item}`)}
      style={styles.itemButton}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList
        data={person}
        renderItem={({ item }) => flatListRenderItem({ item })}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.flatList}
        scrollEnabled={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flatList: {
    justifyContent: "center",
    padding: 10,
  },
  itemButton: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "gray",
  },
  itemText: {
    textAlign: "center",
  },
});
export default Exo3;