import { StyleSheet, Text, View, Button,ScrollView } from "react-native";
import PetOutput from "../components/PetOutput.js/PetOutput";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { PetContext } from "../BE/store";
import { LinearGradient } from "expo-linear-gradient";
import { fetchPet } from "../BE/http";

function ListScreen({route}) {
  const navigation = useNavigation();
  const petCtx = useContext(PetContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  function petPressHandlerView() {
    navigation.navigate("AddScreen");
  }


  useEffect(() => {
    async function getPet() {
      setIsFetching(true);
      try {
        const pet = await fetchPet();
        petCtx.setPet(pet);

      } catch (error) {
        setError("Could not fetch pet!");
      }
      setIsFetching(false);
    }
    getPet();
  }, []
  );

  
  

  return (
    <ScrollView>
    <LinearGradient style={styles.linear} colors={["#4e0329", "#ddb52f"]}>
  
      <View>
        <PetOutput
          namePet="NAME"
          indexPet="INDEX"
          statusPet="STATUS"
          actionsPet="ACTIONS"
          fallbackText="No registered pets found!"
          pets={petCtx.pet}
        ></PetOutput>
      </View>
      <View style={styles.container}>
        <Text style={styles.infoText}>
          Click here for add new pet on the table !
        </Text>
        <View style={styles.button}>
          <Button
            style={styles.addButton}
            color="#4e0329"
            title="Add Pet"
            onPress={petPressHandlerView}
          ></Button>
        </View>
      </View>
    </LinearGradient>
    </ScrollView>
  );
}
export default ListScreen;

const styles = StyleSheet.create({
  linear:{

  },
  container: {
    paddingHorizontal: 70,
  },
  button: {
    paddingBottom:350
  },
  infoText: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  addButton: {
    color: "#4e0329",
    backgroundColor: "#4e0329",
  },
});
