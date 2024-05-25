import { Container } from '@mui/material';
import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import Title from '../../common/titleMainPage/titleMainPage';
import { userData } from '../../../utils/constants';
import ProfileCard from '../../common/profile/ProfileCard';

export default function Profile() {
    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Container component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '60px', p: { sm: '0' }, m: '60px auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <Container component="section" sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto 64px', width: '100%', maxWidth: { lg: '1320px' } }}>
                    <Title title="Личный кабинет" background="none" margin="0 0 64px 0" width="100%" height="100%" padding="0" color="#fff" />
                    <ProfileCard data={userData[0]} />
                </Container>
                <Container component="section" sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto 64px', width: '100%', maxWidth: { lg: '1320px' } }}>
                    <Title title="Мероприятия" background="none" margin="0 0 64px 0" width="100%" height="100%" padding="0" color="#fff" />
                </Container>
            </Container>
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
