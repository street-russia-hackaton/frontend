import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../../common/pagination/Pagination';
import { CardNew } from '../../../types/types';

interface EventPaginationProps {
    setFilteredEvents: React.Dispatch<React.SetStateAction<CardNew[]>>;
    newsCardData: CardNew[];
}

export default function NewsPagination({ setFilteredEvents, newsCardData }: EventPaginationProps) {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const pageSize = 1;

    useEffect(() => {
        const start = activeStep * pageSize;
        const end = start + pageSize;
        setFilteredEvents(newsCardData.slice(start, end));
    }, [activeStep, pageSize, setFilteredEvents, newsCardData]);

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, newsCardData.length - 1));
    };

    const handleShowAll = () => {
        navigate('/news');
    };

    return (
        <Box>
            <Pagination activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} handleShowAll={handleShowAll} title="Больше новостей" width="225px" margin="70px 0 0" />
        </Box>
    );
}
