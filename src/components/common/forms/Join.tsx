import { Container, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldAuth from '../textfieldAuth/textfieldAuth.tsx';
import FilterAuth from '../filters/FilterAuth.tsx';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import TextPersonalData from '../textPersonalData/TextPersonalData.tsx';
import { useEffect, useState } from 'react';
import CheckboxIcon from '../checkboxIcon/CheckboxIcon.tsx';
import { Link } from 'react-router-dom';

interface JoinProps {
    onJoin: (name: string, email: string, phonenumber: string, link: string, pasportSeries: string, pasportNumber: string, issuedBy: string, whenIssued: string) => void;
}

interface JoinForm {
    name: string;
    email: string;
    phonenumber: string;
    link: string;
    pasportSeries: string;
    pasportNumber: string;
    issuedBy: string;
    whenIssued: string;
}

const styles = {
    container: { marginTop: '32px', width: '1220px' },
    checkboxText: { display: 'flex', alignItems: 'center', marginTop: '24px', fontSize: '16px' },
};

const schema = yup.object().shape({
    name: yup.string().required('Введите ФИО'),
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    phonenumber: yup
        .string()
        .matches(/^\+7\d{10}$/, 'Номер телефона должен быть в формате +7XXXXXXXXXX')
        .required('Введите номер телефона'),
    link: yup
        .string()
        .matches(/^https:\/\/.+$/, 'Ссылка должна начинаться с "https://"')
        .required('Введите ссылку'),
    pasportSeries: yup.string().required('Введите серию паспорта'),
    pasportNumber: yup.string().required('Введите номер паспорта'),
    issuedBy: yup.string().required('Введи полностью, кем выдан паспорт'),
    whenIssued: yup.string().required('Введи дату выдачи паспорта'),
});

export default function Register({ onJoin }: JoinProps) {
    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<JoinForm>({
        defaultValues: {
            phonenumber: '+7',
        },
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: JoinForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:', errors);
        } else {
            onJoin(data.name, data.email, data.phonenumber, data.link, data.pasportSeries, data.pasportNumber, data.issuedBy, data.whenIssued);
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

    return (
        <Container sx={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                    <Controller name="name" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="ФИО" placeholder="Введи ФИО" error={!!errors.name} helperText={errors.name ? errors.name.message : ''} {...field} />} />
                    <Controller name="email" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Электронная почта" placeholder="Введи электронную почту" error={!!errors.email} helperText={errors.email ? errors.email.message : ''} {...field} />} />
                    <Controller name="phonenumber" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Номер телефона" placeholder="Введи номер телефона" type="text" error={!!errors.phonenumber} helperText={errors.phonenumber ? errors.phonenumber.message : ''} {...field} />} />
                    <Controller name="link" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Социальная сеть для связи" placeholder="Вставь ссылку на свою соцсеть" type="link" error={!!errors.link} helperText={errors.link ? errors.link.message : ''} {...field} />} />
                </div>
                <div>
                    <FilterAuth label="Выбери свой регион" />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Controller name="pasportSeries" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Серия паспорта" placeholder="Например, 55 13" type="text" error={!!errors.pasportSeries} helperText={errors.pasportSeries ? errors.pasportSeries.message : ''} {...field} />} />
                        <Controller name="pasportNumber" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Номер паспорта" placeholder="Например, 565758" type="text" error={!!errors.pasportNumber} helperText={errors.pasportNumber ? errors.pasportNumber.message : ''} {...field} />} />
                    </Box>
                    <Controller name="issuedBy" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Кем выдан" placeholder="Введи полностью, кем выдан паспорт" type="text" error={!!errors.issuedBy} helperText={errors.issuedBy ? errors.issuedBy.message : ''} {...field} />} />
                    <Controller name="whenIssued" control={control} render={({ field }) => <TextFieldAuth margin="16px 0 0 0" label="Когда выдан" placeholder="Введи дату выдачи паспорта" type="text" error={!!errors.whenIssued} helperText={errors.whenIssued ? errors.whenIssued.message : ''} {...field} />} />
                </div>
            </form>
            <Box sx={{ marginLeft: '20%' }}>
                <Box sx={styles.checkboxText}>
                    <CheckboxIcon onChange={handleCheckboxChange} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography component="p">Я согласен с</Typography>
                        <Link to="" style={{ display: 'flex', alignItems: 'baseline' }}>
                            <Typography component="p" sx={{ color: '#fff', paddingLeft: '5px' }}>
                                правами и обязанностями участника ОООУКС &nbsp;
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Typography component="p">«Улицы России»</Typography>
                <SubmitBtnColor title="Присоединиться" margin="32px 0 0 0" width="553px" disabled={!isCompleted} />
                <TextPersonalData />
            </Box>
        </Container>
    );
}
