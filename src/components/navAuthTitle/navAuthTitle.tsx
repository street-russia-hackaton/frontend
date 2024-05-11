import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavAuthTitleProps {
    title?: string;
}

const styles = {
    container: { display: 'flex', justifyContent: 'space-between' },
    text: { fontSize: '24px', fontWeight: '400' },
    link: { textDecoration: 'none', color: '#000' },
};

export default function NavAuthTitle({ title }: NavAuthTitleProps) {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Box sx={styles.container}>
            <Typography component="p" sx={styles.text}>
                <Link to="/register" onClick={toggleForm} style={styles.link}>
                    Регистрация
                </Link>
            </Typography>
            <Typography component="p" sx={styles.text}>
                <Link to="/login" onClick={toggleForm} style={styles.link}>
                    Вход
                </Link>
            </Typography>
        </Box>
    );
}
