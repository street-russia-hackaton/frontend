import { useState } from 'react';
import FilterSelect from '../filterSelect/FilterSelect';
import { SelectChangeEvent } from '@mui/material';
import { cities } from '../../../utils/constants';

export default function SelectAuth() {
    const [selectedCity, setSelectedCity] = useState<string>('');

    const handleCityChange = (event: SelectChangeEvent<string>) => {
        setSelectedCity(event.target.value);
    };

    return <FilterSelect label="Город" value={selectedCity} onChange={handleCityChange} items={cities} title="Выберите город" />;
}
