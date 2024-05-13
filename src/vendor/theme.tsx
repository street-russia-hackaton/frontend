import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#AB66E1',
        },
        secondary: {
            main: '#7E52A1',
        },
        error: {
            main: '#FF3636',
        },
    },
    typography: {
        fontFamily: 'Bahnschrift',
        htmlFontSize: 16,
        fontSize: 16,
        h1: {
            fontSize: 24,
            fontWeight: 600,
            fontFamily: 'Benzin',
        },
        h2: {
            fontSize: 20,
            fontWeight: 600,
            fontFamily: 'Benzin',
        },
        subtitle1: {
            fontSize: 14,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Bahnschrift';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Bahnschrift'), local('Bahnschrift-Regular'), url('./fonts/Bahnschrift-Regular.ttf') format('truetype');
            }
            `,
        },
    },
});

export default theme;
