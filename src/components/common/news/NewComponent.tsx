import { Box, Container, Typography, CardMedia } from '@mui/material';
import Title from '../titleMainPage/titleMainPage';
import IconViews from '../../../assets/images/IconViews.svg?react';
import IconRead from '../../../assets/images/IconRead.svg?react';
import IconCalendar from '../../../assets/images/IconCalendar.svg?react';
import TitleSecondary from '../titleSecondary/titleSecondary';
import ShareWithFriends from '../shareWithFriends/ShareWithFriends';
import CuratorCard from '../curatorCard/CuratorCard';
import { curators } from '../../../utils/constants';
import Partners from '../partners/Partners';

const styles = {
    text: { fontFamily: 'Bahnschrift', fontWeight: '400', lineHeight: 1.5, color: '#fff', p: 0 },
    subtitle: { fontSize: '20px', letterSpacing: '0.02em' },
    small: { fontSize: '16px' },
    tag: { background: '#AA433A', p: '4px 12px' },
    arrow: { paddingRight: '8px' },
};

interface DataProps {
    id: number;
    tag: string;
    city: string;
    date: string;
    duration: string;
    views: string;
    title: string;
    subtitle: string;
    text: JSX.Element;
    imageSrc: string;
    imageFullSrc: string;
}

interface NewsProps {
    data: DataProps;
}

export default function NewComponent({ data }: NewsProps) {
    return (
        <Container component="section" sx={{ p: { sm: '0 0 60px' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <Title title={data.title} background="none" margin="0 0 12px 0" width="100%" height="100%" padding="0" color="#fff" />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', p: { sm: '0' }, m: '0 0 64px 0' }}>
                    <Typography sx={{ ...styles.text, ...styles.small, ...styles.tag }}>{data.tag}</Typography>
                    <Typography sx={{ ...styles.text, ...styles.small }}>
                        <IconRead style={styles.arrow} /> {data.duration} min read
                    </Typography>
                    <Typography sx={{ ...styles.text, ...styles.small }}>
                        <IconViews style={styles.arrow} />
                        {data.views} просмотров
                    </Typography>
                </Box>
                <CardMedia component="img" alt="Изображение новости." height="435" image={data.imageFullSrc}></CardMedia>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: { sm: '0' }, m: '64px 0' }}>
                    <Typography variant="body2" sx={{ ...styles.text, ...styles.subtitle, maxWidth: '762px' }}>
                        {data.text}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0' }}>
                        <TitleSecondary title="Инфо" />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', p: { sm: '0' }, m: '0' }}>
                            <IconCalendar />
                            <Box sx={{ p: { sm: '0' }, m: '24px 0' }}>
                                <Typography sx={{ ...styles.text, ...styles.subtitle }}>Дата публикации</Typography>
                                <Typography sx={{ ...styles.text, ...styles.small, borderBottom: '0.5px solid #fff', p: '8px 0 0', lineHeight: 0.7, display: 'inline' }}>{data.date}</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ ...styles.text, ...styles.subtitle, marginBottom: '16px' }}>Автор публикации</Typography>
                        <CuratorCard data={curators[0]} />
                        <Box sx={{ p: { sm: '0' }, m: '64px 0 0' }}>
                            <ShareWithFriends title="Расскажи друзьям" linkVk="#" linkTg="#" />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: { sm: '0' }, m: '0' }}>
                    <Partners />
                </Box>
            </Box>
        </Container>
    );
}
