import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <CssBaseline /> */}
            {/* <Provider store={store}></Provider> */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
