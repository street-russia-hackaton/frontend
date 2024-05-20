import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ArrowRightWithoutRound from '../../../assets/images/ArrowRightWithoutRound.svg?react';

const styles = {
    overflow: { display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' },
    h4: {
        fontFamily: 'Benzin',
        fontSize: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        m: '16px 0 8px',
    },
    text: { fontFamily: 'Bahnschrift', fontWeight: '400', lineHeight: 1.5, color: '#fff', p: 0 },
    subtitle: { fontSize: '20px', letterSpacing: '0.02em' },
    small: { fontSize: '16px' },
    duration: { color: '#D2D1D0' },
    tag: { background: '#AA433A', p: '4px 12px' },
    arrow: { paddingLeft: '8px' },
};

interface DataProps {
    imageSrc: string;
    tag: string;
    date: string;
    duration: string;
    views: string;
    title: string;
    subtitle: string;
}

interface NewsProps {
    data: DataProps;
    onClick: () => void;
}

export default function NewsCard({ data, onClick }: NewsProps) {
    return (
        <Card sx={{ position: 'relative', maxWidth: 426, height: 614, display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255,255,255, 0.27)', backdropFilter: 'blur(10px)' }}>
            <Typography sx={{ ...styles.text, ...styles.small, ...styles.tag, position: 'absolute', top: '20px', left: '20px' }}>{data.tag}</Typography>
            <CardMedia component="img" alt="Изображение новости." height="300" image={data.imageSrc} />
            <CardContent sx={{ p: '24px', height: 266, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '16px', p: { sm: '0' }, m: '0' }}>
                    <Typography sx={{ ...styles.text, ...styles.small }}>{data.date}</Typography>
                    <Typography sx={{ ...styles.text, ...styles.small, ...styles.duration }}>{data.duration} min read</Typography>
                </Box>
                <Typography variant="h4" sx={{ ...styles.overflow, ...styles.text, ...styles.h4 }}>
                    {data.title}
                </Typography>
                <Typography variant="body2" sx={{ ...styles.overflow, ...styles.text, ...styles.subtitle }}>
                    {data.subtitle}
                </Typography>
                <CardActions onClick={onClick} sx={{ p: 0, marginTop: 'auto' }}>
                        <Typography component="p" sx={{ ...styles.text, ...styles.small, textTransform: 'capitalize', display: 'flex', alignItems: 'center'}}>
                            Подробнее <ArrowRightWithoutRound style={styles.arrow} />
                        </Typography>
                </CardActions>
            </CardContent>
        </Card>
    );
}
