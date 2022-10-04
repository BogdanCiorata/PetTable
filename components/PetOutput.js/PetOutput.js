import { StyleSheet, View ,Text} from "react-native";
import PetSummary from "./PetSummary";
import PetList from "./PetList";


function PetOutput({namePet , indexPet , statusPet,actionsPet ,pets,fallbackText}) {

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (pets.length > 0) {
    content = <PetList pets={pets} />;
  }
  return (
    <View style={styles.container}>
      <View><Text style={styles.title}>Pet Project</Text></View>
      <PetSummary style={styles.infoText} name={namePet} index={indexPet} status={statusPet} actions={actionsPet}/>
      {content}
    </View>
  );
}

export default PetOutput;

const styles = StyleSheet.create({
    container: {
      width:'90%',
      paddingTop: 100,
      marginBottom:100,
      marginLeft:'auto',
      marginRight:'auto'
    },
    infoText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      alignItems:'center'
    },
    title: {
      marginBottom:100,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      fontSize: 50,
    },
    infoText: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 32,
    },
  });
  