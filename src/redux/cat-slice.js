import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const kBaseUrl = "http://127.0.0.1:5000/cats";

const initialState = {
  cats: [],
  status: "idle",
  error: null,
};

const catDataConvert = (res) => {
  return res.map(convertCat);
};

const convertCat = ({ pet_count, ...cat }) => ({
  ...cat,
  petCount: pet_count,
  caretaker: "",
});

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
  try {
    const { data } = await axios.get(kBaseUrl);
    return catDataConvert(data);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while fetching cats.");
  }
});

export const updateCatPets = createAsyncThunk(
  "cats/updateCatPets",
  async (id) => {
    try {
      await axios.patch(`${kBaseUrl}/${id}/pet`);

      return { id };
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong while petting a cat.");
    }
  }
);

export const deleteCat = createAsyncThunk("cats/deleteCat", async (id) => {
  try {
    await axios.delete(`${kBaseUrl}/${id}`);
    return { id };
  } catch (error) {
    console.log("error: ", error);
  }
});

export const addNewCat = createAsyncThunk("cats/addNewCat", async (newCat) => {
  try {
    const { data } = await axios.post(kBaseUrl, newCat);
    return convertCat(data);
  } catch (error) {
    console.log("error: ", error);
  }
});

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cats = action.payload;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(updateCatPets.fulfilled, (state, action) => {
      state.cats = state.cats.map((cat) => {
        if (cat.id === action.payload.id) {
          return { ...cat, petCount: cat.petCount + 1 };
        } else {
          return cat;
        }
      });
    });
    builder.addCase(deleteCat.fulfilled, (state, action) => {
      state.cats = state.cats.filter((cat) => cat.id !== action.payload.id);
    });
    builder.addCase(addNewCat.fulfilled, (state, action) => {
      state.cats = [action.payload, ...state.cats];
    });
  },
});

export default catSlice.reducer;
