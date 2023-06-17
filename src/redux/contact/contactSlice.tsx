import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import api from '../../constant/api';

export interface Person {
  id: number;
  name: string;
}

interface PersonState {
  contact: Person[];
}

const initialState: PersonState = {
  contact: [],
};

export const fetchPerson = createAsyncThunk('person/fetch', async () => {
  const response = await api.get('/contact');
  return response.data;
});

// export const savePerson = createAsyncThunk(
//   'person/save',
//   async (name: string, thunkAPI) => {
//     const response = await fetch('http://localhost:8000/person', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//       }),
//     });
//     const data = await response.json();
//     return data;
//   },
// );

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{name: string}>) => {
      state.contact.push({
        id: state.contact.length,
        name: action.payload.name,
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.contact = action.payload;
    });

    // builder.addCase(savePerson.fulfilled, (state, action) => {
    //   state.contact.push(action.payload);
    // });
  },
});

export default PersonSlice.reducer;
export const {addPerson} = PersonSlice.actions;
