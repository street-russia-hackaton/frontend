import { useState, useEffect } from 'react';
import FilterSelect from '../filterSelect/FilterSelect';
import { Box, SelectChangeEvent } from '@mui/material';
import { cities, disciplines } from '../../../utils/constants';
import { CardDocFilmAbout } from '../../../types/types';
import NotFound from '../notFound/NotFound';

interface StateProps {
    setFilteredCards: (evt: CardDocFilmAbout[]) => void;
    cardList: CardDocFilmAbout[];
}

export default function FiltersDocFilms({ setFilteredCards, cardList }: StateProps) {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedDesciplines, setSelectedDesciplines] = useState<string>('');
    const [filteredResult, setFilteredResult] = useState<CardDocFilmAbout[]>([]);

    const handleCityChange = (evt: SelectChangeEvent<string>) => {
        setSelectedCity(evt.target.value);
    };

    const handleDesciplinesChange = (evt: SelectChangeEvent<string>) => {
        setSelectedDesciplines(evt.target.value);
    };

    const getfilteredCards = (list: CardDocFilmAbout[], primaryKey: keyof CardDocFilmAbout, secondaryKey: keyof CardDocFilmAbout, primaryOption: string, secondaryOption: string): CardDocFilmAbout[] => {
        let primaryList;
        let secondaryList;

        const primaryOptionStr = primaryOption.toString().toLowerCase();
        const secondaryOptionStr = secondaryOption.toString().toLowerCase();

        if (primaryOptionStr === '' || primaryOptionStr === 'все') {
            primaryList = list;
        } else {
            primaryList = list.filter((item) => item[primaryKey]?.toString().toLowerCase() === primaryOptionStr);
        }

        if (secondaryOptionStr === '' || secondaryOptionStr === 'все') {
            secondaryList = list;
        } else {
            secondaryList = list.filter((item) => item[secondaryKey]?.toString().toLowerCase() === secondaryOptionStr);
        }

        const resultArray = primaryList.filter((item) => {
            return secondaryList.some((item2) => item2.id === item.id);
        });

        return resultArray;
    };

    useEffect(() => {
        const filtered = getfilteredCards(cardList, 'city', 'tag', selectedCity, selectedDesciplines);
        setFilteredResult(filtered);
        setFilteredCards(filtered);
    }, [selectedDesciplines, selectedCity]);

    return (
        <Box>
            <Box sx={{ display: 'flex', marginTop: '40px' }}>
                <FilterSelect label="Выбери регион" value={selectedCity} onChange={handleCityChange} items={cities} title="Выбери регион" margin="0 20px 0 0 " />
                <FilterSelect label="Выбери дисцеплину" value={selectedDesciplines} onChange={handleDesciplinesChange} items={disciplines} title="Выбери дисцеплину" />
            </Box>
            {filteredResult.length === 0 && <NotFound title="ничего найдено :( Пожалуйста, измени настройки фильтров, чтобы увидеть актуальные события.  " />}
        </Box>
    );
}
