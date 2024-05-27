import { Box } from '@mui/material';
import { useState } from 'react';
import { AboutPartnerData } from '../../../utils/constants';
import { CardPartnerAbout } from '../../../types/types';
import { useNavigate } from 'react-router-dom';
import AboutPartnerCard from './AboutPartnerCard';
import AboutPartnerPagination from './AboutPartnerPagination';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 40px ', margin: '40px 0 0 0' },
};

export default function AboutPartnersCard() {
    const [filteredEvents, setFilteredEvents] = useState<CardPartnerAbout[]>(AboutPartnerData);

    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('');
    };

    return (
        <Box>
            <Box sx={styles.cards}>
                {filteredEvents.map((data, index) => (
                    <AboutPartnerCard key={index} data={data} onClick={handleLinkClick} cardStyle={index % 4 === 3 ? { marginTop: '0' } : {}} />
                ))}
            </Box>
            <AboutPartnerPagination filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents} />
        </Box>
    );
}
