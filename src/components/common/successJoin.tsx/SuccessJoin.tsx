import SuccsesJoinImg from '../../../assets/images/succsesJoinImg.svg?react';
import { Box, Typography } from '@mui/material';
import SubmitBtnColor from '../btns/SubmitBtnColor';
import { useNavigate } from 'react-router-dom';

const font = { fontFamily: 'Benzin', fontSize: '24px', textTransform: 'uppercase' };
const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vw', maxWidth: { lg: '1320px' } },
    title: { ...font, marginTop: '32px' },
    text: { ...font, fontSize: '20px', marginTop: '32px' },
};

export default function SuccessJoin() {
    const navigate = useNavigate();

    const handleEventNavigate = () => {
        navigate('/events');
    };

    return (
        <Box sx={styles.container}>
            <SuccsesJoinImg />
            <Typography component="p" sx={styles.title}>
                ваша заявка отправлена
            </Typography>
            <Typography component="p" sx={styles.text}>
                мы рассмотрим твою заявку в течение 5-7 рабочих дней и вернемся с обратной связью на указанную тобой электронную почту.
            </Typography>
            <Typography component="p" sx={styles.text}>
                А пока рекомендуем посмотреть наши мероприятия
            </Typography>
            <SubmitBtnColor title="Посмотреть мероприятия" margin="24px 0 0 0 " onClick={handleEventNavigate} />
        </Box>
    );
}
