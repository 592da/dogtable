import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getAllBreeds } from "./dogsAPI";

type Index = Record<string, { likes: number; count: number }>;

export interface CounterState {
  index: Index;
  gallery: string[];
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  index: {},
  gallery: [],
  status: "idle",
};

export const breedsSelector = (state: RootState) =>
  Object.keys(state.breeds.index);
export const statusSelector = (state: RootState) => state.breeds.status;
export const breedSelector = (state: RootState, { breed }: { breed: string }) =>
  state.breeds.index[breed];
export const gallerySelector = (state: RootState) => state.breeds.gallery;

export const grid = { columns: 5, rows: 20 };

const cells = grid.columns * grid.rows;

export const seedAsync = createAsyncThunk("breeds/seed", async () => {
  const breeds = await getAllBreeds();
  const state: Index = {};
  const gallery: string[] = [];

  for (let breed of breeds) {
    state[breed] = { likes: 0, count: 0 };
  }

  for (let i = 0; i < cells; i++) {
    const breed = breeds[Math.floor(Math.random() * breeds.length)];
    gallery.push(breed);
    state[breed].count += 1;
  }

  return { state, gallery };
});

export const breedSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    like: (state, action: PayloadAction<string>) => {
      state.index[action.payload].likes += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(seedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(seedAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.index = action.payload.state;
        state.gallery = action.payload.gallery;
      });
  },
});

export const { like } = breedSlice.actions;

export default breedSlice.reducer;
