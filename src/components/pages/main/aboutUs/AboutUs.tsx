import { Box, CardMedia } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgroundTitle from '../../../../assets/images/BackgrounAboutUsTitle.svg';
import AboutUsCard from '../../../common/aboutUsCard/AboutUsCard';
import { AboutUsData, AboutUsImgData } from '../../../../utils/constants';
import AboutUsImg from '../../../common/aboutUsImg/AboutUsImg';
import { CardAboutUsId, ImgAboutUsId } from '../../../../types/types';
import AboutUsBackground from '../../../../assets/images/AboutUsBackground.svg';
import SubmitBtn from '../../../common/btns/SubmitBtn.tsx';

const styles = {
    container: { zIndex: 10, position: 'relative', marginTop: '11px', height: '1228px' },
    cardContainer: { flexDirection: 'column', alignItems: 'end', display: 'flex', justifyContent: 'end', height: '100vh' },
    background: { position: 'absolute', top: '178px', right: '60px', width: '536px', height: '300px' },
    backgroundSecond: { position: 'absolute', top: '866px', left: '60px', width: '536px', height: '302px' },
};

export default function AboutUs() {
    return (
        <Box sx={styles.container}>
            <CardMedia component="img" src={AboutUsBackground} sx={styles.background} />
            <Title title="О нас" background={BackgroundTitle} margin="0 0 0 37px" />
            <Box sx={styles.cardContainer}>
                {AboutUsData.map((item, index) => (
                    <AboutUsCard key={index} id={item.id as CardAboutUsId} title={item.title} text={item.text} subtitle={item.subtitle} />
                ))}
                {AboutUsImgData.map((item, index) => (
                    <AboutUsImg key={index} id={item.id as ImgAboutUsId} img={item.img} borderColor={item.borderColor} />
                ))}
                <CardMedia component="img" src={AboutUsBackground} sx={styles.backgroundSecond} />
                <SubmitBtn title="Узнать больше" width="201px" margin="69px 60px 0 0 " />
            </Box>
        </Box>
    );
}
