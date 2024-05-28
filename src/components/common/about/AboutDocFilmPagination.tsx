import { Box } from '@mui/material';
import { DocFilmAboutData } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { CardDocFilmAbout } from '../../../types/types';
import Pagination from '../../common/pagination/Pagination';

interface AboutDocFilmPaginationProps {
    filteredEvents: CardDocFilmAbout[];
    setFilteredEvents: React.Dispatch<React.SetStateAction<CardDocFilmAbout[]>>;
}

export default function AboutDocFilmPagination({ setFilteredEvents }: AboutDocFilmPaginationProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [pageSize] = useState(4);

    useEffect(() => {
        const start = activeStep * pageSize;
        const end = start + pageSize;
        setFilteredEvents(DocFilmAboutData.slice(start, end));
    }, [activeStep, pageSize, setFilteredEvents]);

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, Math.ceil(DocFilmAboutData.length / pageSize) - 1));
    };

    return (
        <Box sx={{ margin: '40px 0 0 0' }}>
            <Pagination activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} showButton={false} />
        </Box>
    );
}
