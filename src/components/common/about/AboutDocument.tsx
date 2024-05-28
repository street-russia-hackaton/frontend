import { Box, Typography } from '@mui/material';
import DocIcon from '../../../assets/images/DocIcon.svg?react';
import DownloadIcon from '../../../assets/images/DownloadIcon.svg?react';
import { CardDocumentAbout } from '../../../types/types';

interface AboutDocument {
    data: CardDocumentAbout;
}

const styles = {
    container: { display: 'flex', alignItems: 'start', gap: '16px', p: { sm: '0' }, m: '0', width: '427px', marginTop: '40px' },
    subtitle: { color: '#fff', letterSpacing: '0.02em', width: '323px', marginBottom: '10px' },
    infoText: { color: '#D2D1D0', fontSize: '16px', p: '8px 0 0', lineHeight: 0.7, display: 'inline' },
};

export default function AboutDocument({ data }: AboutDocument) {
    const { date, title } = data;
    return (
        <Box sx={styles.container}>
            <DocIcon />
            <Box>
                <Typography sx={styles.subtitle}>{title}</Typography>
                <Typography sx={styles.infoText}>Принят {date}</Typography>
            </Box>
            <DownloadIcon style={{ width: '24px', height: '24px' }} />
        </Box>
    );
}
