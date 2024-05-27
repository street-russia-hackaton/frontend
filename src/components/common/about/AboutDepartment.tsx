import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box, CardMedia } from '@mui/material';
import BackgroundAboutPageBlue from '../../../assets/images/BackgroundAboutPageBlue.svg';
import CuratorCard from '../../common/curatorCard/CuratorCard';
import { centralDepartmentsPersons } from '../../../utils/constants';

export default function AboutDepartment() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', bottom: -100, left: -60, zIndex: -10 }}>
                <CardMedia component="img" src={BackgroundAboutPageBlue} sx={{ width: '454px' }} />
            </Box>
            <TitleMainPage title="Центральное руководство" color="#fff" width="80vw" padding="0" margin="40px 0 40px 0" />
            <Box sx={{ display: 'flex', gap: '20px' }}>
                {centralDepartmentsPersons.map((person, index) => (
                    <CuratorCard key={index} data={person} />
                ))}
            </Box>
        </Box>
    );
}
