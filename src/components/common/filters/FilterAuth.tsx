import { useState } from 'react';
import FilterSelect from '../filterSelect/FilterSelect';
import { Box, SelectChangeEvent } from '@mui/material';
import { cities } from '../../../utils/constants';

interface FilterAuthProps {
    label?: string;
}

export default function FilterAuth({ label }: FilterAuthProps) {
    const [selectedCity, setSelectedCity] = useState<string>('');

    const handleCityChange = (event: SelectChangeEvent<string>) => {
        setSelectedCity(event.target.value);
    };

    return (
        <Box sx={{ marginTop: '16px' }}>
            <FilterSelect label={label ? label : 'Выбери город'} value={selectedCity} onChange={handleCityChange} items={cities} title="Выбери город" margin="8px 0 0 0" width="100%" />
        </Box>
    );
}
