import { useState } from 'react';
import { Box, Container, List, ListItem } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgroundTitle from '../../../../assets/images/background-news-title.svg';
import Background from '../../../../assets/images/background-news-main.svg';
import NewsCard from '../../../common/newsCard/NewsCard';
import { newsCardData } from '../../../../utils/constants';

const styles = {
    background: { position: 'absolute', top: '178px', right: '60px', width: '363px', height: '436px' },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(11, 1fr)',
        margin: '-110px 60px 0',
    },
    list: {
        display: 'flex',
        gap: '16px',
        p: 0,
    },
    listItem: {
        p: 0,
        width: 'auto',
        display: 'block',
    },
};

export default function News() {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };
    return (
        <Container component="section" sx={{ background: `url(${Background}) no-repeat right -5% bottom 60%`, p: { sm: '120px 0 60px' }, m: '0', width: '100%', maxWidth: {lg: '100%'} }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
            <Title title="Новости" background={BackgroundTitle} margin="0 0 6px -60px" width='340px' height='160px' padding='0 0 12px 60px' />
            <List sx={{ ...styles.list}}>
                {newsCardData.map((data, index) => (
                    <ListItem key={index} sx={{ ...styles.listItem}}>
                    <NewsCard data={data} onClick={() => handleCardClick(index)} />
                    </ListItem>
                ))}
            </List>
            </Box>
        </Container>
    );
}
