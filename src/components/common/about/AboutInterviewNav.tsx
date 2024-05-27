import { Box } from '@mui/material';
import { useState } from 'react';
import { InterviewAboutData } from '../../../utils/constants';
import { CardDocFilmAbout } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import AboutDocFilmCard from './AboutDocFilmCard';
import FiltersDocFilms from '../filters/FiltersDocFilms';
import AboutInterviewPagination from './AboutInterviewPagination';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ', margin: '40px 0 0 0' },
};

export default function AboutInterviewNav() {
    const [filteredEvents, setFilteredEvents] = useState<CardDocFilmAbout[]>(InterviewAboutData);

    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('');
    };

    return (
        <Box>
            <FiltersDocFilms setFilteredCards={setFilteredEvents} cardList={InterviewAboutData} />
            <Box sx={styles.cards}>
                {filteredEvents.map((data, index) => (
                    <AboutDocFilmCard key={index} data={data} onClick={handleLinkClick} cardStyle={index % 4 === 3 ? { marginTop: '0' } : {}} />
                ))}
            </Box>
            <AboutInterviewPagination filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents} />
        </Box>
    );
}
