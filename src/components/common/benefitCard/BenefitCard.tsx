import { CardBenefit, CardBenefitId } from '../../../types/types';
import style from './BenefitCard.module.scss';
import { Box, Typography } from '@mui/material';
import { BenefitsHeightData } from '../../../utils/constants';

interface BenefitCardProps {
    data: CardBenefit;
    height?: string;
    cardStyle?: React.CSSProperties;
}

const font = {
    fontWeight: '400',
    fontSize: '20px',
    color: '#fff',
};

const styles = {
    container: { backgroundColor: 'rgba(255, 255, 255, 0.27)', display: 'flex', flexDirection: 'column', alignItems: 'center', backdropFilter: 'blur(27px)' },
    textContainer: { margin: '20px 0 0 24px ' },
    title: { ...font, fontFamily: 'Benzin', textTransform: 'uppercase' },
};

export default function BenefitCard({ id, data, cardStyle }: BenefitCardProps & { id: CardBenefitId }) {
    const { height } = BenefitsHeightData[id] || { height: '236px' };

    return (
        <Box className={style.benefit} sx={{ height, ...cardStyle }}>
            <Box sx={styles.textContainer}>
                <Typography component="h2" sx={styles.title}>
                    {data.title}
                </Typography>
                <ul className={style.benefit__link}>
                    {data.text.map((item, index) => (
                        <li key={index} className={style.benefit__text}>
                            {item}
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
}
