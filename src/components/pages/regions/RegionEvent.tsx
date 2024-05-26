import { Box } from '@mui/material';
import { useState } from 'react';
import SubmitBtn from '../../common/btns/SubmitBtn';
import { EventCardData, EventPageCardData } from '../../../utils/constants';
import FilterEvents from '../../common/filters/FilterEvents';
import Calendar from '../../common/calendar/Calendar';
import { CardEvent } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import EventCard from '../../common/events/eventCard/EventCard';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ' },
};

export default function RegionEvent() {
    const [filteredEvents, setFilteredEvents] = useState<CardEvent[]>(EventCardData.slice(0, 4));

    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('/events/:id');
    };

    return (
        <Box sx={{ margin: '0 60px' }}>
            <Box sx={{ margin: '64px 0 0 0' }}>
                <Calendar />
            </Box>
            <FilterEvents setFilteredCards={setFilteredEvents} cardList={EventPageCardData} />
            <Box sx={styles.cards}>
                {filteredEvents.map((data, index) => (
                    <EventCard key={index} data={data} onClick={handleLinkClick} cardStyle={index % 4 === 3 ? { marginTop: '0' } : {}} />
                ))}
            </Box>
            <SubmitBtn title="Загрузить еще" width="198px" margin="32px 40% 0" />
        </Box>
    );
}
