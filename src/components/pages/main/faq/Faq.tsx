import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgrounFaqTitle from '../../../../assets/images/BackgrounFaqTitle.svg';
import FaqSelect from '../../../common/faqSelect/FaqSelect';
import { FaqSelectData } from '../../../../utils/constants';

const styles = {
    container: { margin: '0 60px 120px' },
    selectContainer: { marginTop: '-40px' },
};

export default function Events() {
    return (
        <Box sx={styles.container}>
            <Title title="Faq" background={BackgrounFaqTitle} margin="0 0 0 0" width="193px" height="226px" padding="0 0 0 12px  " />
            <Box sx={styles.selectContainer}>
                {FaqSelectData.select.map((data, index) => (
                    <FaqSelect key={index} select={data} />
                ))}
            </Box>
        </Box>
    );
}
