import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const breadcrumbNameMap: { [key: string]: string } = {
    '/news': 'Все новости',
    '/news/:id': 'Новость',
    '/about': 'О нас',
    '/events': 'Все мероприятия',
    '/events/:id': 'Мероприятие',
    '/regional': 'Региональные отделения',
};

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

interface BreadcrumbsComponentProps {
    margin?: string;
}

function LinkRouter(props: LinkRouterProps) {
    return <Link {...props} component={RouterLink as typeof RouterLink} />;
}

export default function BreadcrumbsComponent({ margin }: BreadcrumbsComponentProps) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs sx={{ color: '#D2D1D0', fontSize: '20px', letterSpacing: '0.02em', height: '150px', width: '91%', display: 'flex', alignItems: 'center', margin: margin ? margin : '0 auto' }} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <LinkRouter style={{ color: '#D2D1D0' }} underline="hover" color="inherit" to="/main">
                Главная страница
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="#D2D1D0" fontSize="20px" letterSpacing="0.02em" key={to}>
                        {breadcrumbNameMap[to]}
                    </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                        {breadcrumbNameMap[to]}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
}
