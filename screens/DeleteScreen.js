import { Text, View, Button, StyleSheet ,Alert} from "react-native";
import { useContext , useState } from "react";
import { PetContext } from "../BE/store";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {deletePet} from "../BE/http"

function DeleteScreen({route}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const navigation = useNavigation();
  const petCtx = useContext(PetContext);
  const editedPetId = route.params?.petId;


  async function petHandlerDelete() {
    setIsSubmitting(true);
    try {
      await deletePet(editedPetId);
      petCtx.deletePet(editedPetId);
      Alert.alert("Succes notification","The pet has been removed to the list");
      navigation.goBack();
    } catch (error) {
      setError('Could not delete pet - please try again later!');
      setIsSubmitting(false);
    }
    
  }


  function petHandlerCancel() {
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.linear} colors={["#4e0329", "#ddb52f"]}>
      <Text style={styles.infoText}>Are you sure ?</Text>
      <View style={styles.container}>
        <Button title="Cancel" color="#4e0329" onPress={petHandlerCancel} />
        <Button title="Delete" color="#4e0329" onPress={petHandlerDelete} />
      </View>
    </LinearGradient>
  );
}
export default DeleteScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoText: {
    fontSize: 50,
    marginTop: 200,
    paddingBottom: 100,
    paddingTop: 100,
    fontWeight: "bold",
    textAlign: "center",
    color:'white'
  },
  linear: {
    flex: 1,
  },
});
