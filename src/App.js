import "./App.css";
import CatList from "./components/CatList";
import axios from "axios";
import { useState, useEffect } from "react";

const kBaseUrl = "http://127.0.0.1:5000";

const getAllCats = () => {
  return axios
    .get(`${kBaseUrl}/cats`)
    .then((response) => {
      console.log(response.data);
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const petCatApi = (id) => {
  return axios
    .patch(`${kBaseUrl}/cats/${id}/pet`)
    .then((response) => {
      return convertFromApi(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertFromApi = (apiCat) => {
  const { id, name, color, personality, pet_count } = apiCat;
  const newCat = { id, name, color, personality, petCount: pet_count };
  return newCat;
};

const App = () => {
  const [catState, setCatState] = useState([]);

  // filter returns a copy of catData with the cat we’re interested in deleting omitted from the list
  // Function can be updated to call backend to delete a cat from the database
  // const onUnregisterCat = id => {
  //   setCatData((catData) => catData.filter((cat) => {
  //     return cat.id !== id;
  //   }));
  // };

  const calcTotalPets = (catData) => {
    let initial_val = 0;
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, initial_val);
  };

  const totalPetTally = calcTotalPets(catState);

  const fetchCats = () => {
    getAllCats().then((cats) => {
      console.log(cats);
      setCatState(cats);
    });
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const onPetCat = (id) => {
    petCatApi(id).then((updatedCat) => {
      setCatState((oldData) => {
        return oldData.map((cat) => {
          if (cat.id === id) {
            return updatedCat;
          }
          return cat;
        });
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
        <h2>Total Number of Pets Across All Kitties: {totalPetTally}</h2>
      </header>
      <main>
        <CatList catData={catState} petCat={onPetCat} />
      </main>
    </div>
  );
};

export default App;
