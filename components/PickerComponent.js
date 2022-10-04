import React , {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {Picker} from "@react-native-picker/picker";


export default function PickerComponent() {
  
  const [Enable , setEnable]  = useState("courses");
  
  return (
    <View style={styles.container}>
        <Picker
          selectedValue={Enable}
          style={{ height: 50, width: 250 }}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable(itemValue)}
        >
          <Picker.Item label="Courses" value="courses" />
          <Picker.Item label="Data-Structures" value="DSA" />
          <Picker.Item label="ReactJs" value="react" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="Java" value="java" />
        </Picker>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});