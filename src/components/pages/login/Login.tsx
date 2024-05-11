import { useState } from 'react';
import { TextField, Typography, Container, Box } from '@mui/material';

import NavAuthTitle from '../../navAuthTitle/navAuthTitle';
import SubmitBtn from '../../btns/SubmitBtn';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        setEmail('');
        setPassword('');
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4} textAlign="center">
                <NavAuthTitle />
                <form onSubmit={handleSubmit}>
                    <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={handleEmailChange} />
                    <TextField label="Пароль" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={handlePasswordChange} />
                    <Typography variant="body2" style={{ marginTop: '1rem' }}>
                        Если вы являетесь членом организации, можете найти свой пароль на почте, которую указывали при вступлении.
                    </Typography>
                    <SubmitBtn title="Войти" />
                </form>
            </Box>
        </Container>
    );
}
