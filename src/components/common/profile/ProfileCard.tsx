import { useState } from 'react';
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
import style from './ProfileCard.module.scss';
import TitleSecondary from '../titleSecondary/titleSecondary';
import MailIcon from '../../../assets/images/MailIcon.svg?react';
import PhoneIcon from '../../../assets/images/PhoneIcon.svg?react';
import IconVk from '../../../assets/images/IconVk.svg?react';

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

    const handleOpenJoinPopup = () => {
        setOpenJoinPopup(true);
    };

    const handleClosePopup = () => {
        setOpenJoinPopup(false);
    };

    const handleLoadAvatar = () => {};

    return (
        <Card sx={{ boxShadow: 'none', width: '100%', background: '#222', display: 'flex', border: 'none', flexDirection: 'column', gap: '64px' }}>
            <Box sx={{ boxShadow: 'none', position: 'relative', width: '100%', height: 400, display: 'flex', justifyContent: 'space-between', gap: '22px', p: { sm: '0' }, m: '0' }}>
                <Box sx={{ display: 'flex', gap: '65px', p: { sm: '0' }, m: '0' }}>
                    <Box sx={{ position: 'relative', width: '427px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#D2D1D0', p: { sm: '0' }, m: '0' }}>
                        <Box className={style.container} sx={{ position: 'relative', width: '427px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#D2D1D0', p: { sm: '0' }, m: '0' }}>
                            {data.imageSrc !== '' && <CardMedia className={style.container} component="img" alt="Аватар пользователя." sx={{ width: '427px' }} image={data.imageSrc} />}
                            {data.imageSrc === '' && <ProfileAvatar />}
                        </Box>
                        <Box className={style.container__button} sx={{ position: 'absolute', bottom: '30px', right: '38px', width: '349px', p: { sm: '0' }, m: '0' }}>
                            <SubmitBtnWithIcon title="Загрузить фото профиля" width="349px" disabled={false} onClick={handleLoadAvatar} />
                        </Box>
                    </Box>
                    <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', ':last-child': { p: 0 }, maxWidth: 380 }}>
                        <ProfileForm data={data} />
                    </CardContent>
                </Box>
                {data.role === '' && (
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
                )}
            </Box>
            {data.role !== '' && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: { sm: '0' }, m: '0' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '650px', gap: '32px', p: { sm: '0' }, m: '0' }}>
                        <TitleSecondary title="Должность" />
                        <Typography sx={{...styles.text, ...styles.subtitle}} >Председатель Общероссийской общественной организации уличной культуры и спорта «Улицы России», генеральный директор международной конкурс-премии «КАРДО», директор общественной организации «ОФФБИТС», член экспертного совета Комитета Государственной Думы Российской Федерации по молодежной политике, советник ректора Северо-Кавказского федерального университета по общественным проекта, эксперт Государственного Совета Российской Федерации по направлению «Молодёжная политика».</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '426px', p: { sm: '0' }, m: '0' }}>
                        <TitleSecondary title="Контакты" />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', p: { sm: '0' }, m: '0' }}>
                            <MailIcon />
                            <Box sx={{ p: { sm: '0' }, m: '0' }}>
                                <Typography sx={{ ...styles.text, ...styles.subtitle }}>Email</Typography>
                                <Typography sx={{ ...styles.text, ...styles.small, borderBottom: '0.5px solid #fff', p: '8px 0 0', lineHeight: 0.7, display: 'inline' }}>{data.email}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', p: { sm: '0' }, m: '0' }}>
                            <PhoneIcon />
                            <Box sx={{ p: { sm: '0' }, m: '0' }}>
                                <Typography sx={{ ...styles.text, ...styles.subtitle }}>Phone</Typography>
                                <Typography sx={{ ...styles.text, ...styles.small, borderBottom: '0.5px solid #fff', p: '8px 0 0', lineHeight: 0.7, display: 'inline' }}>{data.tel}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', p: { sm: '0' }, m: '0' }}>
                            <IconVk />
                            <Box sx={{ p: { sm: '0' }, m: '0' }}>
                                <Typography sx={{ ...styles.text, ...styles.small, borderBottom: '0.5px solid #fff', p: '8px 0 0', lineHeight: 0.7, display: 'inline' }}>{data.firstName} в социальных сетях</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Card>
    );
}
