import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box, CardMedia } from '@mui/material';
import BackgroundAboutPageRed from '../../../assets/images/BackgroundAboutPageRed.svg';
import CuratorCard from '../../common/curatorCard/CuratorCard';
import { regionalDepartmentsPersons } from '../../../utils/constants';
import AboutRegionalDepartmentPagination from './AboutRegionalDepartmentPagination';
import { useState } from 'react';
import { AboutDepartment } from '../../../types/types';

export default function AboutRegionDepartment() {
    const [filteredEvents, setFilteredEvents] = useState<AboutDepartment[]>(regionalDepartmentsPersons);
    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', bottom: -100, right: -60, zIndex: -10 }}>
                <CardMedia component="img" src={BackgroundAboutPageRed} sx={{ width: '454px' }} />
            </Box>
            <TitleMainPage title="Руководители региональных направлений" color="#fff" width="100vw" padding="0" margin="40px 0 00" />
            <Box sx={{ display: 'flex', gap: '20px' }}>
                {regionalDepartmentsPersons.map((person, index) => (
                    <CuratorCard key={index} data={person} />
                ))}
            </Box>
            <AboutRegionalDepartmentPagination filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents} />
        </Box>
    );
}
