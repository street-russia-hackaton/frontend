import { Box, Typography } from '@mui/material';

interface AboutUsCardProps {
    title?: string;
    text?: string;
    width?: string;
    height?: string;
}

const font = {
    fontWeight: '400',
    fontSize: '24px',
    color: '#fff',
};

const styles = {
    container: { backgroundColor: 'rgba(255, 255, 255, 0.27)', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    textContainer: { padding: '28px' },
    title: { ...font, fontFamily: 'Benzin', textTransform: 'uppercase' },
    text: { ...font, fontSize: '17px', marginTop: '16px' },
};

export default function AboutUsCard({ title, text, width, height }: AboutUsCardProps) {
    return (
        <Box sx={{ ...styles.container, width: width ? width : '426px', height: height ? height : '300px' }}>
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
