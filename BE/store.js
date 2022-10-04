import { createContext, useReducer } from "react";



export const PetContext = createContext({
  pet: [],
  addPet: ({ name, status}) => {},
  setPet: (pet) => {},
  deletePet: (id) => {},
  updatePet: (id, { name, status, index }) => {},
});

function petReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updatablePetIndex = state.findIndex(
        (pet) => pet.id === action.payload.id
      );
      const updatablePet = state[updatablePetIndex];
      const updatedItem = { ...updatablePet, ...action.payload.data };
      const updatedPet = [...state];
      updatedPet[updatablePetIndex] = updatedItem;
      return updatedPet;
    case "DELETE":
      return state.filter((pet) => pet.id !== action.payload);
    default:
      return state;
  }
}

function PetContextProvider({ children }) {
  const [petState, dispatch] = useReducer(petReducer, []);

  function addPet(petData) {
    dispatch({ type: "ADD", payload: petData });
  }

  function setPet(pet) {
    dispatch({ type: "SET", payload: pet });
  }

  function deletePet(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updatePet(id, petData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: petData } });
  }

  const value = {
    pet: petState,
    setPet: setPet,
    addPet: addPet,
    deletePet: deletePet,
    updatePet: updatePet,
  };

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}

export default PetContextProvider;
