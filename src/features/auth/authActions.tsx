import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const backendURL = process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:5000' : import.meta.env.VITE_SERVER_URL;
const backendURL = 'http://127.0.0.1:5000/';

interface dataProps {
    email?: number;
    password?: string;
    city?: string;
    name?: string;
}

export const userLogin = createAsyncThunk('auth/login', async ({ email, password }: dataProps, { rejectWithValue }) => {
    try {
        // configure header's Content-Type as JSON
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(`${backendURL}/api/user/login`, { email, password }, config);

        // store user's token in local storage
        localStorage.setItem('userToken', data.userToken);

        return data;
    } catch (error: any) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const registerUser = createAsyncThunk('auth/register', async ({ name, city, email, password }: dataProps, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await axios.post(`${backendURL}/api/user/register`, { name, city, email, password }, config);
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
