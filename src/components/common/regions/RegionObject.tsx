import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { objectCardData } from '../../../utils/constants';
import { CardObject } from '../../../types/types';
import Objects from '../objects/Objects';
import FilterObject from '../filters/FilterObject';

export default function RegionObject() {
    const [filteredCards, setFilteredCards] = useState<CardObject[]>(objectCardData);

    return (
        <Container component="section" sx={{ p: { sm: '0 ' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <FilterObject setFilteredCards={setFilteredCards} cardList={objectCardData} />
                <Objects filteredCards={filteredCards} />
            </Box>
        </Container>
    );
}
