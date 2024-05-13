import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const styles = {
    link: { width: '276px' },
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
});

export default function NavAuthTitle() {
    const [activeLink, setActiveLink] = useState('');
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (window.location.pathname === '/register') {
            setActiveLink('/register');
            setValue(0);
        } else if (window.location.pathname === '/login') {
            setActiveLink('/login');
            setValue(1);
        }
    }, []);

    const handleLinkClick = (link: string, index: number) => {
        setActiveLink(link);
        setValue(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Tabs value={value} aria-label="basic tabs example" textColor="primary" indicatorColor="primary">
                <Tab label="Регистрация" component={Link} to="/register" onClick={() => handleLinkClick('/register', 0)} sx={{ ...styles.link, color: activeLink === '/register' ? '#000' : '#D2D1D0' }} disableRipple />
                <Tab label="Вход" component={Link} to="/login" onClick={() => handleLinkClick('/login', 1)} sx={{ ...styles.link, color: activeLink === '/login' ? '#000' : '#D2D1D0' }} disableRipple />
            </Tabs>
        </ThemeProvider>
    );
}
