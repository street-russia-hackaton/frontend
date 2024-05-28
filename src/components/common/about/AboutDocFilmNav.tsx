import { Box } from '@mui/material';
import { useState } from 'react';
import { DocFilmAboutData } from '../../../utils/constants';
import { CardDocFilmAbout } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import AboutDocFilmCard from './AboutDocFilmCard';
import FiltersDocFilms from '../filters/FiltersDocFilms';
import AboutDocFilmPagination from './AboutDocFilmPagination';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ', margin: '40px 0 0 0' },
};

export default function AboutDocFilmNav() {
    const [filteredEvents, setFilteredEvents] = useState<CardDocFilmAbout[]>(DocFilmAboutData);

    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('');
    };

    return (
        <Box>
            <FiltersDocFilms setFilteredCards={setFilteredEvents} cardList={DocFilmAboutData} />
            <Box sx={styles.cards}>
                {filteredEvents.map((data, index) => (
                    <AboutDocFilmCard key={index} data={data} onClick={handleLinkClick} cardStyle={index % 4 === 3 ? { marginTop: '0' } : {}} />
                ))}
            </Box>
            <AboutDocFilmPagination filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents} />
        </Box>
    );
}
