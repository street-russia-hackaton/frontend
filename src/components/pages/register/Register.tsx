import React, { useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NavAuthTitle from '../../common/navAuthTitle/navAuthTitle';
import TextFieldAuth from '../../common/textfieldAuth/textfieldAuth';
import SelectAuth from '../../common/selectAuth/selectAuth';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitBtnWithIcon from '../../common/btns/SubmitBtnWithIcon';
import GosUslugiLogo from '../../../assets/GosUslugiLogo.svg?react';
import SubmitBtnBlack from '../../common/btns/SubmitBtnColor.tsx';

interface RegisterProps {
    onRegister: (name: string, email: string, password: string) => void;
}

interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

const styles = {
    text: { fontSize: '16px', marginTop: '16px' },
    line: { borderTop: '1px solid #000', marginTop: '32px', marginBottom: '32px' },
};

const schema = yup.object().shape({
    name: yup.string().required('Введите ФИО'),
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    password: yup.string().required('Введите пароль не менее 6 символов').min(6),
});

export default function Register({ onRegister }: RegisterProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const {
        // register,
        handleSubmit,
        formState: { isValid },
    } = useForm<RegisterForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: RegisterForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:');
        } else {
            console.log('вход:', data);
            onRegister(data.name, data.email, data.password);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const input = [
        { id: 'name', label: 'ФИО', placeholder: 'Введите ФИО', value: name, onChange: handleNameChange },
        { id: 'email', label: 'Электронная почта', placeholder: 'Введите Email', value: email, onChange: handleEmailChange },
        { id: 'password', label: 'Пароль', placeholder: 'Введите Пароль', value: password, onChange: handlePasswordChange },
        { id: 'password', label: 'Подтвердите пароль', placeholder: 'Введите повторно пароль', value: password, onChange: handlePasswordChange },
    ];

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4} textAlign="center">
                <NavAuthTitle />
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    {input.map(({ id, label, placeholder, value, onChange }) => (
                        <React.Fragment key={id}>
                            <TextFieldAuth label={label} placeholder={placeholder} value={value} onChange={onChange} id={id} />
                            {id === 'name' && <SelectAuth label="Выберите город" />}
                        </React.Fragment>
                    ))}
                    <SubmitBtnBlack title="Зарегистрироваться" margin="16px 0 0 0 " />
                </form>
                <Typography component="p" sx={styles.text}>
                    Нажимая на эту кнопку, я даю своё согласие ВОО “Улицы России” на обработку моих персональных данных согласно &nbsp;
                    <Link to="#" onClick={toggleForm}>
                        152-ФЗ от 27.07.06
                    </Link>
                </Typography>
                <div style={styles.line}></div>
                <SubmitBtnWithIcon icon={<GosUslugiLogo />} title="Зарегистрироваться через госуслуги" />
            </Box>
        </Container>
    );
}
