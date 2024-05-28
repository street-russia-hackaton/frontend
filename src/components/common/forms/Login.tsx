import { Typography, Container, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldAuth from '../textfieldAuth/textfieldAuth.tsx';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import TextPersonalData from '../textPersonalData/TextPersonalData.tsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../../utils/constants';

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

interface LoginForm {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    password: yup.string().required('Введите пароль не менее 6 символов').min(6, 'Введите пароль не менее 6 символов'),
});

const styles = {
    container: { marginTop: '32px' },
    text: { fontSize: '16px', marginTop: '16px', fontFamily: 'Roboto', textAlign: 'start' },
};

export default function Login({ onLogin }: LoginProps) {
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<LoginForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: LoginForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:', errors);
        } else {
            onLogin(data.email, data.password);
            navigate('/profile', { replace: false });
        }
    };

    const onButtonClick = () => {
        if (!isValid) {
            console.error('Ошибка валидации:', errors);
        } else {
            navigate('/profile', { state: userData[1], replace: false });
        }
    };

    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setIsCompleted(isValid);
    }, [isValid]);

    return (
        <Container maxWidth="sm">
            <Box sx={styles.container}>
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Controller name="email" control={control} render={({ field }) => <TextFieldAuth label="Электронная почта" placeholder="Введи электронную почту" {...field} error={!!errors.email} helperText={errors.email ? errors.email.message : ''} margin="16px 0 0 0" />} />
                    <Controller name="password" control={control} render={({ field }) => <TextFieldAuth label="Пароль" placeholder="Введи пароль" type="password" {...field} error={!!errors.password} helperText={errors.password ? errors.password.message : ''} margin="16px 0 0 0" />} />
                    <Typography component="p" sx={styles.text}>
                        Если ты являешься членом организации, можешь найти свой пароль на почте, которую указывал при вступлении.
                    </Typography>
                    <SubmitBtnColor onClick={onButtonClick} title="Войти" margin="16px 0 0 0" disabled={!isCompleted} />
                    <TextPersonalData />
                </form>
            </Box>
        </Container>
    );
}
