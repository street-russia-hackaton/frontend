import DisabledIcon from '../../../assets/images/DisabledIcon.svg?react';
import PublicTioletIcon from '../../../assets/images/PublicTioletIcon.svg?react';
import FastfoodIcon from '../../../assets/images/FastfoodIcon.svg?react';
import PawIcon from '../../../assets/images/PawIcon.svg?react';
import { Box, Tooltip } from '@mui/material';

const styles = {
    iconsContainer: { display: 'flex', width: '250px', justifyContent: 'space-between' },
};

export default function InfoIcons() {
    const icons = [
        { icon: <DisabledIcon />, text: 'Доступно для инвалидов' },
        { icon: <PublicTioletIcon />, text: 'Есть общественный туалет' },
        { icon: <FastfoodIcon />, text: 'Фудкорд' },
        { icon: <PawIcon />, text: 'Можно с животными' },
    ];

    return (
        <Box sx={styles.iconsContainer}>
            {icons.map((item, index) => (
                <Tooltip key={index} title={item.text}>
                    <span>{item.icon}</span>
                </Tooltip>
            ))}
        </Box>
    );
}
