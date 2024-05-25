import { Box } from '@mui/material';
import TitleSecondary from '../titleSecondary/titleSecondary';
import RosTeensIcon from '../../../assets/images/RosTeensIcon.svg?react';
import SKFUIcon from '../../../assets/images/SKFUIcon.svg?react';
import PresidentGrandFond from '../../../assets/images/PresidentGrandFond.svg?react';
import VladimirPotaninFond from '../../../assets/images/VladimirPotaninFond.svg?react';
import ASSK from '../../../assets/images/ASSK.svg?react';

const styles = {
    container: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
};

export default function Partners() {
    return (
        <Box sx={{ margin: '64px 0 0 0' }}>
            <TitleSecondary title="партнёры" margin="0 0 40px" />
            <Box sx={styles.container}>
                <RosTeensIcon />
                <SKFUIcon />
                <PresidentGrandFond />
                <VladimirPotaninFond />
                <ASSK />
                <RosTeensIcon />
                <SKFUIcon />
                <PresidentGrandFond />
            </Box>
        </Box>
    );
}
