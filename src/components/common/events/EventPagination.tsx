import { Box } from '@mui/material';
import { EventCardData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CardEvent } from '../../../types/types';
import Pagination from '../../common/pagination/Pagination';

interface EventPaginationProps {
    filteredEvents: CardEvent[];
    setFilteredEvents: React.Dispatch<React.SetStateAction<CardEvent[]>>;
}

export default function EventPagination({ setFilteredEvents }: EventPaginationProps) {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [pageSize] = useState(4);

    useEffect(() => {
        const start = activeStep * pageSize;
        const end = start + pageSize;
        setFilteredEvents(EventCardData.slice(start, end));
    }, [activeStep, pageSize, setFilteredEvents]);

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, Math.ceil(EventCardData.length / pageSize) - 1));
    };

    const handleShowAll = () => {
        navigate('/events');
    };

    return (
        <Box>
            <Pagination activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} handleShowAll={handleShowAll} title="Смотреть все" width="185px" margin="70px 60px 0" />
        </Box>
    );
}
