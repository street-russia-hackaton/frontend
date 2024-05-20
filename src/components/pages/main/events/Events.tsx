import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import EventsBackgroundTitle from '../../../../assets/images/EventsBackgroundTitle.svg';
import Calendar from '../../../common/calendar/Calendar';
import FilterEvents from '../../../common/filterEvents/FilterEvents';
import EventCard from '../../../common/eventCard/EventCard';

const styles = {
    container: { margin: '0 60px' },
};

export default function Events() {
    return (
        <Box>
            <Title title="Мероприятия" background={EventsBackgroundTitle} margin="0 0 0 0" width="574px" height="236px" padding="0 0 12px 90px " />
            <Box sx={styles.container}>
                <Calendar />
                <FilterEvents />
                <EventCard />
            </Box>
        </Box>
    );
}
