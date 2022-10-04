import { StyleSheet, Text, View, Button } from "react-native";
import Form from "../components/Form";
import { useNavigation } from "@react-navigation/native";
import { PetContext } from "../BE/store";
import { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { storePet } from "../BE/http";

function AddScreen() {
  const navigation = useNavigation();
  const petCtx = useContext(PetContext);


  async function confirmHandler(petData) {
    const id = await storePet(petData);
    petCtx.addPet({...petData,id:id});
  }
  function petHandlerCancel() {
    navigation.navigate("ListScreen");
  }

  
  return (
    <LinearGradient style={styles.linear} colors={["#4e0329", "#ddb52f"]}>
      <Form onCancel={petHandlerCancel} onSubmit={confirmHandler}  />
    </LinearGradient>
  );
}
export default AddScreen;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
});
