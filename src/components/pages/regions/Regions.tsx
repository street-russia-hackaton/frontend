import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box } from '@mui/material';
import EventPagination from '../../common/events/EventPagination';
import Benefits from '../main/benefits/Benefits';
import EventCard from '../../common/events/eventCard/EventCard';
import { CardEvent } from '../../../types/types';
import { EventCardData } from '../../../utils/constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegionList from '../../common/regions/regionList';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ' },
};

export default function Regions() {
    const [filteredEvents, setFilteredEvents] = useState<CardEvent[]>(EventCardData.slice(0, 4));
    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('/events/:id');
    };

    const handleRegionClick = () => {
        navigate('/regional/:id');
    };

    return (
        <Box>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ margin: '0 60px', padding: '0' }}>
                <BreadcrumbsComponent margin="0" />
                <TitleMainPage title="Региональные отделения" color="#fff" width="50vw" padding="0" height="54px" />
                <Box sx={{ marginTop: '120px' }}>
                    <RegionList onClick={handleRegionClick} />
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
