import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CardUser } from '../../../types/types';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';
import PopupJoin from '../popups/PopupJoin';
import ProfileForm from './ProfileForm';
import ProfileAvatar from '../../../assets/images/ProfileAvatar.svg?react';

const styles = {
    overflow: { display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' },
    h4: {
        fontFamily: 'Benzin',
        fontSize: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        m: '0',
    },
    text: { fontFamily: 'Bahnschrift', fontWeight: '400', lineHeight: 1.5, color: '#fff', p: 0 },
    subtitle: { fontSize: '20px', letterSpacing: '0.02em' },
    small: { fontSize: '16px' },
    duration: { color: '#D2D1D0' },
    tag: { background: '#AA433A', p: '4px 12px' },
    arrow: { paddingLeft: '8px' },
};

interface userCardProps {
    data: CardUser;
    cardStyle?: React.CSSProperties;
}

export default function ProfileCard({ data }: userCardProps) {
    const [openJoinPopup, setOpenJoinPopup] = useState(false);

    useEffect(() => {
        console.log(data);
    }, []);

    const handleOpenJoinPopup = () => {
        setOpenJoinPopup(true);
    };

    const handleClosePopup = () => {
        setOpenJoinPopup(false);
    };

    const handleLoadAvatar = () => {

    };

    return (
        <Card sx={{ boxShadow: 'none', position: 'relative', background: '#222', width: '100%', height: 400, display: 'flex', justifyContent: 'space-between', gap: '22px' }}>
            <Box sx={{ display: 'flex', gap: '65px', p: { sm: '0' }, m: '0' }}>
                <Box sx={{ position: 'relative', width: '427px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#D2D1D0', p: { sm: '0' }, m: '0' }}>
                    {data.imageSrc !== '' && <CardMedia component="img" alt="Аватар пользователя." sx={{ width: '427px' }} image={data.imageSrc} />}
                    {data.imageSrc === '' && <ProfileAvatar />}
                    <Box sx={{ position: 'absolute', bottom: '60px', right: '38px', width: '349px', p: { sm: '0' }, m: '0' }}>
                    <SubmitBtnWithIcon title="Загрузить фото профиля" width="349px" disabled={false} onClick={handleLoadAvatar} />
                    </Box>
                </Box>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', maxWidth: 380 }}>
                    <ProfileForm data={data} />
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box', maxHeight: 336, width: 427, p: { sm: '20px 17px' }, m: '0', backgroundColor: 'rgba(255,255,255, 0.27)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h4" sx={{ ...styles.text, ...styles.h4 }}>
                    еще не участник?
                </Typography>
                <Typography sx={{ ...styles.text, ...styles.small }}>
                    Вступай в организацию «Улицы России» и тебя ждут: <br />
                    — Участие в федеральных и международных мероприятиях.
                    <br />
                    — Бесплатные мастер-классы от топовых деятелей.
                    <br />
                    — Обучающие программы экспертов «Улицы России».
                    <br />— Помощь в обучение и трудоустройстве.
                </Typography>
                <SubmitBtnWithIcon title="Вступить" width="auto" height="40px" fontSize="16px" disabled={false} onClick={handleOpenJoinPopup} />
                <PopupJoin open={openJoinPopup} onClose={handleClosePopup} onClick={handleClosePopup} />
            </Box>
        </Card>
    );
}
