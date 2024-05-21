import { ThemeProvider } from '@emotion/react';
import { Checkbox, createTheme } from '@mui/material';

interface CheckoxIconProps {
    onChange?: () => void;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    },
});

const styles = {
    checkbox: {
        color: '#fff',
        padding: '0 7px 0  0',
    },
};

export default function CheckoxIcon({ onChange }: CheckoxIconProps) {
    return (
        <ThemeProvider theme={theme}>
            <Checkbox disableRipple onChange={onChange} color="primary" sx={styles.checkbox} />
        </ThemeProvider>
    );
}
