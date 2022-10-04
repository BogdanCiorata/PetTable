import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { fetchPet } from "../../BE/http";
import { PetContext } from "../../BE/store";
import { useContext, useState, useEffect } from "react";

function Pet({idx, id, name, status }) {
  const navigation = useNavigation();
  const petCtx = useContext(PetContext);

  function petPressHandlerEdit() {
    navigation.navigate("EditScreen", {
      petId: id,
    });
  }

  function petPressHandlerDelete() {
    navigation.navigate("DeleteScreen", {
      petId: id,
    });
  }

  function petPressHandlerView() {
    navigation.navigate("ViewScreen", {
      petId: id,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.littleContainer}>
          <Text style={styles.index}>
            {idx}
          </Text>
      </View>
      <View style={styles.littleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.littleContainer}>
        <Text style={styles.title}>{status}</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <View style={styles.button}>
          <Button title="EDIT" color="#4e0329" onPress={petPressHandlerEdit} />
        </View>
        <View style={styles.button}>
          <Button
            title="DELETE"
            color="#4e0329"
            onPress={petPressHandlerDelete}
          />
        </View>
        <View style={styles.button}>
          <Button title="VIEW" color="#4e0329" onPress={petPressHandlerView} />
        </View>
      </View>
    </View>
  );
}

export default Pet;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 2,
  },
  title: {
    fontSize: 22,
    color: "primary400",
    fontWeight: "bold",
    color: "black",
  },
  index: {
    fontSize: 22,
    color: "primary400",
    fontWeight: "bold",
    color: "black",
    paddingLeft: 20,
    paddingRight: 10,

  },
  button: {
    margin: 2,
    borderRadius: 5,
  },
  buttoncontainer: {
    flexDirection: "column",
  },
  littleContainer: {
    maxWidth: 100,
  },
});
