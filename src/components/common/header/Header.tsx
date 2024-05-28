import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import ProfileIcon from '../../../assets/images/profile-icon.svg';
import Logo from '../../../assets/images/logo-white.png';
import { useNavigate } from 'react-router-dom';
import ListItemLink from '../links/ListItemLink';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';
import PopupAuthForm from '../popups/PopupAuthForm';
import { Link } from 'react-router-dom';
import PopupSubscribe from '../popups/popupSubscribe';

interface HeaderProps {
    backgroundColor?: string;
    backdropFilter?: string;
}

function Header({ backgroundColor, backdropFilter }: HeaderProps) {
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [isLogin, setIsLogin] = React.useState<boolean | HTMLElement>(false);
    console.log(isLogin);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleProfile = () => {
        navigate('/profile', { replace: false });
    };

    const handleLogout = () => {
        // TODO: to logout
        setIsLogin(false);
    };

    const [openAuthPopup, setOpenAuthPopup] = React.useState(false);
    const [openSubscribePopup, setOpenSubscribePopup] = React.useState(false);

    const handleOpenAuthPopup = () => {
        setOpenAuthPopup(true);
    };

    const handleOpenSubscribePopup = () => {
        setOpenSubscribePopup(true);
    };

    const handleClosePopup = () => {
        setOpenAuthPopup(false);
        setOpenSubscribePopup(false);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ height: 72, display: 'flex', alignItems: 'center', boxShadow: 'none', transition: 'none', backgroundColor: backgroundColor || '#222', backdropFilter: backdropFilter || 'none', border: 'none' }}>
                <Container sx={{ width: '91%', height: '100%', maxWidth: { lg: 1312 }, p: { xs: 0, lg: 0 } }}>
                    <Toolbar disableGutters sx={{ display: 'flex', height: '100%', justifyContent: 'space-between' }}>
                        <Link to="/main">
                            <img src={Logo} alt="Логотип." />
                        </Link>

                        <List sx={{ display: 'flex', gap: '32px', justifyContent: 'center', width: 'auto', p: 0 }}>
                            <ListItemLink to="/about" primary="О нас" />
                            <ListItemLink to="/news" primary="Новости" />
                            <ListItemLink to="/events" primary="Мероприятия" />
                            <ListItemLink to="/regional" primary="Региональные отделения" />
                        </List>

                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <SubmitBtnWithIcon width="138px" title="Поддержать" height="40" fontSize="16px" disabled={false} onClick={handleOpenSubscribePopup} />
                            <PopupSubscribe open={openSubscribePopup} onClose={handleClosePopup} onClick={handleClosePopup} />

                            <Box sx={{}}>
                                <IconButton onClick={handleOpenAuthPopup} sx={{ p: 0 }}>
                                    <img src={ProfileIcon} alt="Profile" />
                                </IconButton>
                                <PopupAuthForm open={openAuthPopup} onClose={handleClosePopup} onClick={handleClosePopup} />

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
            <Toolbar sx={{ height: 72, background: '#222', border: 'none' }} />
        </>
    );
}
export default Header;
