import { useState } from 'react';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Main, About, Login, Register } from './components/pages';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
