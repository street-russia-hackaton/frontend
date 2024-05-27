import { Box, Container, List, ListItem } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import Title from '../../common/titleMainPage/titleMainPage';
import { userData, objectCardData } from '../../../utils/constants';
import ProfileCard from '../../common/profile/ProfileCard';
import ProfileEvents from '../../common/profile/ProfileEvents';
import SubmitBtnWithIcon from '../../common/btns/SubmitBtnWithIcon';
import ProfileNews from '../../common/profile/ProfileNews';
import ObjectCard from '../../common/objects/ObjectCard';

const styles = {
    cardContainer: {
        p: '40px 0 40px 0',
        width: '100%',
        display: 'grid',
        gap: '32px',
    },
    listItem: {
        p: 0,
        width: 'auto',
        display: 'block',
    },
};

export default function Profile() {
    const { state } = useLocation();
    console.log(state);

    const titleEvent = `Мероприятия ${state && state.role === '' ? '' : userData[1].region}`;
    const titleObject = `ОбЪекты ${state && state.role === '' ? '' : userData[1].region}`;
    const titleNew = `Новости ${state && state.role === '' ? '' : userData[1].region}`;
    const isUser = state && state.role === '';
    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '60px', p: { sm: '0' }, m: '60px auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <Container component="section" sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto 64px', width: '100%', maxWidth: { lg: '1320px' } }}>
                    <Title title="Личный кабинет" background="none" margin="0 0 64px 0" width="100%" height="100%" padding="0" color="#fff" />
                    <ProfileCard data={state || userData[1]} />
                </Container>
                <Container component="section" sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto 64px', width: '100%', maxWidth: { lg: '1320px' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: { sm: '0' }, m: '00' }}>
                        <Title title={titleEvent} background="none" margin="0 0 64px 0" width="100%" height="100%" padding="0" color="#fff" />
                        {!isUser && <SubmitBtnWithIcon title="создать Мероприятие" width="360px" />}
                    </Box>
                    <ProfileEvents data={state || userData[1]} />
                </Container>
                {!isUser && (
                    <Container component="section" sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto 64px', width: '100%', maxWidth: { lg: '1320px' } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: { sm: '0' }, m: '00' }}>
                            <Title title={titleObject} background="none" margin="0 0 64px 0" width="100%" height="100%" padding="0" color="#fff" />
                            <SubmitBtnWithIcon title="создать ОбЪект" width="260px" />
                        </Box>
                        <List sx={{ ...styles.cardContainer }}>
                            {objectCardData.slice(2, 5).map((data) => (
                                <ListItem key={data.id ?? 0} sx={{ ...styles.listItem }}>
                                    <ObjectCard data={data} />
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                )}
                {!isUser && (
                    <Container component="section" sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto 64px', width: '100%', maxWidth: { lg: '1320px' } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: { sm: '0' }, m: '00' }}>
                            <Title title={titleNew} background="none" margin="0 0 64px 0" width="100%" height="100%" padding="0" color="#fff" />
                            <SubmitBtnWithIcon title="создать Новость" width="280px" />
                        </Box>
                        <ProfileNews />
                    </Container>
                )}
            </Box>
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
