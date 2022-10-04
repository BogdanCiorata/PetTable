import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-d12c3-default-rtdb.firebaseio.com";

export async function storePet(petData) {
  const response = await axios.post(BACKEND_URL + "/pet.json", petData);
  const id = response.data.name;
  return id;
}

export async function fetchPet() {
  const response = await axios.get(BACKEND_URL + "/pet.json");

  const pet = [];
  for (const key in response.data) {
    const petObj = {
      id: key,
      name: response.data[key].name,
      status: response.data[key].status,
    };
    pet.push(petObj);

  }


  return pet;

}


export function updatePet(id, petData) {
  return axios.put(BACKEND_URL + `/pet/${id}.json`, petData);
}

export function deletePet(id) {
  return axios.delete(BACKEND_URL + `/pet/${id}.json`);
}
