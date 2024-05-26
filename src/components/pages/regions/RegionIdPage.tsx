import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import BreadcrumbsComponent from '../../common/breadcrumbs/Breadcrumbs';
import TitleMainPage from '../../common/titleMainPage/titleMainPage';
import { Box, CardMedia, Typography } from '@mui/material';
import { curators } from '../../../utils/constants';
import Benefits from '../main/benefits/Benefits';
import KomiRegionImg from '../../../assets/images/KomiRegionImg.svg';
import CuratorCard from '../../common/curatorCard/CuratorCard';
import TitleSecondary from '../../common/titleSecondary/titleSecondary';
import Partners from '../../common/partners/Partners';
import BackgroundKomi from '../../../assets/images/KomiBackground.svg';
import MapKomi from '../../../assets/images/MapKomi.svg';
import MapKomiOutline from '../../../assets/images/MapKomiOutline.svg';
import RegionNav from './RegionNav';

const styles = {
    image: { width: '650px', height: '401px' },
    text: { display: 'flex', flexDirection: 'column', alignItems: 'start', maxWidth: '629px' },
};

export default function RegionIdPage() {
    return (
        <Box sx={{ height: '100%' }}>
            <Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
            <Box sx={{ margin: '0 60px', padding: '0' }}>
                <BreadcrumbsComponent margin="0" />
                <TitleMainPage title="Республика Коми" color="#fff" width="65vw" padding="0" height="54px" />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '64px' }}>
                    <CardMedia component="img" src={KomiRegionImg} sx={styles.image} />
                    <Box sx={styles.text}>
                        <Typography component="p" sx={{ marginBottom: '30px' }}>
                            Республика Коми — край несметных природных богатств и территория самобытной культуры северных народов. В недрах региона хранятся все элементы таблицы Менделеева. Отсюда берет начало российская нефтяная промышленность. Здесь огромные лесные просторы пересечены сетью полноводных хрустальных рек.{' '}
                        </Typography>
                        <Typography component="p">Республику по праву называют родиной лыж. Фрагмент древнейшей лыжи сголовой лося можно увидеть в отделе этнографии Национального музея Республики Коми, ее возраст — более 8 тысяч лет.</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ position: 'absolute', right: 60 }}>
                        <Box sx={{ display: 'flex', marginTop: '130px' }}>
                            <CardMedia component="img" src={BackgroundKomi} sx={{ width: '137px', marginRight: '10px' }} />
                            <CardMedia component="img" src={BackgroundKomi} sx={{ width: '137px' }} />
                        </Box>
                        <Box sx={{ position: 'relative', marginTop: '-240px' }}>
                            <CardMedia component="img" src={MapKomi} sx={{ width: '647px' }} />
                            <CardMedia component="img" src={MapKomiOutline} sx={{ width: '647px', position: 'absolute', top: 30, left: 30, zIndex: -1 }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '64px' }}>
                        <TitleSecondary title="Кураторы" />
                        <CuratorCard key={1} data={curators[2]} />
                    </Box>
                </Box>
                <Partners />
            </Box>
            <RegionNav />
            <Benefits />
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)" />
        </Box>
    );
}
