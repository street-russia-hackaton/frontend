import style from './TextPersonalData.module.scss';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
    text: { fontSize: '16px', marginTop: '16px', fontFamily: 'Roboto', textAlign: 'start' },
};

export default function TextPersonalData() {
    return (
        <Box>
            <Typography component="p" sx={styles.text}>
                Нажимая на эту кнопку, я даю своё согласие ВОО «Улицы России»
                <br /> на обработку моих персональных данных согласно &nbsp;
                <Link to="#" className={style.text__link}>
                    152-ФЗ от 27.07.06
                </Link>
            </Typography>
        </Box>
    );
}
