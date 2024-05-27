import { Box } from '@mui/material';
import { AboutPartnerData } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { CardPartnerAbout } from '../../../types/types';
import Pagination from '../../common/pagination/Pagination';

interface AboutPartnerPaginationProps {
    filteredEvents: CardPartnerAbout[];
    setFilteredEvents: React.Dispatch<React.SetStateAction<CardPartnerAbout[]>>;
}

export default function AboutPartnerPagination({ setFilteredEvents }: AboutPartnerPaginationProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [pageSize] = useState(2);

    useEffect(() => {
        const start = activeStep * pageSize;
        const end = start + pageSize;
        setFilteredEvents(AboutPartnerData.slice(start, end));
    }, [activeStep, pageSize, setFilteredEvents]);

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, Math.ceil(AboutPartnerData.length / pageSize) - 1));
    };

    return (
        <Box sx={{ margin: '40px 0 0 0' }}>
            <Pagination activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} showButton={false} />
        </Box>
    );
}
