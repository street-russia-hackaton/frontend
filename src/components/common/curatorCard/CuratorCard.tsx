import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import ArrowRightWithoutRound from '../../../assets/images/ArrowRightWithoutRound.svg?react';
import { useNavigate } from 'react-router-dom';
import IconVk from '../../../assets/images/IconVk.svg?react';

const styles = {
    overflow: { display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' },
    h4: {
        fontFamily: 'Benzin',
        fontSize: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        m: '24px 0 8px',
    },
    text: { fontFamily: 'Bahnschrift', fontWeight: '400', lineHeight: 1.5, color: '#fff', p: 0 },
    subtitle: { fontSize: '20px', letterSpacing: '0.02em' },
    small: { fontSize: '16px' },
    position: { color: '#F3F3F3' },
    tag: { background: '#AA433A', p: '4px 12px' },
    arrow: { paddingLeft: '8px' },
};

interface DataProps {
    id: number;
    imageSrc: string;
    name: string;
    text: string | JSX.Element;
    link: string;
    position?: string;
}

interface CuratorProps {
    data: DataProps;
}

export default function CuratorCard({ data }: CuratorProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/about/:id');
    };

    return (
        <Card sx={{ position: 'relative', width: 426, height: 660, display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255,255,255, 0.27)', backdropFilter: 'blur(10px)' }}>
            <CardMedia component="img" alt="Изображение новости." height="300" image={data.imageSrc} />
            <CardContent sx={{ p: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" sx={{ ...styles.overflow, ...styles.text, ...styles.h4, WebkitLineClamp: '3' }}>
                    {data.name}
                </Typography>
                <Typography variant="body2" sx={{ ...styles.overflow, ...styles.text, ...styles.small, ...styles.position, marginBottom: '16px', WebkitLineClamp: '2' }}>
                    {data.position}
                </Typography>
                <Typography variant="body2" sx={{ ...styles.overflow, ...styles.text, ...styles.subtitle, WebkitLineClamp: '4' }}>
                    {data.text}
                </Typography>
                <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <Link href={data.link} sx={{ height: '30px' }}>
                        <IconVk />
                    </Link>
                    <CardActions onClick={() => handleCardClick()} sx={{ p: 0 }}>
                        <Typography component="p" sx={{ ...styles.text, ...styles.small, textTransform: 'capitalize', display: 'flex', alignItems: 'center' }}>
                            Подробнее <ArrowRightWithoutRound style={styles.arrow} />
                        </Typography>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    );
}
