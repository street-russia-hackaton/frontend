import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ArrowRightWithoutRound from '../../../assets/images/ArrowRightWithoutRound.svg?react';
import { CardPartnerAbout } from '../../../types/types';

interface AboutPartnerCardProps {
    data: CardPartnerAbout;
    onClick: () => void;
    cardStyle?: React.CSSProperties;
}

const styles = {
    image: { width: '240px' },
    cardContainer: { display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', marginLeft: '20px', boxShadow: 'none', margin: '0' },
    cardContent: { padding: '0' },
    title: { paddingTop: '16px', color: '#fff', textTransform: 'uppercase', fontSize: '20px', width: '260px', fontFamily: 'Benzin' },
    text: {
        paddingTop: '8px',
        color: '#fff',
        fontSize: '16px',
        marginTop: '24px',
    },
    linkText: { color: '#fff', display: 'flex', alignItems: 'center', margin: '20px 0 0 0' },
    arrow: { paddingLeft: '8px' },
};

export default function AboutPartnerCard({ data, onClick, cardStyle }: AboutPartnerCardProps) {
    const { image, title, text } = data;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', ...cardStyle }}>
            <CardMedia sx={styles.image} component="img" src={image} onClick={onClick} />
            <Card sx={styles.cardContainer}>
                <CardContent sx={styles.cardContent}>
                    <Typography component="p" sx={styles.title}>
                        {title}
                    </Typography>
                    <Typography component="p" sx={styles.text}>
                        {text}
                    </Typography>
                </CardContent>
                <CardContent sx={{ padding: '0' }}>
                    <Box
                        onClick={() => {
                            onClick();
                        }}
                    >
                        <Typography component="p" sx={styles.linkText}>
                            Подробнее <ArrowRightWithoutRound style={styles.arrow} />
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
