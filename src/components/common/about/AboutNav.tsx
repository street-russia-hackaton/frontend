import { Box } from '@mui/material';
import NavTitle from '../navPopupTitle/navPopupTitle';
import { useState } from 'react';
import AboutDocFilmNav from './AboutDocFilmNav';

export default function AboutNav() {
    const [selectedTab, setSelectedTab] = useState('Документальные фильмы');

    const handleTabChange = (label: string) => {
        setSelectedTab(label);
    };

    const tabs = [
        { label: 'Документальные фильмы', onClick: () => handleTabChange('Документальные фильмы') },
        { label: 'Интервью', onClick: () => handleTabChange('Интервью') },
        { label: 'Исторические справки', onClick: () => handleTabChange('Исторические справки') },
    ];

    return (
        <Box sx={{ marginTop: '64px' }}>
            <NavTitle tabs={tabs} margin="0 0 0 80px" marginTab="0 0 0 10px" fontSize="20px" />
            {selectedTab === 'Документальные фильмы' && <AboutDocFilmNav />}
            {/* {selectedTab === 'Новости' && <RegionNew />}
            {selectedTab === 'Мероприятия' && <RegionEvent />} */}
        </Box>
    );
}
