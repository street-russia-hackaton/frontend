import { useState } from 'react';
import { Box, Container } from '@mui/material';

import Background from '../../../assets/images/background-newsgrid.svg';

import { newsCardData } from '../../../utils/constants';
import { CardNew } from '../../../types/types';
import FilterNews from '../../common/filters/FilterNews';
import NewsGrid from '../../common/news/NewsGrid';

export default function RegionNew() {
    const [filteredCards, setFilteredCards] = useState<CardNew[]>(newsCardData);

    return (
        <Container component="section" sx={{ background: `url(${Background}) no-repeat right 0% top 20%`, p: { sm: '0 ' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <FilterNews setFilteredCards={setFilteredCards} cardList={newsCardData} />
                <NewsGrid filteredCards={filteredCards} />
            </Box>
        </Container>
    );
}
