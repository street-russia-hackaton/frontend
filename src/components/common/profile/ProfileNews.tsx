import { List, ListItem } from '@mui/material';
import { newsCardData } from '../../../utils/constants';
import NewsCard from '../news/NewsCard';
import { useNavigate } from 'react-router-dom';
import NavPopupTitle from '../navPopupTitle/navPopupTitle';
import { useState } from 'react';

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

export default function ProfileNews() {
    const navigate = useNavigate();
    const primaryFilteredNews = newsCardData.slice(0, 3);
    const secondaryFilteredNews = newsCardData.slice(0, 6);
    const [showLeft, setShowLeft] = useState(true);

    const handleLeftClick = () => {
        setShowLeft(true);
    };

    const handleRightClick = () => {
        setShowLeft(false);
    };

    const handleCardClick = (id: number) => {
        navigate(`/news/${id}`);
    };

    const tabs = [
        { label: '2024 год', onClick: handleLeftClick },
        { label: 'Архив', onClick: handleRightClick },
    ];

    return (
        <>
            <NavPopupTitle tabs={tabs} />
            {showLeft && (
                <List sx={{ ...styles.cardContainer }}>
                {primaryFilteredNews.map((data) => (
                    <ListItem key={data.id ?? 0} sx={{ ...styles.listItem }}>
                        <NewsCard data={data} onClick={() => handleCardClick(data.id ?? 0)} />
                    </ListItem>
                ))}
            </List>
            )}
            {!showLeft && (
                <List sx={{ ...styles.cardContainer }}>
                {secondaryFilteredNews.map((data) => (
                    <ListItem key={data.id ?? 0} sx={{ ...styles.listItem }}>
                        <NewsCard data={data} onClick={() => handleCardClick(data.id ?? 0)} />
                    </ListItem>
                ))}
            </List>
            )}
        </>
    );
}
