import { useState, useEffect } from "react";
import axios from "axios";

import CatList from "./components/CatList";
import NewCatForm from "./components/NewCatForm";

import "./App.css";

// const DATA = [
//   {
//     name: "Ubik",
//     caretaker: "Maria",
//     color: "grey",
//     personality: "wild child",
//     petCount: 6,
//     id: 1,
//   },
//   {
//     name: "Pepper",
//     caretaker: "Mark",
//     color: "black",
//     personality: "spicy",
//     petCount: 3,
//     id: 2,
//   },
//   {
//     name: "Binx",
//     caretaker: "Susan",
//     color: "tuxedo",
//     personality: "feral",
//     petCount: 8,
//     id: 3,
//   },
// ];
const kBaseUrl = "http://127.0.0.1:5000/cats";
function App() {
  const [catData, setCatData] = useState([]);

  const convertCat = ({ pet_count, ...cat }) => ({
    ...cat,
    petCount: pet_count,
    caretaker: "",
  });

  const catDataConvert = (res) => {
    return res.map(convertCat);
  };

  useEffect(() => {
    axios
      .get(kBaseUrl)
      .then((res) => setCatData(() => catDataConvert(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const petCat = (id) => {
    setCatData((prev) => {
      return prev.map((cat) => {
        if (id === cat.id) {
          return {
            ...cat,
            petCount: cat.petCount + 1,
          };
        } else {
          return cat;
        }
      });
    });
    axios
      .patch(`${kBaseUrl}/${id}/pet`)
      .then((res) => console.log("Back end response", res.data))
      .catch((err) => console.log(err));
  };

  const unregisterCat = (id) => {
    setCatData((prev) => prev.filter((cat) => cat.id !== id));
    axios
      .delete(`${kBaseUrl}/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (data) => {
    axios
      .post(kBaseUrl, data)
      .then((res) => {
        setCatData([convertCat(res.data), ...catData]);
      })
      .catch((err) => console.log(err));
  };

  const totalPetTally = catData.reduce((total, cat) => {
    total += cat.petCount;
    return total;
  }, 0);

  return (
    <main className="App">
      <h1>The Cat Corner</h1>
      <h2>Total number of pets across all cats: {totalPetTally}</h2>
      <NewCatForm handleSubmit={handleSubmit} />
      <CatList
        catData={catData}
        onPetCat={petCat}
        onUnregisterCat={unregisterCat}
      />
    </main>
  );
}

export default App;
