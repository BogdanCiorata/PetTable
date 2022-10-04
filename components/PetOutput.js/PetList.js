import {FlatList } from "react-native";
import Pet from "./Pet";

function renderPet(itemData) {
  return <Pet {...itemData.item}/>;
}

function PetList({ pets }) {
  pets.forEach((pet)=>{ pet.idx = pets.indexOf(pet)+1 });
    return (
    <FlatList
      data={pets}
      renderItem={renderPet}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PetList;
