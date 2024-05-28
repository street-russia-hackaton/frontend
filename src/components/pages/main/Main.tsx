import Header from '../../common/header/Header';
import Intro from './intro/Intro';
import Marquee from '../../common/marquee/Marquee';
import Footer from '../../common/footer/Footer';
import AboutUs from './aboutUs/AboutUs';
import Disciplines from './disciplines/Disciplines';
import Map from './map/Map';
import NewsCarousel from '../../common/news/NewsCarousel';
import Events from './events/Events';
import BackgroundTitle from '../../../assets/images/background-news-title.svg';
import Faq from './faq/Faq';
import Benefits from './benefits/Benefits';

const contentArr = [`• доступность • общность • здоровье • открытость • новаторство • доступность • общность • здоровье • открытость • новаторство `, '• RAP • BREAKING • SKATEBOARDING • BMX • SCOOT • STREET ART • PARKOUR • WORKOUT • RAP • BREAKING • SKATEBOARDING • BMX • SCOOT • STREET ART • PARKOUR • WORKOUT '];

export default function Main() {
    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Intro />
            <Marquee color="#fff" background="#AA433A" content={contentArr[0]} rotate="rotate(8.1deg)" marginTop="-116px" />
            <Marquee color="#222" background="#D2D1D0" content={contentArr[1]} rotate="rotate(-4.9deg)" marginTop="-10px" />
            <Map />
            <AboutUs />
            <Disciplines />
            <Events />
            <NewsCarousel title="Новости" margin="0 0 6px -60px" width='340px' height='160px' padding='0 0 12px 60px' background={BackgroundTitle}/>
            <Benefits />
            <Faq />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
