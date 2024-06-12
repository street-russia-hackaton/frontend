import { Container, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterRegions from '../filters/FilterRegions.tsx';

const styles = {
    container: {},
    text: { fontSize: '16px', marginTop: '16px', fontFamily: 'Roboto', textAlign: 'start' },
};

interface LoginForm {
    id: string;
}

export default function RegionSerch() {
    const navigate = useNavigate();
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginForm>({
        mode: 'onChange',
    });

    const onSubmit = (data: LoginForm) => {
        navigate(`/regional/${data.id}`, { replace: false });
    };

    useEffect(() => {
        setIsCompleted(isCompleted);
    }, [isCompleted]);

    return (
        <Container sx={{p: {sm: 0},  display: {xs: 'block', md: 'none'} }}>
            <Box sx={styles.container}>
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FilterRegions />
                    <SubmitBtnColor
                        onClick={() => {
                            onSubmit;
                        }}
                        title="Перейти к отделению"
                        margin="16px 0 0 0"
                        disabled={!isCompleted}
                        mobWidth='100%'
                        fontSize='18px'
                    />
                </form>
            </Box>
        </Container>
    );
}
