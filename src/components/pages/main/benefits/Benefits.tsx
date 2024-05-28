import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgrounBenefitsTitle from '../../../../assets/images/BackgrounBenefitsTitle.svg';
import BenefitCard from '../../../common/benefitCard/BenefitCard';
import { CardBenefitId } from '../../../../types/types';
import { BenefitsData } from '../../../../utils/constants';
import SubmitBtnColor from '../../../common/btns/SubmitBtnColor';
import { useState } from 'react';
import PopupJoin from '../../../common/popups/PopupJoin';

const styles = {
    container: { margin: '0 0 60px ' },
    cardContainer: { margin: ' 0 60px', flexDirection: 'column', alignItems: 'end', display: 'flex' },
    card: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxHeight: '480px' },
};

export default function Benefits() {
    const [openJoinPopup, setOpenJoinPopup] = useState(false);

    const handleOpenSubscribePopup = () => {
        setOpenJoinPopup(true);
    };
    const handleClosePopup = () => {
        setOpenJoinPopup(false);
    };

    return (
        <Box sx={styles.container}>
            <Title title="Преимущества вступления" background={BackgrounBenefitsTitle} margin="0 0 0 -42px " width="999px" height="220px" padding="0  0 15px 100px" />
            <Box sx={styles.cardContainer}>
                <Box sx={styles.card}>
                    {Object.entries(BenefitsData).map(([key, value], index) => (
                        <BenefitCard key={key} id={key as CardBenefitId} data={value} cardStyle={index === Object.keys(BenefitsData).length - 1 ? { marginTop: '-30px' } : {}} />
                    ))}
                </Box>
                <SubmitBtnColor title="Вступить в организацию" width="300px" margin="32px 0 0 0" onClick={handleOpenSubscribePopup} />
                <PopupJoin open={openJoinPopup} onClose={handleClosePopup} onClick={handleClosePopup} />
            </Box>
        </Box>
    );
}
