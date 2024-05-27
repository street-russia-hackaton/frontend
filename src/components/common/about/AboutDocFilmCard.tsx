import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ArrowRightWithoutRound from '../../../assets/images/ArrowRightWithoutRound.svg?react';
import { CardDocFilmAbout } from '../../../types/types';

interface EventCardProps {
    data: CardDocFilmAbout;
    onClick: () => void;
    cardStyle?: React.CSSProperties;
}

const styles = {
    image: { height: '100%', width: '315px' },
    cardContainer: { display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', marginLeft: '20px', boxShadow: 'none' },
    cardContent: { padding: '0' },
    textContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', maxWidth: 'fit-content', padding: '6px 12px 6px' },
    subtitle: { paddingTop: '2px', whiteSpace: 'nowrap' },
    title: { paddingTop: '16px', color: '#fff', textTransform: 'uppercase', fontSize: '20px', width: '260px', fontFamily: 'Benzin' },
    text: {
        paddingTop: '8px',
        color: '#fff',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        marginTop: '0',
    },
    linkText: { color: '#fff', display: 'flex', alignItems: 'center', margin: '20px 0 0 0' },
    arrow: { paddingLeft: '8px' },
};

export default function AboutDocFilmCard({ data, onClick, cardStyle }: EventCardProps) {
    const { image, tag, title, text } = data;

    return (
        <Box sx={{ display: 'flex', ...cardStyle }}>
            <CardMedia sx={styles.image} component="img" src={image} onClick={onClick} />
            <Card sx={styles.cardContainer}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ ...styles.textContainer, backgroundColor: '#AA433A' }}>
                            <Typography component="p" sx={{ ...styles.subtitle, color: '#fff' }}>
                                {tag}
                            </Typography>
                        </Box>
                    </Box>
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
