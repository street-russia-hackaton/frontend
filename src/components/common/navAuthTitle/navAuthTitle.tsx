import { Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

type NavAuthTitleProps = {
    onRegister: () => void;
    onLogin: () => void;
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    },
});

const styles = {
    title: { fontFamily: 'Benzin', fontSize: '24px', color: 'rgba(255, 255, 255, 0.5)' },
};

export default function NavAuthTitle({ onRegister, onLogin }: NavAuthTitleProps) {
    const [value, setValue] = useState(0);

    const handleChange = (evt: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} aria-label="auth navigation">
                <Tab label="Вход" onClick={onLogin} sx={{ ...styles.title, marginRight: '47px' }} />
                <Tab label="Регистрация" onClick={onRegister} sx={styles.title} />
            </Tabs>
        </ThemeProvider>
    );
}
