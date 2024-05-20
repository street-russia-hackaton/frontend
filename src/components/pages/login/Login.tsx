import { useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import NavAuthTitle from '../../common/navAuthTitle/navAuthTitle';
import TextFieldAuth from '../../common/textfieldAuth/textfieldAuth';
import SubmitBtnBlack from '../../common/btns/SubmitBtnColor.tsx';

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

interface LoginForm {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    password: yup.string().required('Введите пароль не менее 6 символов').min(6),
});

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        // register,
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: LoginForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:');
        } else {
            console.log('вход:', data);
            onLogin(data.email, data.password);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const input = [
        { id: 'email', label: 'Электронная почта', placeholder: 'Введите Email', value: email, onChange: handleEmailChange },
        { id: 'password', label: 'Пароль', placeholder: 'Введите Пароль', value: password, onChange: handlePasswordChange },
    ];

    return (
        <Container maxWidth="sm">
            <Box mt={4} textAlign="center">
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    {input.map(({ id, label, placeholder, value, onChange }) => (
                        <TextFieldAuth label={label} placeholder={placeholder} value={value} onChange={onChange} id={id} />
                    ))}
                    <Typography variant="body2" style={{ marginTop: '1rem' }}>
                        Если вы являетесь членом организации, можете найти свой пароль на почте, которую указывали при вступлении.
                    </Typography>
                    <SubmitBtnBlack title="Войти" margin="16px 0 0  0" />
                </form>
            </Box>
        </Container>
    );
}
