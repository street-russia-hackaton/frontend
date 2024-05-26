import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

type DonateBtnProps = {
    sum: Array<{ text: string }>;
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    },
});

export default function DonateBtn({ sum }: DonateBtnProps) {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (_: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    return (
        <ThemeProvider theme={theme}>
            <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform" sx={{ borderRadius: 0, display: 'flex', justifyContent: 'space-between' }}>
                {sum.map((item, index) => (
                    <ToggleButton key={index} value={item.text} sx={{ backgroundColor: '#fff', border: '1px solid #222', borderRadius: 0, display: 'flex', justifyContent: 'space-between' }}>
                        {item.text}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </ThemeProvider>
    );
}
