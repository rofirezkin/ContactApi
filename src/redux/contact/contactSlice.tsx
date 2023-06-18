import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import api from '../../constant/api';
import {showMessage} from 'react-native-flash-message';

export interface Contact {
  id: number;
  name: string;
}

export interface detailContactProps {
  id?: number;
  firstName: string;
  lastName: string;
  age: string;
  photo: string;
}
interface ContactState {
  contact: Contact[];
  isLoading: boolean;
  detailContact: detailContactProps;
}

const initialState: ContactState = {
  contact: [],
  isLoading: false,
  detailContact: {
    firstName: '',
    lastName: '',
    age: '',
    photo: 'photo',
  },
};

export const fetchContact = createAsyncThunk('contact/fetch', async () => {
  const response = await api.get('/contact');
  return response.data;
});

export const saveContact = createAsyncThunk(
  'contact/save',
  async (data: any, thunkAPI) => {
    const sendData = {
      firstName: data?.form?.firstName,
      lastName: data?.form?.lastName,
      age: data?.form.age,
      photo: 'https://loremflickr.com/1234/2345/abstract',
    };

    // console.log('desn dana ', sendData);
    const response = await api
      .post('/contact', sendData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch(err => {
        console.log('err?.response?.status', err?.response?.status);
        let message = '';
        switch (err?.response?.status) {
          case 400:
            message = 'Bad Request : coba input data yang lain';
            break;
          case 404:
            message = 'APi tidak ditemukan';
            break;
          case 500:
            message = 'Internal Error';
            break;
          default:
        }
        showMessage({
          message: message,
          type: 'danger',
        });
      });

    if (!response) return thunkAPI.rejectWithValue(response);
    if (response) {
      showMessage({
        message: 'sukses tambah data',
        type: 'success',
      });
      data.navigation.goBack();
      return sendData;
    }
  },
);

export const fetchDetailContact = createAsyncThunk(
  'contact/detailContact',
  async (id: any, thunkAPI) => {
    // console.log('desn dana ', sendData);
    const response = await api.get(`/contact/${id}`).catch(err => {
      console.log('err?.response?.status', err?.response?.status);
      let message = '';
      switch (err?.response?.status) {
        case 400:
          message = 'Bad Request : coba input data yang lain';
          break;
        case 404:
          message = 'APi tidak ditemukan';
          break;
        case 500:
          message = 'Internal Error';
          break;
        default:
      }
      showMessage({
        message: message,
        type: 'danger',
      });
    });

    if (response) {
      return response.data;
    }
  },
);

//

export const editContact = createAsyncThunk(
  'contact/save',
  async (data: any, thunkAPI) => {
    const sendData = {
      firstName: data?.form?.firstName,
      lastName: data?.form?.lastName,
      age: data?.form.age,
      photo: data.form.photo,
    };

    // console.log('desn dana ', sendData);
    const response = await api
      .put(`/contact/${data.form.id}`, sendData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch(err => {
        console.log('err?.response?.status', err?.response?.status);
        let message = '';
        switch (err?.response?.status) {
          case 400:
            message = 'Bad Request : coba input data yang lain';
            break;
          case 404:
            message = 'APi tidak ditemukan';
            break;
          case 500:
            message = 'Internal Error';
            break;
          default:
        }
        showMessage({
          message: message,
          type: 'danger',
        });
      });

    if (!response) return thunkAPI.rejectWithValue(response);
    if (response) {
      showMessage({
        message: 'sukses tambah data',
        type: 'success',
      });
      data.navigation.goBack();
      return sendData;
    }
  },
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.contact = action.payload.data;
    });

    builder.addCase(saveContact.fulfilled, (state, action) => {
      state.contact.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(saveContact.pending, (state, action) => {
      console.log('data kedua pending ', action.payload);

      state.isLoading = true;
    });
    builder.addCase(saveContact.rejected, (state, action) => {
      console.log('data kedua reject ', action.payload);
      state.isLoading = false;
    });

    builder.addCase(fetchDetailContact.fulfilled, (state, action) => {
      console.log('full filledd ====', action.payload.data);
      state.detailContact = action.payload?.data;
      state.isLoading = false;
    });
    builder.addCase(fetchDetailContact.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default contactSlice.reducer;
