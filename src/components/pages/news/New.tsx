import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import NewsCarousel from '../../common/newsCarousel/NewsCarousel';
import NewsGrid from '../../common/newsGrid/NewsGrid';
import { Container } from '@mui/material';
import Background from '../../../assets/images/background-newsgrid.svg';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';

export default function New() {
    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Container sx={{ background: `url(${Background}) no-repeat right 0% top 20%`, p: { sm: '0' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
                <BreadcrumbsComponent />
                <NewsGrid title="Новости" />
            </Container>
            <NewsCarousel title="Возможно тебе будет интересно" color="#fff" width="100%" height="auto" padding="0 0 64px 0" container="60px 0 60px" />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
