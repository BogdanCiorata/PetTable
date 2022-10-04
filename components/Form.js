import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import Input from "./InputAddEdit";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

function Form({ onCancel, onSubmit, defaultValues }) {
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    name: {
      value: defaultValues ? defaultValues.name : "",
    },
    status: {
      value: defaultValues ? defaultValues.status : "Available",
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    if (!inputValues.name.value.trim()) {
      return alert("Please enter pet name");
    }
    const petData = {
      name: inputValues.name.value,
      status: inputValues.status.value,
    };

    onSubmit(petData);
    navigation.navigate("ListScreen");
    return Alert.alert("Succes notification","The pet has been added to the list");
  }

  

  return (
    <View>
      <View>
        <Text style={styles.title}>Your Pet</Text>
      </View>
      <View style={styles.container}>
        <Input
          label="NAME"
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangeHandler.bind(this, "name"),
            value: inputValues?.name.value,
            placeholder: "NAME",
          }}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>STATUS</Text>
          <TouchableHighlight>
            <Picker
              selectedValue={inputValues?.status.value}
              onValueChange={(itemValue) =>
                inputChangeHandler.bind(this, "status")(itemValue)
              }
              style={styles.picker}
            >
              <Picker.Item label="AVAILABLE" value="Available" />
              <Picker.Item label="SOLD" value="Sold" />
              <Picker.Item label="PENDING" value="Pending" />
            </Picker>
          </TouchableHighlight>
        </View>
        <View style={styles.button}>
          <Button title="Cancel" color="#4e0329" onPress={onCancel} />
          <Button title="Confirm" color="#4e0329" onPress={submitHandler} />
        </View>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 50,
  },
  container: {
    paddingTop: 100,
    paddingHorizontal: 100,
  },
  textInput: {
    borderColor: "black",
    padding: 5,
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 15,
    color: "white",
    marginBottom: 4,
    fontWeight: "bold",
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "white",
    color: "black",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
});
