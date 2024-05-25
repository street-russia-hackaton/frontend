import style from './EventCard.module.scss';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ArrowRightWithoutRound from '../../../../assets/images/ArrowRightWithoutRound.svg?react';
import LocationIcon from '../../../../assets/images/LocationIcon.svg?react';
import { CardEvent } from '../../../../types/types';

interface EventCardProps {
    data: CardEvent;
    onClick: () => void;
    cardStyle?: React.CSSProperties;
}

const styles = {
    container: { display: 'flex', maxWidth: '630px', marginTop: '64px', position: 'relative' },
    image: { height: '100%', width: '315px' },
    cardContainer: { display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', marginLeft: '20px', justifyContent: 'space-between', boxShadow: 'none' },
    cardContent: { padding: '0' },
    textContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', maxWidth: 'fit-content', padding: '6px 12px 6px' },
    icon: { paddingRight: '6px' },
    subtitle: { paddingTop: '2px', whiteSpace: 'nowrap' },
    date: { paddingTop: '8px', color: '#fff' },
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
    linkText: { color: '#fff', display: 'flex', alignItems: 'center' },
    arrow: { paddingLeft: '8px' },
    eventOffText: { backgroundColor: '#fff', width: '230px', height: '30px', color: '#D2D1D0', position: 'absolute', margin: '16px', textAlign: 'center' },
};

export default function EventCard({ data, onClick, cardStyle }: EventCardProps) {
    const { image, city, tag, date, title, text, height } = data;

    return (
        <Box className={style.eventCard} sx={{ height: height ? height : '100%', ...cardStyle }}>
            <CardMedia sx={styles.image} component="img" src={image} onClick={onClick} />
            {data.eventOff && (
                <Typography component="p" sx={styles.eventOffText}>
                    Мероприятие завершено
                </Typography>
            )}
            <Card sx={styles.cardContainer}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={{ display: 'flex', flexDirection: tag.length <= 10 ? 'row' : 'column' }}>
                        <Box sx={{ ...styles.textContainer, marginRight: '12px' }}>
                            <LocationIcon style={styles.icon} />
                            <Typography component="p" sx={styles.subtitle}>
                                {city}
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.textContainer, backgroundColor: '#AA433A', marginTop: tag.length <= 10 ? '0' : '12px' }}>
                            <Typography component="p" sx={{ ...styles.subtitle, color: '#fff' }}>
                                {city}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography component="p" sx={styles.date}>
                        {date}
                    </Typography>
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
