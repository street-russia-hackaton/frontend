import { useState } from 'react';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Main, About, Login } from './components/pages';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
