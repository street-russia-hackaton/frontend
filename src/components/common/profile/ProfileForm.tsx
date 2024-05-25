import { Typography, Container, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import { useEffect, useState } from 'react';
import CardActions from '@mui/material/CardActions';
import TitleSecondary from '../titleSecondary/titleSecondary';
import EditProfileIcon from '../../../assets/images/EditProfileIcon.svg?react';
import ProfileTextField from './ProfileTextField.tsx';
import { CardUser } from '../../../types/types';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon.tsx';

interface editProps {
    data: CardUser;
    // onEdit: (lastName: string, firstName: string, patronimicName: string, email: string, tel: string) => void;
}

interface profileForm {
    lastName: string;
    firstName: string;
    patronimicName?: string;
    email: string;
    tel?: string;
}

const schema = yup.object().shape({
    lastName: yup.string().required('Поле не может быть пустым').min(2, 'Введите Фамилию не менее 2 символов'),
    firstName: yup.string().required('Поле не может быть пустым').min(2, 'Введите Имя не менее 2 символов'),
    patronimicName: yup.string().min(2, 'Введите Отчество не менее 2 символов'),
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    tel: yup.string().min(11, 'Введите пароль не менее 11 символов'),
});

const styles = {
    container: { display: 'flex', flexDirection: 'column', gap: '24px', p: { sm: '0' }, m: '0' },
    text: { fontSize: '16px', marginTop: '16px', fontFamily: 'Roboto', textAlign: 'start' },
};

export default function ProfileForm({ data }: editProps) {
    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<profileForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: profileForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:', errors);
        } else {
            setIsEditButtonClicked(false);
        }
    };

    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleEditClick = () => {
        setIsEditButtonClicked(!isEditButtonClicked);
    };

    useEffect(() => {
        setIsCompleted(isValid);
    }, [isValid]);

    return (
        <Box sx={styles.container}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', p: { sm: '0' }, m: '0' }}>
                <TitleSecondary title="информация" />
                <CardActions onClick={handleEditClick} sx={{ p: 0 }}>
                    <EditProfileIcon />
                </CardActions>
            </Box>
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Controller name="lastName" control={control} render={({ field }) => <ProfileTextField label="Фамилия" placeholder="" {...field} value={data.lastName} error={!!errors.lastName} helperText={errors.lastName ? errors.lastName.message : ''} margin="0" borderBottom={isEditButtonClicked && '1px solid #fff'} />} />
                <Controller name="firstName" control={control} render={({ field }) => <ProfileTextField label="Имя" placeholder="" {...field} value={data.firstName} error={!!errors.firstName} helperText={errors.firstName ? errors.firstName.message : ''} margin="0" borderBottom={isEditButtonClicked && '1px solid #fff'} />} />
                <Controller name="patronimicName" control={control} render={({ field }) => <ProfileTextField label="Отчество" placeholder="" {...field} value={data.patronimicName} error={!!errors.patronimicName} helperText={errors.patronimicName ? errors.patronimicName.message : ''} margin="0" borderBottom={isEditButtonClicked && '1px solid #fff'} />} />
                <Controller name="email" control={control} render={({ field }) => <ProfileTextField label="Эл. почта" placeholder="" {...field} value={data.email} error={!!errors.email} helperText={errors.email ? errors.email.message : ''} margin="0" borderBottom={isEditButtonClicked && '1px solid #fff'} />} />
                <Controller name="tel" control={control} render={({ field }) => <ProfileTextField label="Телефон" placeholder="" {...field} value={data.tel} error={!!errors.tel} helperText={errors.tel ? errors.tel.message : ''} margin="0" borderBottom={isEditButtonClicked && '1px solid #fff'} />} />

                {isEditButtonClicked && <SubmitBtnWithIcon title="Сохранить" width="100%" height="46px" disabled={!isCompleted} />}
            </form>
        </Box>
    );
}
