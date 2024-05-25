import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box } from '@mui/material';
import Calendar from '../../common/calendar/Calendar';
import FilterEvents from '../../common/filters/FilterEvents';
import { useState } from 'react';
import { CardEvent } from '../../../types/types';
import { EventCardData, EventPageCardData } from '../../../utils/constants';
import EventCard from '../../common/events/eventCard/EventCard';
import { useNavigate } from 'react-router-dom';
import Benefits from '../main/benefits/Benefits';
import SubmitBtn from '../../common/btns/SubmitBtn';
import EventPagination from '../../common/events/EventPagination';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ' },
};

export default function Events() {
    const [filteredEvents, setFilteredEvents] = useState<CardEvent[]>(EventCardData.slice(0, 4));

    const navigate = useNavigate();

    const handleLinkClick = () => {
        console.log('Navigating to /events/:id');
        navigate('/events/:id');
    };
    return (
        <Box sx={{ height: '100%' }}>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ margin: '0 60px', padding: '0' }}>
                <BreadcrumbsComponent margin="0" />
                <TitleMainPage title="Все мероприятия" color="#fff" width="50vw" padding="0" height="54px" />
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
                <Box sx={{ marginTop: '120px' }}>
                    <TitleMainPage title="Возможно тебе будет интересно" color="#fff" width="65vw" padding="0" height="54px" />
                    <Box sx={styles.cards}>
                        {filteredEvents.map((data, index) => (
                            <EventCard key={index} data={data} onClick={handleLinkClick} cardStyle={index === filteredEvents.length - 1 ? { marginTop: '-30px' } : {}} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <EventPagination filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents} />
            <Benefits />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </Box>
    );
}
