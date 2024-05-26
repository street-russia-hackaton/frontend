import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import NewsCarousel from '../../common/news/NewsCarousel';
import { Container } from '@mui/material';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import NewComponent from '../../common/news/NewComponent';
import { useParams } from 'react-router-dom';
import { newsCardData } from '../../../utils/constants';
import Benefits from '../main/benefits/Benefits';

export default function New() {
    const params = useParams();
    const prodId = params.id ? params.id.toString() : '';

    const foundCard = newsCardData.find(function (el) {
        const currentNew = el.id == prodId;
        return currentNew;
    });

    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Container sx={{ p: { sm: '0' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
                <BreadcrumbsComponent />
                <NewComponent data={foundCard} />
            </Container>
            <NewsCarousel title="Возможно тебе будет интересно" color="#fff" width="100%" height="auto" padding="0 0 64px 0" container="60px 0 60px" />
            <Benefits />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
