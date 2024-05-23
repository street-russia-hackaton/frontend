import { useState, useEffect } from 'react';
import FilterSelect from '../filterSelect/FilterSelect';
import { Box, SelectChangeEvent } from '@mui/material';
import { cities, disciplines } from '../../../utils/constants';
import { CardEvent } from '../../../types/types';

interface StateProps {
    setFilteredCards: (evt: CardEvent[]) => void;
    cardList: CardEvent[];
}

export default function FilterEvents({ setFilteredCards, cardList }: StateProps) {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedDesciplines, setSelectedDesciplines] = useState<string>('');

    const handleCityChange = (evt: SelectChangeEvent<string>) => {
        setSelectedCity(evt.target.value);
    };

    const handleDesciplinesChange = (evt: SelectChangeEvent<string>) => {
        setSelectedDesciplines(evt.target.value);
    };

    // Универсальная функция фильтрации списка по 2-м селектам
    const getfilteredCards = (list: CardEvent[], primaryKey: keyof CardEvent, secondaryKey: keyof CardEvent, primaryOption: string, secondaryOption: string): CardEvent[] => {
        let primaryList;
        let secondaryList;
        if (primaryOption === '' || primaryOption === 'Все') {
            primaryList = list;
        } else {
            primaryList = list.filter((item) => item[primaryKey] === primaryOption);
        }
        if (secondaryOption === '' || secondaryOption === 'Все') {
            secondaryList = list;
        } else {
            secondaryList = list.filter((item) => item[secondaryKey] === secondaryOption);
        }
        console.log(primaryList);
        console.log(secondaryList);
        const resultArray = primaryList.filter((item) => {
            return secondaryList.some((item2) => item2.id === item.id);
        });
        return resultArray;
    };

    useEffect(() => {
        setFilteredCards(getfilteredCards(cardList, 'country', 'subtitle', selectedCity, selectedDesciplines));
    }, [selectedDesciplines, selectedCity]);

    return (
        <Box sx={{ display: 'flex', marginTop: '40px' }}>
            <FilterSelect label="Выбери регион" value={selectedCity} onChange={handleCityChange} items={cities} title="Выбери регион" margin="0 20px 0 0 " />
            <FilterSelect label="Выбери дисцеплину" value={selectedDesciplines} onChange={handleDesciplinesChange} items={disciplines} title="Выбери дисцеплину" />
        </Box>
    );
}
