import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Title from '../titleMainPage/titleMainPage';
import Background from '../../../assets/images/background-newsgrid.svg';
import NewsGrid from './NewsGrid';
import { newsCardData } from '../../../utils/constants';
import { CardNew } from '../../../types/types';
import FilterNews from '../filters/FilterNews';

export default function NewsComponent() {
    const [filteredCards, setFilteredCards] = useState<CardNew[]>(newsCardData);

    return (
        <Container component="section" sx={{ background: `url(${Background}) no-repeat right 0% top 20%`, p: { sm: '0 0 60px' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <Title title="Новости" background="none" margin="0 0 24px 0" width="100%" height="100%" padding="0" color="#fff" />
                <FilterNews setFilteredCards={setFilteredCards} cardList={newsCardData} />
                <NewsGrid filteredCards={filteredCards} />
            </Box>
        </Container>
    );
}
