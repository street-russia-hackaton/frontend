import './App.module.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Main, About, News, New, Events, Regions } from './components/pages';
import { ThemeProvider } from '@emotion/react';
import theme from './vendor/theme.tsx';
import ScrollToTop from './utils/scrollToTop.tsx';
// import ProtectedRoute from './features/auth/ProtectedRoute';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollToTop />
            <Routes>
                <Route path="*" element={<Navigate to="/main" />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<New />} />
                <Route path="/events" element={<Events />} />
                <Route path="/regional" element={<Regions />} />
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route> */}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
