import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowLeft from '../../../assets/images/ArrowLeft.svg?react';
import ArrowRight from '../../../assets/images/ArrowRight.svg?react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

const styles = {
    container: { position: 'relative', margin: '0' },
    title: { textAlign: 'start', margin: '8px 0 0 75px', textTransform: 'capitalize' },
    calendarContainer: { display: 'flex', justifyContent: 'center' },
    arrow: { position: 'absolute', top: '75%', transform: 'translateY(-50%)' },
    dateContainer: { display: 'flex', justifyContent: 'space-between', width: '90%' },
    date: { textAlign: 'center', cursor: 'pointer', borderRadius: '4px', flex: '1', margin: '0 2px' },
    mohtnText: { textTransform: 'uppercase' },
};

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [month, setMonth] = useState(dayjs().startOf('month'));

    useEffect(() => {
        dayjs.locale('ru');
    }, []);

    const handlePrevMonth = () => {
        setMonth(month.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setMonth(month.add(1, 'month'));
    };

    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    const dates = [];

    for (let date = startOfMonth; date.isBefore(endOfMonth.add(1, 'day')); date = date.add(1, 'day')) {
        dates.push(date);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={styles.container}>
                <Typography variant="h6" sx={styles.title}>
                    {month.format('MMMM')}
                </Typography>
                <Box sx={styles.calendarContainer}>
                    <IconButton sx={{ ...styles.arrow, left: 0 }} onClick={handlePrevMonth}>
                        <ArrowLeft />
                    </IconButton>
                    <IconButton sx={{ ...styles.arrow, right: 0 }} onClick={handleNextMonth}>
                        <ArrowRight />
                    </IconButton>
                    <Box sx={styles.dateContainer}>
                        {dates.map((date) => (
                            <Box
                                key={date.format('DD-MM-YYYY')}
                                sx={{
                                    ...styles.date,
                                    backgroundColor: date.isSame(selectedDate, 'day') ? '#fff' : 'transparent',

                                    color: date.day() === 0 || date.day() === 6 ? '#AA433A' : date.isSame(selectedDate, 'day') ? '#000' : 'inherit',
                                }}
                                onClick={() => setSelectedDate(date)}
                            >
                                <Typography variant="body2">{date.format('D')}</Typography>
                                <Typography variant="caption" sx={styles.mohtnText}>
                                    {date.format('dd')}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    );
}
