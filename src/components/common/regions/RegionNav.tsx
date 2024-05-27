import { Box } from '@mui/material';
import NavTitle from '../navPopupTitle/navPopupTitle';
import { useState } from 'react';
import RegionEvent from './RegionEvent';
import RegionNew from './RegionNew';
import RegionObject from './RegionObject';

export default function RegionNav() {
    const [selectedTab, setSelectedTab] = useState('Объекты');

    const handleTabChange = (label: string) => {
        setSelectedTab(label);
    };

    const tabs = [
        { label: 'Объекты (6)', onClick: () => handleTabChange('Объекты') },
        { label: 'Новости (6)', onClick: () => handleTabChange('Новости') },
        { label: 'Мероприятия (8)', onClick: () => handleTabChange('Мероприятия') },
    ];

    return (
        <Box sx={{ marginTop: '64px' }}>
            <NavTitle tabs={tabs} margin="0 0 0 80px" />
            {selectedTab === 'Объекты' && <RegionObject />}
            {selectedTab === 'Новости' && <RegionNew />}
            {selectedTab === 'Мероприятия' && <RegionEvent />}
        </Box>
    );
}
