import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgrounBenefitsTitle from '../../../../assets/images/BackgrounBenefitsTitle.svg';
import BenefitCard from '../../../common/benefitCard/BenefitCard';
import { HeightBenefit } from '../../../../types/types';

const styles = {
    container: { margin: '0 0 60px ', height: '100vh' },
};

const BenefitsData = {
    sport: {
        title: 'Для деятелей искусства и спорта',
        text: ['Участие в федеральных и международных мероприятиях.', 'Вступление в состав сборной страны.', 'Подписание контрактов с известными брендами.', 'Бесплатное участие в мастер-классах от топовых деятелей с мировым именем.'],
    },
    school: {
        height: '200px',
        title: 'Для школьников',
        text: ['Баллы к ЕГЭ.', 'Возможности для самореализации и новые знакомства.', 'Участие в спортивных и культурных мероприятиях в качестве участника или волонтера.'],
    },
    parents: {
        title: 'Для молодых родителей',
        text: ['Близкое знакомство с уличной культурой.', 'Обучающие программы экспертного состава «Улицы Росии».', 'Возможность качественно организовать досуг ребенка и развить его как сильную личность.'],
    },
    students: {
        title: 'Для Студентов',
        text: [' Прохождение учебной или производственной практики.', 'Обучение и стажировки.', 'Опыт работы с крупными объединениями и кейс по содействию в подготовке масштабных событий + рекомендательное письмо с характеристикой.'],
    },
};

export default function Benefits() {
    return (
        <Box sx={styles.container}>
            <Title title="Преимущества вступления" background={BackgrounBenefitsTitle} margin="0 0 0 -42px " width="999px" height="220px" padding="0  0 15px 100px" />
            <Box sx={{ display: 'grid', gridTemplateColumns: '(100px,4fr)' }}>
                {Object.keys(BenefitsData).map((key, item) => (
                    <BenefitCard id={item.id as HeightBenefit} key={key} data={BenefitsData[key as keyof typeof BenefitsData]} />
                ))}
            </Box>
        </Box>
    );
}
