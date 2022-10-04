import { StyleSheet, Text, View, Button} from "react-native";
import PetOutput from "../components/PetOutput.js/PetOutput";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { PetContext } from "../BE/store";
import { LinearGradient } from "expo-linear-gradient";
import { fetchPet } from "../BE/http";
import { ScrollView } from "react-native-web";

function ListScreen({ route }) {
  const navigation = useNavigation();
  const petCtx = useContext(PetContext);
  const [isFetching, setIsFetching] = useState(true);
  const editedPetId = route.params?.petId;

  const petName = petCtx.pet.find((namePet) => editedPetId === namePet.id);

  function petHandlerCancel() {
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.container} colors={["#4e0329", "#ddb52f"]}>
      <View>
        <View>
          <Text style={styles.infromation}>Pet Information</Text>
        </View>
        <View style={styles.containerName}>
          <Text style={styles.text}>Pet Name</Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>{petName.name}</Text>
        </View>
        <View style={styles.containerStatus}>
          <Text style={styles.text}>Pet Status</Text>
          <Text style={styles.text}></Text>

          <Text style={styles.text}>{petName.status}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.textButton} >Click here to go to the main page</Text>
          <Button title="Back" color="#4e0329" onPress={petHandlerCancel}/>
        </View>
      </View>
    </LinearGradient>
  );
}
export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infromation: {
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 50,
  },
  containerName: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 150,
    marginBottom: 20,
    borderWidth:3,
    borderColor:"white"

  },
  containerStatus: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth:3,
    borderColor:"white"

  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 150,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  textButton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
