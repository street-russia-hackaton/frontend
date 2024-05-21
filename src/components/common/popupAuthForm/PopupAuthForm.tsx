import { useState } from 'react';
import Popup from '../popup/Popup';
import NavAuthTitle from '../navAuthTitle/navAuthTitle';
import Login from '../login/Login';
import Register from '../register';

interface PopupProps {
    open: boolean;
    onClose: () => void;
    onClick: () => void;
}

export default function PopupAuthForm({ open, onClose, onClick }: PopupProps) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    return (
        <Popup open={open} onClose={onClose} onClick={onClick}>
            <NavAuthTitle onRegister={handleRegisterClick} onLogin={handleLoginClick} />
            {showLogin && <Login onLogin={() => {}} />}
            {showRegister && <Register onRegister={() => {}} />}
        </Popup>
    );
}
