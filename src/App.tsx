import { Route, Routes, Navigate } from 'react-router-dom';
import { Main, About, News, New, Events, Regions, Profile, EventsIdPage } from './components/pages';
import { ThemeProvider } from '@emotion/react';
import theme from './vendor/theme.tsx';
import ScrollToTop from './utils/scrollToTop.tsx';
import RegionIdPage from './components/pages/regions/RegionIdPage.tsx';
import AboutIdPage from './components/pages/about/AboutIdPage.tsx';
// import ProtectedRoute from './features/auth/ProtectedRoute';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollToTop />
            <Routes>
                <Route path="*" element={<Navigate to="/main" />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<AboutIdPage />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<New />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventsIdPage />} />
                <Route path="/regional" element={<Regions />} />
                <Route path="/regional/:id" element={<RegionIdPage />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route> */}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
