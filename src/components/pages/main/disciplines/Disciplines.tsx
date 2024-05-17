import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgroundTitle from '../../../../assets/images/DisceplinesBackground.svg';

const styles = {
    container: { position: 'relative', marginTop: '-150px', height: '1228px' },
    background: { position: 'absolute', top: '178px', right: '60px', width: '363px', height: '436px' },
};

export default function Disceplines() {
    return (
        <Box sx={styles.container}>
            <Box>
                <Title title="Дисциплины" background={BackgroundTitle} margin="0 0 0 37px" width="436px" height="436px" padding="35px 0 12px 20px " />
            </Box>
        </Box>
    );
}
