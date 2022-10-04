import { StyleSheet, Text, View } from "react-native";

function PetSummary({ index, name, status, actions }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{index}</Text>
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View>
        <Text style={styles.title}>{status}</Text>
      </View>
      <View>
        <Text style={styles.title}>{actions}</Text>
      </View>
    </View>
  );
}

export default PetSummary;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 2,
    backgroundColor: "white",
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "primary400",
    fontWeight: "bold",
    color: "black",
  },
});
