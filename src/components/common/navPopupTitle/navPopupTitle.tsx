import { Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

type NavPopupTitleProps = {
    tabs: Array<{ label: string; onClick: () => void }>;
    margin?: string;
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

export default function NavPopupTitle({ tabs, margin }: NavPopupTitleProps) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        tabs[newValue].onClick();
    };

    return (
        <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} aria-label="auth navigation" sx={{ '&.MuiButtonBase-root-MuiTab-root': { width: '100%' } }}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} sx={{ ...styles.title, margin: margin ? margin : '0 0 0 47px' }} />
                ))}
            </Tabs>
        </ThemeProvider>
    );
}
