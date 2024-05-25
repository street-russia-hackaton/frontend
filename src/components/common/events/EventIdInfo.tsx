import { Box, Link, Typography } from '@mui/material';
import IconCalendar from '../../../assets/images/IconCalendar.svg?react';
import LocationIcon from '../../../assets/images/LocationWhiteIcon.svg?react';
import TimeWhiteIcon from '../../../assets/images/TimeWhiteIcon.svg?react';
import VkIcon from '../../../assets/images/VkIconWithoutBackground.svg?react';

const font = {
    fontFamily: 'Bahnschrift',
    fontWeight: '400',
    color: '#fff',
    fontSize: '20px',
};

const styles = {
    container: { display: 'flex', alignItems: 'center', gap: '16px', p: { sm: '0' }, m: '0' },
    text: { ...font },
    subtitle: { ...font, letterSpacing: '0.02em' },
    infoText: { ...font, fontSize: '16px', p: '8px 0 0', lineHeight: 0.7, display: 'inline' },
    tag: { background: '#AA433A', p: '4px 12px' },
    arrow: { paddingRight: '8px' },
};

export default function EventIdInfo() {
    return (
        <Box>
            <Box></Box>
            <Box sx={styles.container}>
                <IconCalendar />
                <Box sx={{ p: { sm: '0' }, m: '24px 0' }}>
                    <Typography sx={{ ...styles.text, ...styles.subtitle }}>Дата проведения</Typography>
                    <Typography sx={styles.infoText}>22.22.2222</Typography>
                </Box>
            </Box>
            <Box sx={styles.container}>
                <LocationIcon />
                <Box>
                    <Typography sx={{ ...styles.text, ...styles.subtitle }}>Адрес</Typography>
                    <Link href="#" sx={{ ...styles.infoText, borderBottom: '.5px solid #fff' }}>
                        ул. Лужники, 24; метро Воробьевы горы
                    </Link>
                </Box>
            </Box>
            <Box sx={styles.container}>
                <TimeWhiteIcon />
                <Box sx={{ p: { sm: '0' }, m: '24px 0' }}>
                    <Typography sx={{ ...styles.text, ...styles.subtitle }}>Время работы</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ ...styles.infoText, marginBottom: '3px' }}>ПН-ПТ 10.00-21.00 </Typography>
                        <Typography sx={styles.infoText}>СБ-ВС 11.00-22.00</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.container}>
                <VkIcon />
                <Box sx={{ p: { sm: '0' }, m: '24px 0' }}>
                    <Link href="#" sx={{ ...styles.text, ...styles.subtitle, borderBottom: '.5px solid #fff' }}>
                        Мероприятие в соцсетях
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
