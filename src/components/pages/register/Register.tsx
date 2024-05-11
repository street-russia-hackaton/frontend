import { useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NavAuthTitle from '../../navAuthTitle/navAuthTitle';
import SubmitBtn from '../../btns/SubmitBtn';
import TextFieldAuth from '../../textfieldAuth/textfieldAuth';
import SelectAuth from '../../selectAuth/selectAuth';

export default function Register() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Name:', name);
        console.log('City:', city);
        setName('');
        setEmail('');
        setPassword('');
        setCity('');
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4} textAlign="center">
                <NavAuthTitle />
                <form onSubmit={handleSubmit}>
                    <TextFieldAuth label="ФИО" placeholder="Введите ФИО" value={name} onChange={handleNameChange} id="name" />
                    <TextFieldAuth label="Электронная почта" placeholder="Введите Email" value={email} id="email" onChange={handleEmailChange} />
                    <TextFieldAuth label="Пароль" placeholder="Введите Пароль" value={password} id="password" onChange={handlePasswordChange} />
                    <TextFieldAuth label="Подтвердите пароль" placeholder="Введите повторно пароль" value={password} id="password" onChange={handlePasswordChange} />
                    <SelectAuth label="Выберите город" />
                    <SubmitBtn title="Зарегистрироваться" />
                    <Typography variant="body2" style={{ marginTop: '1rem' }}>
                        Нажимая на эту кнопку, я даю своё согласие ВОО “Улицы России” на обработку моих персональных данных согласно
                        <RouterLink to="#" onClick={toggleForm}>
                            152-ФЗ от 27.07.06
                        </RouterLink>
                    </Typography>
                </form>
            </Box>
        </Container>
    );
}
