import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import AboutNav from '../../common/about/AboutNav';
import Benefits from '../main/benefits/Benefits';
import { Box, CardMedia } from '@mui/material';
import BackgroundAboutPage from '../../../assets/images/BackgroundAboutPAge.svg';
import AboutDepartment from '../../common/about/AboutDepartment';
import AboutRegionDepartment from '../../common/about/AboutRegionDepartment';
import AboutPartnersNav from '../../common/about/AboutPartnersNav';
import AboutDocNav from '../../common/about/AboutDocNav';

export default function About() {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ margin: '0 60px 60px' }}>
                <Box sx={{ position: 'absolute', top: 30, right: 0, zIndex: -10 }}>
                    <CardMedia component="img" src={BackgroundAboutPage} sx={{ width: '454px' }} />
                </Box>
                <BreadcrumbsComponent margin="0" />
                <TitleMainPage title="История" color="#fff" width="50vw" padding="0" height="54px" />
                <AboutNav />
                <AboutDepartment />
                <AboutRegionDepartment />
                <TitleMainPage title="Партнеры" color="#fff" width="50vw" padding="0" height="54px" margin="120px 0 0 0" />
                <AboutPartnersNav />
                <TitleMainPage title="Документы" color="#fff" width="50vw" padding="0" height="54px" margin="120px 0 0 0" />
                <AboutDocNav />
            </Box>
            <Benefits />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </Box>
    );
}
