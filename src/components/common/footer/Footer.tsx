import { Box, Container, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo-main.png';
import vkIcon from '../../../assets/images/vk-icon.svg';
import youTubeIcon from '../../../assets/images/youtube-icon.svg';
import style from './Footer.module.scss';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';

//TODO: иконки сайтов типизировать, настроить переход по ссылкам сайта и на карту,
// реализовать функционал формы рассылки

interface FooterProps {
    backgroundColor?: string;
    backdropFilter?: string;
}

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    icon?: string;
};

const privacy = 'https://streetrussia.ru/static/files/privacy.pdf';

const contacts = [
    { id: 1, item: 'ОГРН: 1217700519101' },
    { id: 2, item: 'ИНН: 2636219592' },
    { id: 3, item: 'info@streetrussia.ru' },
];
const addresses = [
    { id: 1, item: 'г. Москва, ул. Новосибирская, строение 3' },
    { id: 2, item: 'г. Москва, ул. Новосибирская, строение 3' },
    { id: 3, item: 'г. Москва, ул. Новосибирская, строение 3' },
];
const sites = [
    { id: 1, icon: '../../../assets/images/vk-icon.svg', item: 'Youtube' },
    { id: 2, icon: { vkIcon }, item: 'Вконтакте' },
];

const styles = {
    h3: {
        fontFamily: 'Benzin',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#fff',
        m: '0 0 8px',
    },
    text: {
        fontFamily: 'Bahnschrift',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#fff',
        m: 0,
    },
    link: {
        borderBottom: '0.5px solid #fff',
        m: '0 0 8px',
        p: 0,
        lineHeight: 0.7,
        display: 'inline',
    },
    list: {
        height: 56,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        p: 0,
        width: 203,
    },
    listItem: {
        p: 0,
        width: 'auto',
        display: 'block',
    },
    input: {
        height: '54px',
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
        maxWidth: 331,
    },
};

export default function Footer({ backgroundColor, backdropFilter }: FooterProps, { icon }: ImageProps) {
    const handleSubmit = () => {
        //TODO: подписка
    };

    const handleShowMap = () => {
        //TODO: переход на карты
    };

    return (
        <Container component="footer" sx={{ width: '100%', maxWidth: { lg: '100%' }, height: '567px', p: { xs: 0, lg: 0 }, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'none', transition: 'none', backgroundColor: '#222' }}>
            <Box sx={{ width: '100%', backgroundColor: backgroundColor || '#222', backdropFilter: backdropFilter || 'none' }}>
                <Box sx={{ margin: '0 auto', p: '60px 0', width: '91%', height: '100%', maxWidth: { lg: 1312 }, display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ maxWidth: 532, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <img className={style.logo} src={Logo} alt="Логотип." />
                            <Typography sx={{ ...styles.text }}>Подпишись на рассылку, чтобы получать все самые актуальные новости об уличном спорте и искусстве.</Typography>
                            <Box component="form" noValidate sx={{ display: 'flex', gap: '16px' }}>
                                <TextField placeholder="Введите email" fullWidth sx={styles.input} />
                                <SubmitBtnWithIcon width="185px" title="Подписаться" height="54" fontSize="20px" disabled={false} onClick={handleSubmit} />
                            </Box>
                            <Typography sx={{ ...styles.text }}>Подписываясь, вы соглашаетесь с нашей Политикой конфиденциальности и даете согласие на получение обновлений от нашей компании.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <List sx={{ ...styles.list }}>
                                <Typography variant="h3" sx={{ ...styles.h3 }}>
                                    Контакты
                                </Typography>
                                {contacts.map(({ id, item }) => (
                                    <ListItem key={id} sx={{ ...styles.listItem }}>
                                        <Typography sx={{ ...styles.text }}>{item}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <List sx={{ ...styles.list, width: 210 }}>
                                <Typography variant="h3" sx={{ ...styles.h3 }}>
                                    Адреса
                                </Typography>
                                {addresses.map(({ id, item }) => (
                                    <ListItem key={id} sx={{ ...styles.listItem, '&:last-of-type': { marginBottom: '8px' } }}>
                                        <Typography sx={{ ...styles.text, fontSize: 16 }}>{item}</Typography>
                                    </ListItem>
                                ))}
                                <SubmitBtnWithIcon width="100%" title="Посмотреть на карте" height="40" fontSize="16px" disabled={false} onClick={handleShowMap} />
                            </List>
                            <List sx={{ ...styles.list }}>
                                <Typography variant="h3" sx={{ ...styles.h3 }}>
                                    Соц. сети
                                </Typography>
                                {sites.map(({ id, icon, item }) => (
                                    <ListItem key={id} sx={{ ...styles.listItem }}>
                                        <img className={style.icon} src={youTubeIcon} alt="Иконка приложения." />
                                        <Typography sx={{ ...styles.text, ...styles.link }}>{item}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                    <List sx={{ height: 56, display: 'flex', justifyContent: 'end', alignItems: 'end', gap: '24px', borderTop: '1px solid #fff', p: 0 }}>
                        <ListItem sx={{ ...styles.listItem, marginRight: 'auto' }}>
                            <Typography sx={{ ...styles.text }}>2021 - 2024 «Улицы России»</Typography>
                        </ListItem>
                        <ListItem sx={{ ...styles.listItem }}>
                            <ListItemButton component={RouterLink} to="/main" target="_blank" sx={{ ...styles.text, ...styles.link, display: 'inline', whiteSpace: 'nowrap' }}>
                                Устав ОООУКС Улицы России
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ ...styles.listItem }}>
                            <ListItemButton component={RouterLink} to="/main" target="_blank" sx={{ ...styles.text, ...styles.link, display: 'inline', whiteSpace: 'nowrap' }}>
                                ОГРН юридического лица
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ ...styles.listItem }}>
                            <ListItemButton component="a" target="_blank" href={privacy} sx={{ ...styles.text, ...styles.link, whiteSpace: 'nowrap' }}>
                                Пользовательское соглашение
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Container>
    );
}
