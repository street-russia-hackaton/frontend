import { Box, Container, Typography } from '@mui/material';
import style from './Intro.module.scss';
import Background from '../../../../assets/images/main-page-background.png';
import Logo from '../../../../assets/images/logo-main.png';
import SubmitButton from '../../../common/btns/SubmitBtnColor';
import Video from '../../../../assets/video/video-main.mp4';
import { useState } from 'react';
import PopupJoin from '../../../common/popups/PopupJoin';

export default function Intro() {
    const [openJoinPopup, setOpenJoinPopup] = useState(false);

    const handleOpenJoinPopup = () => {
        setOpenJoinPopup(true);
    };
    const handleClosePopup = () => {
        setOpenJoinPopup(false);
    };

    return (
        <Container sx={{ p: { sm: '0' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box component="section" sx={{ position: 'relative', zIndex: '0', marginBottom: '18px', background: `no-repeat center url(${Background})`, backgroundSize: 'cover', height: '852px', objectFit: 'cover', maxWidth: { lg: '100%' }, p: { sm: 0 } }}>
                <video className={style.video} poster={Background} autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                </video>

                <Box sx={{position: 'relative', display: 'flex', zIndex: '0', flexDirection: 'column', maxWidth: '1350px', gap: '183px', alignItems: 'end', margin: '0 auto', p: '173px 112px 0 0', boxSizing: 'border-box' }}>
                    <Box sx={{ alignSelf: 'start' }}>
                        <img src={Logo} alt="Логотип." />
                        <Typography sx={{ fontFamily: 'Benzin', fontSize: '20px', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0.02em', color: '#fff', pt: '10px' }}>Общероссийская общественная организация</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 250, right: 172 }}>
                <SubmitButton width="203px" title="Вступить" height="54px" fontSize="20px" backgroundColor="#2E5B97" disabled={false} onClick={handleOpenJoinPopup} />
                <PopupJoin open={openJoinPopup} onClose={handleClosePopup} onClick={handleClosePopup} />
            </Box>
        </Container>
    );
}
