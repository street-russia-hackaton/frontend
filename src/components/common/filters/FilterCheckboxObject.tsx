import { useState } from 'react';
import CheckboxIcon from '../checkboxIcon/CheckboxIcon.tsx';
import { Box, Typography } from '@mui/material';

const styles = {
    container: { marginTop: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontSize: '16px' },
    textContainer: { display: 'flex', alignItems: 'center' },
};

export default function FilterCheckboxObject() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Box sx={styles.container}>
            <Typography component="p">Тип простанства</Typography>
            <Box sx={styles.textContainer}>
                <CheckboxIcon onChange={handleCheckboxChange} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component="p">Уличные локации</Typography>
                </Box>
            </Box>
            <Box sx={styles.textContainer}>
                <CheckboxIcon onChange={handleCheckboxChange} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component="p">Крытые локации</Typography>
                </Box>
            </Box>
        </Box>
    );
}
