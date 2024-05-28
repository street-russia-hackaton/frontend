import { Box } from '@mui/material';
import NavTitle from '../navPopupTitle/navPopupTitle';
import { useState } from 'react';
import AboutPartnersCard from './AboutPartners';

export default function AboutPartnersNav() {
    const [selectedTab, setSelectedTab] = useState('Генеральные');

    const handleTabChange = (label: string) => {
        setSelectedTab(label);
    };

    const tabs = [
        { label: 'Генеральные', onClick: () => handleTabChange('Генеральные') },
        { label: 'Стратегические', onClick: () => handleTabChange('Стратегические') },
        { label: 'Организационные', onClick: () => handleTabChange('Организационные') },
        { label: 'Региональные', onClick: () => handleTabChange('Региональные') },
    ];

    return (
        <Box sx={{ marginTop: '64px' }}>
            <NavTitle tabs={tabs} marginTab="0 0 0 10px" fontSize="20px" />
            {selectedTab === 'Генеральные' && <AboutPartnersCard />}
            {selectedTab === 'Стратегические' && <AboutPartnersCard />}
            {selectedTab === 'Организационные' && <AboutPartnersCard />}
            {selectedTab === 'Региональные' && <AboutPartnersCard />}
        </Box>
    );
}
