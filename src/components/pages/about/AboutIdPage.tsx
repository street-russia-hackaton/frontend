import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import ValentinImg from '../../../assets/images/CuratorImg.svg';
import TitleSecondary from '../../common/titleSecondary/titleSecondary';

const data = [
    { label: 'Дата рождения', value: '18.09.1991' },
    { label: 'Начало карьеры', value: '2020 год' },
    { label: 'Место рождения', value: 'Ставрополь' },
    { label: 'Дисциплина', value: 'PARKOUR' },
];

export default function AboutIdPage() {
    return (
        <Box sx={{ height: '100%' }}>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ margin: '0 60px', padding: '0' }}>
                <BreadcrumbsComponent margin="0" />

                <TitleMainPage title="Валентин Работенко" color="#fff" width="100vw" padding="0" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '900px' }}>
                    <CardMedia component="img" src={ValentinImg} sx={{ width: '427px' }} />
                    <Box>
                        <TitleSecondary title=" Краткая информация" margin="0 0 0 16px" />
                        <List sx={{ width: '300px' }}>
                            {data.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item.label} secondary={item.value} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', '&.MuiTypography-root ': { color: '#fff' } }} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </Box>
    );
}
