import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import EventsBackgroundTitle from '../../../../assets/images/EventsBackgroundTitle.svg';
import Calendar from '../../../common/calendar/Calendar';
import FilterEvents from '../../../common/filters/FilterEvents';
import EventCard from '../../../common/events/eventCard/EventCard';
import { EventCardData } from '../../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CardEvent } from '../../../../types/types';
import Pagination from '../../../common/pagination/Pagination';

const styles = {
    mainContainer: { height: '100%' },
    container: { margin: '0 60px' },
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ' },
};

export default function Events() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [pageSize] = useState(4); //
    const [filteredEvents, setFilteredEvents] = useState<CardEvent[]>([]);

    useEffect(() => {
        const start = activeStep * pageSize;
        const end = start + pageSize;
        setFilteredEvents(EventCardData.slice(start, end));
    }, [activeStep, pageSize]);

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, Math.ceil(EventCardData.length / pageSize) - 1));
    };

    const handleShowAll = () => {
        navigate('/events');
    };

    const handleLinkClick = () => {
        navigate('/events/id');
    };

    return (
        <Box sx={styles.mainContainer}>
            <Title title="Мероприятия" background={EventsBackgroundTitle} margin="0 0 0 0" width="574px" height="236px" padding="0 0 12px 90px " />
            <Box sx={styles.container}>
                <Calendar />
                <FilterEvents setFilteredCards={setFilteredEvents} cardList={EventCardData} />
                <Box sx={styles.cards}>
                    {filteredEvents.map((data, index) => (
                        <EventCard key={index} data={data} onClick={handleLinkClick} cardStyle={index === filteredEvents.length - 1 ? { marginTop: '-30px' } : {}} />
                    ))}
                </Box>
            </Box>
            <Pagination activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} handleShowAll={handleShowAll} />
        </Box>
    );
}
