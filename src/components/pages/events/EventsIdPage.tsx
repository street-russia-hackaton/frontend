import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box } from '@mui/material';
import { EventCardData, EventPageCardData } from '../../../utils/constants';
import EventCard from '../../common/events/eventCard/EventCard';
import Benefits from '../main/benefits/Benefits';
import EventComponent from '../../common/events/EventComponent';
import { useState } from 'react';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ' },
};

export default function EventIdPage() {
    const [selectedEvent, setSelectedEvent] = useState(EventPageCardData[1]);

    const handleCardClick = (eventIndex: number) => {
        setSelectedEvent(EventPageCardData[eventIndex]);
    };
    return (
        <Box sx={{ height: '100%' }}>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ margin: '0 60px', padding: '0' }}>
                <BreadcrumbsComponent margin="0" />
                <EventComponent selectedEvent={selectedEvent} />
                <Box sx={{ marginTop: '120px' }}>
                    <TitleMainPage title="Возможно тебе будет интересно" color="#fff" width="65vw" padding="0" height="54px" />
                    <Box sx={styles.cards}>
                        {EventCardData.map((data, index) => (
                            <EventCard key={index} data={data} onClick={() => handleCardClick(index)} cardStyle={index === Object.keys(EventCardData).length - 1 ? { marginTop: '-30px' } : {}} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Benefits />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </Box>
    );
}
