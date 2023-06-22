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

const catDataConvert = (res) => {
  return res.map(convertCat);
};

const convertCat = ({ pet_count, ...cat }) => ({
  ...cat,
  petCount: pet_count,
  caretaker: "",
});

function App() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    axios
      .get(kBaseUrl)
      .then((res) => setCatData(() => catDataConvert(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const petCat = (id) => {
    return axios
      .patch(`${kBaseUrl}/${id}/pet`)
      .then((res) => {
        const updatedCat = convertCat(res.data);
        setCatData((prev) => {
          return prev.map((cat) => {
            if (id === cat.id) {
              return updatedCat;
            } else {
              return cat;
            }
          });
        });

        // DON'T DO THIS
        // const newCatData = catData.map((cat) => {
        //     if (id === cat.id) {
        //       return updatedCat;
        //     } else {
        //       return cat;
        //     }
        //   });
        // setCatData(newCatData);
      })
      .catch((err) => console.log(err));
  };

  const unregisterCat = (id) => {
    axios
      .delete(`${kBaseUrl}/${id}`)
      .then((res) => {
        setCatData((prev) => prev.filter((cat) => cat.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (data) => {
    axios
      .post(kBaseUrl, data)
      .then((res) => {
        setCatData(prev => [convertCat(res.data), ...prev]);
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
