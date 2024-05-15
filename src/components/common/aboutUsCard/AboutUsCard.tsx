import { Box, Typography } from '@mui/material';
import { CardAboutUsId } from '../../../types/types';
import { CardAboutUsSize } from '../../../utils/constants';

interface AboutUsCardProps {
    title?: string;
    text?: string;
}

const font = {
    fontWeight: '400',
    fontSize: '24px',
    color: '#fff',
};

const styles = {
    container: { position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.27)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, backdropFilter: 'blur(27px)' },
    textContainer: { padding: '28px' },
    title: { ...font, fontFamily: 'Benzin', textTransform: 'uppercase' },
    text: { ...font, fontSize: '17px', marginTop: '16px' },
};

export default function AboutUsCard({ id, title, text }: AboutUsCardProps & { id: CardAboutUsId }) {
    const { width, height, top, left, zIndex } = CardAboutUsSize[id] || { width: '426px', height: '300px', top: '0', left: '0', zIndex: 0 };
    return (
        <Box sx={{ ...styles.container, width, height, top, left, zIndex }}>
            <Box sx={styles.textContainer}>
                <Typography component="h3" sx={styles.title}>
                    {title}
                </Typography>
                <Typography component="h3" sx={styles.text}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
}
