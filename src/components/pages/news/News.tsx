import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import NewsCarousel from '../../common/news/NewsCarousel';
import { Container } from '@mui/material';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import NewsComponent from '../../common/news/NewsComponent';

//TODO: открытие отдельной новости, фильтрация

export default function News() {
    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Container sx={{ p: { sm: '0' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
                <BreadcrumbsComponent />
                <NewsComponent />
            </Container>
            <NewsCarousel title="Возможно тебе будет интересно" color="#fff" width="100%" height="auto" padding="0 0 64px 0" container="60px 0 60px" />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
