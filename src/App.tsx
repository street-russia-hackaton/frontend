// import { useState } from 'react';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Main, About } from './components/pages';
import { ThemeProvider } from '@emotion/react';
import theme from './vendor/theme.tsx';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
