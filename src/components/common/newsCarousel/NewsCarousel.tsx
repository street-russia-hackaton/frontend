import { useState } from 'react';
import { Box, Container, List, ListItem } from '@mui/material';
import Title from '../titleMainPage/titleMainPage';
import Background from '../../../assets/images/background-news-main.svg';
import NewsCard from '../newsCard/NewsCard';
import { newsCardData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

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

interface DataProps {
    title?: string;
    color?: string;
    margin?: string;
    width?: string;
    height?: string;
    padding?: string;
    background?: string;
    container?: string;
}

export default function NewsCarousel({title, color, margin, width, height, padding, background, container}: DataProps) {
    const navigate = useNavigate();

    const handleCardClick = (id: number) => {
        navigate(`/news/${id}`);
    };
    return (
        <Container component="section" sx={{overflow: 'hidden', background: `url(${Background}) no-repeat right -5% bottom 60%`, p: { sm: container ? container : '120px 0 60px' }, m: '0', width: '100%', maxWidth: {lg: '100%'} }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
            <Title title={title} background={background} color={color} margin={margin} width={width} height={height} padding={padding} />
            <List sx={{ ...styles.list}}>
                {newsCardData.map((data) => (
                    <ListItem key={data.id} sx={{ ...styles.listItem}}>
                    <NewsCard data={data} onClick={() => handleCardClick(data.id)} />
                    </ListItem>
                ))}
            </List>
            </Box>
        </Container>
    );
}
