import { useState } from 'react';
import FilterSelect from '../filterSelect/FilterSelect';
import { Box, SelectChangeEvent } from '@mui/material';
import { cities, disciplines } from '../../../utils/constants';

export default function SelectAuth() {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedDesciplines, setSelectedDesciplines] = useState<string>('');

    const handleCityChange = (evt: SelectChangeEvent<string>) => {
        setSelectedCity(evt.target.value);
    };

    const handleDesciplinesChange = (evt: SelectChangeEvent<string>) => {
        setSelectedDesciplines(evt.target.value);
    };

    return (
        <Box sx={{ display: 'flex', marginTop: '40px' }}>
            <FilterSelect label="Выберите регион" value={selectedCity} onChange={handleCityChange} items={cities} title="Выберите город" margin="0 20px 0 0 " />
            <FilterSelect label="Выберите дисцеплину" value={selectedDesciplines} onChange={handleDesciplinesChange} items={disciplines} title="Выберите дисцеплину" />
        </Box>
    );
}
