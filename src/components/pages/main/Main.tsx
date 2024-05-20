import Header from '../../common/header/Header';
import Intro from './intro/Intro';
import Marquee from '../../common/marquee/Marquee';
import Footer from '../../common/footer/Footer';
import AboutUs from './aboutUs/AboutUs';
import Disciplines from './disciplines/Disciplines';
import Map from './map/Map';
import News from './news/News';
import Events from './events/Events';
import Faq from './faq/Faq';

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
            <News />
            <Faq />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
