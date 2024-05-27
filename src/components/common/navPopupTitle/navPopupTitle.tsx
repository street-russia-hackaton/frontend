import { Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

type NavPopupTitleProps = {
    tabs: Array<{ label: string; onClick: () => void }>;
    marginTab?: string;
    margin?: string;
    fontSize?: string;
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    },
});

const styles = {

    title: { fontFamily: 'Benzin', fontSize: '24px', color: 'rgba(255, 255, 255, 0.5)', ':first-of-type': {margin: 0} },

};

export default function NavPopupTitle({ tabs, margin, marginTab, fontSize }: NavPopupTitleProps) {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        tabs[newValue].onClick();
    };

    return (
        <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} aria-label="auth navigation" sx={{ '& .MuiButtonBase-root': { maxWidth: '100vw', margin: marginTab ? marginTab : '0' } }}>
                {tabs.map((tab, index) => (

                    <Tab key={index} label={tab.label} sx={{ ...styles.title, margin: margin ? margin : '0 0 0 47px', fontSize: fontSize ? fontSize : '24px' }} />

                ))}
            </Tabs>
        </ThemeProvider>
    );
}
