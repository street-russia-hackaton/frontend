import { Typography } from '@mui/material';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';

export default function About() {
    return (
        <>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Typography>Us</Typography>
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </>
    );
}
