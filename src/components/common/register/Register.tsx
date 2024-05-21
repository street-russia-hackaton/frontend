import React, { useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextFieldAuth from '../textfieldAuth/textfieldAuth.tsx';
import FilterAuth from '../filterAuth/FilterAuth.tsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import TextPersonalData from '../textPersonalData/TextPersonalData';

interface RegisterProps {
    onRegister: (name: string, email: string, password: string) => void;
}

interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

const styles = {
    container: { marginTop: '32px' },
};

const schema = yup.object().shape({
    name: yup.string().required('Введите ФИО'),
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    password: yup.string().required('Введите пароль не менее 6 символов').min(6),
});

export default function Register({ onRegister }: RegisterProps) {
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
        { id: 'name', label: 'ФИО', placeholder: 'Введи ФИО', value: name, onChange: handleNameChange },
        { id: 'email', label: 'Электронная почта', placeholder: 'Введи электронную почту', value: email, onChange: handleEmailChange },
        { id: 'password', label: 'Пароль', placeholder: 'Придумай пароль, минимум 6 символов', value: password, onChange: handlePasswordChange },
        { id: 'password', label: 'Подтверди пароль', placeholder: 'Повтори введеный пароль', value: password, onChange: handlePasswordChange },
    ];

    return (
        <Container maxWidth="sm">
            <Box sx={styles.container}>
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    {input.map(({ id, label, placeholder, value, onChange }) => (
                        <React.Fragment key={id}>
                            <TextFieldAuth margin="16px 0 0 0" label={label} placeholder={placeholder} value={value} onChange={onChange} id={id} />
                            {id === 'name' && <FilterAuth />}
                        </React.Fragment>
                    ))}
                    <SubmitBtnColor title="Зарегистрироваться" margin="32px 0 0 0 " width="553px" />
                </form>
                <TextPersonalData />
            </Box>
        </Container>
    );
}
