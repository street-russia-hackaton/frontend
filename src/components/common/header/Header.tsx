import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import PrimaryButton from '../../btns/PrimaryButton';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import ProfileIcon from '../../../assets/images/profile-icon.svg';
import Logo from '../../../assets/images/logo-white.png';
import { useNavigate } from 'react-router-dom';
import ListItemLink from '../../common/links/ListItemLink';

function Header() {
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [isLogin, setIsLogin] = React.useState<boolean | HTMLElement>(false);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogin = () => {
        navigate('/login', { replace: false });
    };

    const handleSubscription = () => {
        navigate('/subscription', { replace: false });
    };

    const handleProfile = () => {
        navigate('/profile', { replace: false });
    };

    const handleLogout = () => {
        // TODO: to logout
        setIsLogin(false);
    };

    return (
        <AppBar position="static" sx={{ height: 72, display: 'flex', alignItems: 'center' }} >
            <Container sx={{ width: '91%', height: '100%', maxWidth: { lg: 1312 }, p: { xs: 0, lg: 0 } }}>
                <Toolbar disableGutters sx={{ display: 'flex', height: '100%', justifyContent: 'space-between' }}>
                    <img src={Logo} alt="" />

                    <List sx={{ display: 'flex', gap: '32px', justifyContent: 'center', width: 'auto', p: 0 }}>
                        <ListItemLink to="/about" primary="О нас" />
                        <ListItemLink to="/news" primary="Новости" />
                        <ListItemLink to="/events" primary="Мероприятия" />
                        <ListItemLink to="/regional" primary="Региональные отделения" />
                    </List>

                    <Box sx={{ display: 'flex', gap: '20px', }}>
                        <PrimaryButton width='138px' title="Поддержать" height="40" fontSize="16px" disabled={false} lineHeight='1.5' onClick={handleSubscription} />

                        <Box sx={{  }}>
                            <IconButton onClick={isLogin ? handleOpenUserMenu : handleLogin} sx={{ p: 0 }}>
                                <img src={ProfileIcon} alt="" />
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleProfile}>
                                    <Typography textAlign="center">Мой профиль</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Выйти</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
