import { Box, Container, List, ListItem } from '@mui/material';
import Title from '../titleMainPage/titleMainPage';
import NewsCard from '../newsCard/NewsCard';
import { newsCardData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';
import { useState, useEffect } from 'react';
import { MIN_LAPTOP_DISPLAY } from '../../../utils/constants';
import useScreenResize from '../../../utils/screenResize';
import FilterEvents from '../filters/FilterEvents';

const styles = {
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        p: '40px 0 40px 0',
        width: '100%',
        gap: '20px',
    },
    listItem: {
        p: 0,
        width: 'auto',
        display: 'block',
    },
};

interface DataProps {
    title: string;
}

export default function NewsGrid({ title }: DataProps) {
    const navigate = useNavigate();
    const display = useScreenResize();

    // дублирование карточек для демонстрации функционала без бэка
    // const cardData = Array.prototype.push.apply(newsCardData, newsCardData);

    const [cardCounter, setCardCounter] = useState(0);

    function showDefaultCards() {
        if (display > MIN_LAPTOP_DISPLAY) {
            setCardCounter(6);
        } else {
            setCardCounter(3);
        }
    }

    function handleShowMore() {
        if (display > MIN_LAPTOP_DISPLAY) {
            setCardCounter(cardCounter + 6);
        } else {
            setCardCounter(cardCounter + 3);
        }
    }

    const handleCardClick = (id: number) => {
        navigate(`/news/${id}`);
    };

    useEffect(() => {
        showDefaultCards();
    }, [display, newsCardData]);

    return (
        <Container component="section" sx={{ p: { sm: '0 0 60px' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <Title title={title} background="none" margin="0 0 24px 0" width="100%" height="100%" padding="0" color="#fff" />
                <FilterEvents />
                <List sx={{ ...styles.cardContainer }}>
                    {newsCardData.slice(0, cardCounter).map((data) => (
                        <ListItem key={data.id} sx={{ ...styles.listItem }}>
                            <NewsCard data={data} onClick={() => handleCardClick(data.id)} />
                        </ListItem>
                    ))}
                </List>
                {newsCardData.length > cardCounter && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <SubmitBtnWithIcon title="Загрузить ещё" width="201px" onClick={handleShowMore} icon />
                    </Box>
                )}
            </Box>
        </Container>
    );
}
