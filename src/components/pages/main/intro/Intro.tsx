import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Background from '../../../../assets/images/main-page-background.png';
import Logo from '../../../../assets/images/logo-main.png';
import SubmitButton from '../../../btns/SubmitBtn';

//TODO: переход по якорной ссылке вступить, стиль бегущих строк

export default function Intro() {
    const handleClick = () => {
        // TODO: click
    };

    return (
        <>
            <Container sx={{position: 'relative', marginBottom: '18px', background: `no-repeat center url(${Background})`, backgroundSize: 'cover',  height: '852px', objectFit: 'cover', maxWidth: { lg: '100%' }, p: { sm: 0 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1350px', gap: '183px', alignItems: 'end', margin: '0 auto', p: '173px 112px 0 0', boxSizing: 'border-box' }}>
                    <Box sx={{alignSelf: 'start'}}>
                        <img src={Logo} alt="Логотип." />
                        <Typography sx={{ fontFamily: 'Benzin', fontSize: '20px', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0.02em', color: '#fff', pt: '10px' }}>Общероссийская общественная организация</Typography>
                    </Box>
                    <SubmitButton width="203px" title="Вступить" height="54px" fontSize="20px" fontWeigth="400" backgroundColor="#2E5B97" disabled={false} color="#fff" border="none" hoverBackgroundColor="#F2F3F5" focusBackgroundColor="#F2F3F5" textTransform="uppercase" lineHeight="1.5" onClick={handleClick} />
                </Box>
            </Container>
        </>
    );
}
