import { Box, List, ListItem } from '@mui/material';
import NewsCard from './NewsCard';
import { newsCardData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';
import { useState, useEffect } from 'react';
import { MIN_LAPTOP_DISPLAY } from '../../../utils/constants';
import useScreenResize from '../../../utils/screenResize';
import { CardNew } from '../../../types/types';

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

interface NewsGridProps {
    filteredCards: CardNew[];
}

export default function NewsGrid({ filteredCards }: NewsGridProps) {
    const navigate = useNavigate();
    const display = useScreenResize();

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
        <>
            {filteredCards.length !== 0 && (
                <List sx={{ ...styles.cardContainer }}>
                    {filteredCards.slice(0, cardCounter).map((data) => (
                        <ListItem key={data.id ?? 0} sx={{ ...styles.listItem }}>
                            <NewsCard data={data} onClick={() => handleCardClick(data.id ?? 0)} />
                        </ListItem>
                    ))}
                </List>
            )}
            {filteredCards.length > cardCounter && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SubmitBtnWithIcon title="Загрузить ещё" width="201px" onClick={handleShowMore} icon />
                </Box>
            )}
        </>
    );
}
