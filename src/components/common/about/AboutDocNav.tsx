import { Box } from '@mui/material';
import NavTitle from '../navPopupTitle/navPopupTitle';
import { useState } from 'react';
import AboutDocument from './AboutDocument';
import { AboutDocumentsData } from '../../../utils/constants';

export default function AboutDocNav() {
    const [selectedTab, setSelectedTab] = useState('Все');

    const handleTabChange = (label: string) => {
        setSelectedTab(label);
    };

    const tabs = [
        { label: 'Все', onClick: () => handleTabChange('Все') },
        { label: 'Официальные', onClick: () => handleTabChange('Официальные') },
        { label: 'Внутренние', onClick: () => handleTabChange('Внутренние') },
        { label: 'Внешние', onClick: () => handleTabChange('Внешние') },
    ];

    return (
        <Box sx={{ marginTop: '64px' }}>
            <NavTitle tabs={tabs} marginTab="0 0 0 50px" fontSize="20px" />
            {selectedTab === 'Все' && (
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, auto)', width: '1000px' }}>
                    {AboutDocumentsData.map((document) => (
                        <AboutDocument key={document.id} data={document} />
                    ))}
                </Box>
            )}
            {selectedTab === 'Официальные' && (
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, auto)', width: '1000px' }}>
                    {AboutDocumentsData.map((document) => (
                        <AboutDocument key={document.id} data={document} />
                    ))}
                </Box>
            )}
            {selectedTab === 'Внутренние' && (
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, auto)', width: '1000px' }}>
                    {AboutDocumentsData.map((document) => (
                        <AboutDocument key={document.id} data={document} />
                    ))}
                </Box>
            )}
            {selectedTab === 'Внешние' && (
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, auto)', width: '1000px' }}>
                    {AboutDocumentsData.map((document) => (
                        <AboutDocument key={document.id} data={document} />
                    ))}
                </Box>
            )}
        </Box>
    );
}
