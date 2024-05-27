import { Card, CardContent, CardMedia, Typography, Box, Link } from '@mui/material';
import { CardObject } from '../../../types/types';

import LocationIcon from '../../../assets/images/LocationIcon.svg?react';
import LocationWhiteIcon from '../../../assets/images/LocationWhiteIcon.svg?react';
import TimeWhiteIcon from '../../../assets/images/TimeWhiteIcon.svg?react';
import VkIcon from '../../../assets/images/VkIconWithoutBackground.svg?react';

interface ObjectCardProps {
    data: CardObject;
    cardStyle?: React.CSSProperties;
}

const font = {
    fontWeight: '400',
    color: '#fff',
    fontSize: '20px',
};

const styles = {
    mainContainer: { height: '100%', display: 'flex', alignItems: 'center' },
    image: { height: '380px', width: '651px' },
    cardContainer: { borderRadius: '0', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255,255,255,.2)', paddingLeft: '20px', justifyContent: 'space-between', boxShadow: 'none', width: '100%', height: '380px' },
    cardContent: { padding: '10px 0 0' },
    textContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', maxWidth: 'fit-content', padding: '6px 12px 6px' },
    icon: { paddingRight: '6px' },
    subtitle: { ...font, letterSpacing: '0.02em' },
    title: { paddingTop: '16px', color: '#fff', textTransform: 'uppercase', fontSize: '20px', width: '400px', fontFamily: 'Benzin' },
    container: { display: 'flex', alignItems: 'center', gap: '16px', p: { sm: '0' }, m: '0' },
    infoText: { ...font, fontSize: '16px', p: '8px 0 0', lineHeight: 0.7, display: 'inline' },
    arrow: { paddingRight: '8px' },
};

export default function ObjectCard({ data, cardStyle }: ObjectCardProps) {
    const { image, city, tag, secondTag, title, address, timeWeek, timeDayOff, videoSrc } = data;

    return (
        <Box sx={{ ...styles.mainContainer, ...cardStyle }}>
            <Box>{image ? <CardMedia sx={styles.image} component="img" src={image} alt={title} /> : videoSrc && <iframe width="651" height="380" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ margin: '8px 0 0 0' }}></iframe>}</Box>
            <Card sx={styles.cardContainer}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ ...styles.textContainer, marginRight: '12px' }}>
                            <LocationIcon style={styles.icon} />
                            <Typography component="p" sx={{ ...styles.subtitle, color: '#222' }}>
                                {city}
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.textContainer, backgroundColor: '#AA433A', marginRight: '12px' }}>
                            <Typography component="p" sx={{ ...styles.subtitle, color: '#fff' }}>
                                {tag}
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.textContainer, backgroundColor: '#AA433A' }}>
                            <Typography component="p" sx={{ ...styles.subtitle, color: '#fff' }}>
                                {secondTag}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography component="p" sx={styles.title}>
                        {title}
                    </Typography>
                </CardContent>
                <Box sx={{ margin: '10px 0 0 0' }}>
                    <Box sx={styles.container}>
                        <LocationWhiteIcon />
                        <Box>
                            <Typography sx={{ ...styles.subtitle }}>Адрес</Typography>
                            <Link href="#" sx={{ ...styles.infoText, borderBottom: '.5px solid #fff' }}>
                                {address}
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={styles.container}>
                        <TimeWhiteIcon />
                        <Box sx={{ p: { sm: '0' }, m: '24px 0' }}>
                            <Typography sx={{ ...styles.subtitle }}>Время работы</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ ...styles.infoText, marginBottom: '3px' }}>{timeWeek}</Typography>
                                <Typography sx={styles.infoText}>{timeDayOff}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.container}>
                        <VkIcon />
                        <Box sx={{ p: { sm: '0' }, m: '24px 0' }}>
                            <Link href="#" sx={{ ...styles.subtitle, borderBottom: '.5px solid #fff' }}>
                                Мероприятие в соцсетях
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
