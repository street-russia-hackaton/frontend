import Background from '../../../../assets/images/background-map-title.svg';
import style from './Map.module.scss';
import { Box, Container, Typography } from '@mui/material';
import MapSvg from '../../../common/map/MapSvg';

const styles = {
    h: {
        fontFamily: 'Benzin',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
};

export default function Map() {
    return (
        <Container component="section" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: { sm: '120px 0 60px' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
            <Typography variant="h2" sx={{ ...styles.h, fontSize: '36px', mb: '20px' }}>
                улицы начинаются с{' '}
                <Box component="span" sx={{ color: '#2E5B97', position: 'relative' }}>
                    <img src={Background} alt='Фон для текста.' className={style.bgImg} />
                    тебя
                </Box>
            </Typography>
            <Typography variant="h3" sx={{ ...styles.h, fontSize: '24px', mb: '32px' }}>
                найди{' '}
                <Box component="span" sx={{ color: '#AA433A' }}>
                    свой
                </Box>{' '}
                город
            </Typography>
            <MapSvg />
        </Container>
    );
}
