import { useState } from 'react';
import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgroundTitle from '../../../../assets/images/DisceplinesBackground.svg';
import DisceplineCard from '../../../common/desciplineCard/DescoplineCard';
import { DesciplineCardData } from '../../../../utils/constants';

const styles = {
    container: { position: 'relative', marginTop: '-150px', height: '1100px' },
    background: { position: 'absolute', top: '178px', right: '60px', width: '363px', height: '436px' },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(11, 1fr)',
        margin: '-110px 60px 0',
    },
};

export default function Disceplines() {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };
    return (
        <Box sx={styles.container}>
            <Title title="Дисциплины" background={BackgroundTitle} margin="0 0 0 37px" width="436px" height="436px" padding="35px 0 12px 20px " />
            <Box sx={styles.cardContainer}>
                {DesciplineCardData.map((data, index) => (
                    <DisceplineCard key={index} data={data} isExpanded={expandedCardIndex === index} onClick={() => handleCardClick(index)} otherCardsShrunk={expandedCardIndex !== null && expandedCardIndex !== index} />
                ))}
            </Box>
        </Box>
    );
}
