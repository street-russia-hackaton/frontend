import { Box } from '@mui/material';
import Title from '../../../common/titleMainPage/titleMainPage';
import BackgroundTitle from '../../../../assets/images/BackgrounAboutUsTitle.svg';
import AboutUsCard from '../../../common/aboutUsCard/AboutUsCard';
import { AboutUsData, AboutUsImgData } from '../../../../utils/constants';

import AboutUsImg from '../../../common/aboutUsImg/AboutUsImg';

export default function AboutUs() {
    return (
        <Box>
            <Title title="О нас" background={BackgroundTitle} />
            {AboutUsData.map((item, index) => (
                <AboutUsCard key={index} title={item.title} text={item.text} />
            ))}
            {AboutUsImgData.map((item, index) => (
                <AboutUsImg key={index} img={item.img} />
            ))}
        </Box>
    );
}
