import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { newsCardData } from '../../../utils/constants';
import { CardNew } from '../../../types/types';
import FilterNews from '../filters/FilterNews';
import NewsGrid from '../news/NewsGrid';

export default function RegionNew() {
    const [filteredCards, setFilteredCards] = useState<CardNew[]>(newsCardData);

    return (
        <Container component="section" sx={{ p: { sm: '0 ' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <FilterNews setFilteredCards={setFilteredCards} cardList={newsCardData} />
                <NewsGrid filteredCards={filteredCards} />
            </Box>
        </Container>
    );
}
