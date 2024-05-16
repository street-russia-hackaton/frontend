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

export default function NavAuthTitle({ onRegister, onLogin }: NavAuthTitleProps) {
    const [value, setValue] = useState(0);

    const handleChange = (evt: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} aria-label="auth navigation">
                <Tab label="Регистрация" onClick={onRegister} />
                <Tab label="Вход" onClick={onLogin} />
            </Tabs>
        </ThemeProvider>
    );
}
