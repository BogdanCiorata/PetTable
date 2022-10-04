import {View , TextInput , Text , StyleSheet} from "react-native"

function Input ({label , textInputConfig}) {
    return(
        <View style={styles.inputContainer}>
           <Text style={styles.label}>{label} </Text> 
           <TextInput {...textInputConfig} style={styles.input}/>
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
      marginHorizontal: 4,
      marginVertical: 8
    },
    label: {
      fontSize: 15,
      color: 'white',
      marginBottom: 4,
      fontWeight:"bold",
      marginBottom:10
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      padding: 6,
      borderRadius: 6,
      fontSize: 18,
    },

  });