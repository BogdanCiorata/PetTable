import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddScreen from "./screens/AddScreen";
import EditScreen from "./screens/EditScreen";
import ListScreen from "./screens/ListScreen";
import ViewScreen from "./screens/ViewScreen";
import PetContextProvider from "./BE/store";
import DeleteScreen from "./screens/DeleteScreen";


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();





// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="ListScreen"
//       screenOptions={{
//         tabBarActiveTintColor: "black",
//         tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
//         tabBarStyle: { backgroundColor: "powderblue" },
//       }}
//     >
//       <Tab.Screen
//         name="List Screen"
//         component={ListScreen}
//         options={{ tabBarLabel: "List Screen" }}
//       />
//       <Tab.Screen
//         name="Add Screen"
//         component={AddScreen}
//         options={{ tabBarLabel: "Add Screen" }}
//       />
//       <Tab.Screen
//         name="Edit Screen"
//         component={EditScreen}
//         options={{ tabBarLabel: "Edit Screen" }}
//       />

//       <Tab.Screen
//         name="View Screen"
//         component={ViewScreen}
//         options={{ tabBarLabel: "View Screen" }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <PetContextProvider>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen
              name="ListScreen"
              component={ListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddScreen"
              component={AddScreen}
              options={{
                presentation: "modal",
                headerShown: false
              }}
            />
            <Stack.Screen
              name="EditScreen"
              component={EditScreen}
              options={{
                presentation: "modal",
                headerShown: false

              }}
            />

            <Stack.Screen
              name="DeleteScreen"
              component={DeleteScreen}
              options={{
                presentation: "modal",
                headerShown: false
              }}

            />
            <Stack.Screen
              name="ViewScreen"
              component={ViewScreen}
              options={{
                presentation: "modal",
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PetContextProvider>
    </>
  );
}
