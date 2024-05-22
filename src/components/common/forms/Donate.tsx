import { Typography, Container, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldAuth from '../textfieldAuth/textfieldAuth.tsx';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import CheckboxIcon from '../checkboxIcon/CheckboxIcon.tsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DonateBtn from '../btns/CheckBtn.tsx';

interface DonateProps {
    onDonate: (sum: number, email: string, password: string) => void;
}

interface DonateForm {
    sum: number;
    email: string;
    phonenumber: string;
}

const schema = yup.object().shape({
    sum: yup.number().typeError('Введите сумму цифрами').required('Введите сумму цифрами'),
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    phonenumber: yup
        .string()
        .matches(/^\+7\d{10}$/, 'Номер телефона должен быть в формате +7XXXXXXXXXX')
        .required('Введите номер телефона'),
});

const styles = {
    container: { marginTop: '32px' },
    text: { fontSize: '16px', marginTop: '8px', textAlign: 'start', color: '#D2D1D0' },
    checkboxText: { display: 'flex', alignItems: 'center', marginTop: '24px' },
};

export default function Donate({ onDonate }: DonateProps) {
    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<DonateForm>({
        defaultValues: {
            phonenumber: '+7',
        },
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: DonateForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:', errors);
        } else {
            console.log('вход:', data);
            onDonate(data.sum, data.email, data.phonenumber);
        }
    };

    const [isChecked, setIsChecked] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        setIsCompleted(isValid);
    }, [isValid]);

    const sum = [{ text: '50p' }, { text: '500p' }, { text: '1000p' }, { text: '2000p' }, { text: 'Другая сумма' }];

    return (
        <Container maxWidth="sm">
            <Box sx={styles.container}>
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <DonateBtn sum={sum} />
                    <Controller name="sum" control={control} render={({ field }) => <TextFieldAuth label="Введи сумму" placeholder="Введите желаемую сумму доната" {...field} error={!!errors.sum} helperText={errors.sum ? errors.sum.message : ''} margin="16px 0 0 0" />} />
                    <Typography component="p" sx={styles.text}>
                        Деньги будут списываться ежемесячно, поэтому выбери наиболее комфортную для себя сумму.
                    </Typography>
                    <Controller name="email" control={control} render={({ field }) => <TextFieldAuth label="Электронная почта" placeholder="Введи электронную почту" {...field} error={!!errors.email} helperText={errors.email ? errors.email.message : ''} margin="16px 0 0 0" />} />
                    <Controller name="phonenumber" control={control} render={({ field }) => <TextFieldAuth label="Номер телефона" placeholder="Введи номер телефона" type="text" {...field} error={!!errors.phonenumber} helperText={errors.phonenumber ? errors.phonenumber.message : ''} margin="16px 0 0 0" />} />
                    <Box sx={styles.checkboxText}>
                        <CheckboxIcon onChange={handleCheckboxChange} />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography component="p">Я принимаю</Typography>
                            <Link to="" style={{ display: 'flex', alignItems: 'baseline' }}>
                                <Typography component="p" sx={{ color: '#fff', paddingLeft: '5px' }}>
                                    договор-оферту
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <SubmitBtnColor title="Поддержать организацию" margin="24px 0 0 0" disabled={!isChecked || !isCompleted} />
                </form>
            </Box>
        </Container>
    );
}
