import { Box } from '@mui/material';
import { regionalDepartmentsPersons } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { AboutDepartment } from '../../../types/types';
import Pagination from '../../common/pagination/Pagination';

interface AboutDocFilmPaginationProps {
    filteredEvents: AboutDepartment[];
    setFilteredEvents: React.Dispatch<React.SetStateAction<AboutDepartment[]>>;
}

export default function AboutDocFilmPagination({ setFilteredEvents }: AboutDocFilmPaginationProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [pageSize] = useState(3);

    useEffect(() => {
        const start = activeStep * pageSize;
        const end = start + pageSize;
        setFilteredEvents(regionalDepartmentsPersons.slice(start, end));
    }, [activeStep, pageSize, setFilteredEvents]);

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, Math.ceil(regionalDepartmentsPersons.length / pageSize) - 1));
    };

    return (
        <Box sx={{ margin: '40px 0 0 0' }}>
            <Pagination activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} showButton={false} />
        </Box>
    );
}
