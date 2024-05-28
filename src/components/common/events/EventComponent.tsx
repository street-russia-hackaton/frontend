import { Box, Container, Typography, CardMedia } from '@mui/material';
import Title from '../titleMainPage/titleMainPage';
import RegisterEventPersonIcon from '../../../assets/images/RegisterEventPersonIcon.svg?react';
import TitleSecondary from '../titleSecondary/titleSecondary';
import ShareWithFriends from '../shareWithFriends/ShareWithFriends';
import CuratorCard from '../curatorCard/CuratorCard';
import { curators } from '../../../utils/constants';
import TitleMainPage from '../titleMainPage/titleMainPage';
import SubmitBtn from '../btns/SubmitBtn';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';
import HeartIcon from '../../../assets/images/HeartIcon.svg?react';
import EventIdInfo from './EventIdInfo';
import BackgroundImg from '../../../assets/images/background-newsgrid.svg?react';
import Partners from '../partners/Partners';
import { CardEvent } from '../../../types/types';

const styles = {
    text: { fontFamily: 'Bahnschrift', fontWeight: '400', lineHeight: 1.5, color: '#fff', p: 0 },
    subtitle: { fontSize: '20px', letterSpacing: '0.02em' },
    small: { fontSize: '16px' },
    tag: { background: '#AA433A', p: '4px 12px' },
    arrow: { paddingRight: '8px' },
};

export default function EventComponent({ selectedEvent }: { selectedEvent: CardEvent }) {
    return (
        <Container component="section" sx={{ p: { sm: '0 ' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', maxWidth: { lg: '1320px' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Title title={selectedEvent.title} background="none" margin="0 0 12px 0" width="100%" height="100%" padding="0" color="#fff" />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', p: { sm: '0' }, m: '0 0 64px 0' }}>
                            <Typography sx={{ ...styles.text, ...styles.small, ...styles.tag }}>{selectedEvent.tag}</Typography>
                            <Typography sx={{ ...styles.text, ...styles.small, ...styles.tag, background: '#fff', color: '#222' }}>{selectedEvent.city}</Typography>
                            <Typography sx={{ ...styles.text, ...styles.small, display: 'flex', alignItems: 'center' }}>
                                <RegisterEventPersonIcon style={styles.arrow} />
                                {selectedEvent.register} зарегистрировано
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <SubmitBtnWithIcon icon={<HeartIcon />} title="В избранное" width="190px" />
                        <SubmitBtn title="Зарегистрироваться" width="240px" margin="0 0 0 17px" />
                    </Box>
                </Box>
                <CardMedia component="img" alt="Изображение" height="435" image={selectedEvent.imageFullSrc} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: { sm: '0' }, m: '64px 0' }}>
                    <Box>
                        <TitleSecondary title="О мероприятии" margin="0  0 32px  0" />
                        <Typography variant="body2" sx={{ ...styles.text, ...styles.subtitle, maxWidth: '762px' }}>
                            {selectedEvent.aboutTitle}
                        </Typography>
                        <Typography variant="body2" sx={{ ...styles.text, ...styles.subtitle, maxWidth: '762px' }}>
                            {selectedEvent.aboutSubtitle}
                        </Typography>
                        {selectedEvent && selectedEvent.aboutText && (
                            <ul>
                                {selectedEvent.aboutText.split('\n').map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                        <Typography variant="body2" sx={{ ...styles.text, ...styles.subtitle, maxWidth: '762px' }}>
                            {selectedEvent.aboutInfo}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0' }}>
                        <TitleSecondary title="Инфо" />
                        <EventIdInfo address={selectedEvent.address} timeWeek={selectedEvent.timeWeek} timeDayOff={selectedEvent.timeDayOff} date={selectedEvent.date} />
                        <Box sx={{ p: { sm: '0' }, m: '64px 0 0' }}>
                            <ShareWithFriends title="Расскажи друзьям" linkVk="#" linkTg="#" />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <TitleMainPage title="Кураторы" color="#fff" padding="0" />
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <CuratorCard key={0} data={curators[0]} />
                            <CuratorCard key={1} data={curators[1]} />
                        </Box>
                    </Box>
                    <BackgroundImg />
                </Box>
                <Partners />
            </Box>
        </Container>
    );
}
