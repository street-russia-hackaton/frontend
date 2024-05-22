import { Container, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldAuth from '../textfieldAuth/textfieldAuth.tsx';
import FilterAuth from '../filters/FilterAuth.tsx';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import TextPersonalData from '../textPersonalData/TextPersonalData.tsx';
import { useEffect, useState } from 'react';

interface RegisterProps {
    onRegister: (name: string, email: string, password: string) => void;
}

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const styles = {
    container: { marginTop: '32px' },
};

const schema = yup.object().shape({
    name: yup.string().required('Введите ФИО'),
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    password: yup.string().required('Введите пароль не менее 6 символов').min(6, 'Введите пароль не менее 6 символов'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('Повторите пароль'),
});

export default function Register({ onRegister }: RegisterProps) {
    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<RegisterForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: RegisterForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:', errors);
        } else {
            onRegister(data.name, data.email, data.password);
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
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <>
                                <TextFieldAuth margin="16px 0 0 0" label="ФИО" placeholder="Введи ФИО" error={!!errors.name} helperText={errors.name ? errors.name.message : ''} {...field} />
                                <FilterAuth />
                            </>
                        )}
                    />
                    <Controller name="email" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Электронная почта" placeholder="Введи электронную почту" error={!!errors.email} helperText={errors.email ? errors.email.message : ''} {...field} />} />
                    <Controller name="password" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Пароль" placeholder="Придумай пароль, минимум 6 символов" type="password" error={!!errors.password} helperText={errors.password ? errors.password.message : ''} {...field} />} />
                    <Controller name="confirmPassword" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Подтверди пароль" placeholder="Повтори введённый пароль" type="password" error={!!errors.confirmPassword} helperText={errors.confirmPassword ? errors.confirmPassword.message : ''} {...field} />} />
                    <SubmitBtnColor title="Зарегистрироваться" margin="32px 0 0 0" width="553px" disabled={!isCompleted} />
                </form>
                <TextPersonalData />
            </Box>
        </Container>
    );
}
