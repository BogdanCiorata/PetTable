import { StyleSheet, Text, View, Button } from "react-native";
import Form from "../components/Form";
import { useNavigation } from "@react-navigation/native";
import { PetContext } from "../BE/store";
import { useContext,useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { updatePet, updatePetPatch } from "../BE/http"

function EditScreen({route, defaultValues} ) {
  const navigation = useNavigation();
  const petCtx = useContext(PetContext);
  const editedPetId = route.params?.petId;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();



  async function confirmHandler(petData) {
    setIsSubmitting(true);
    try {
      
        petCtx.updatePet(editedPetId, petData);
        await updatePet(editedPetId, petData);

      navigation.goBack();
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  }



  const selectedPet = petCtx.pet.find((pet) => pet.id === editedPetId);


  function petHandlerCancel() {
    navigation.navigate("ListScreen");
  }
  return (
    <LinearGradient style={styles.linear} colors={["#4e0329", "#ddb52f"]}>
      <View>
        <Form
          onCancel={petHandlerCancel}
          onSubmit={confirmHandler}
          defaultValues={selectedPet}
        />
      </View>
    </LinearGradient>
  );
}
export default EditScreen;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
});
