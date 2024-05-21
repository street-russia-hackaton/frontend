import { useState } from 'react';
import Popup from '../popup/Popup';
import NavAuthTitle from '../navPopupTitle/navPopupTitle';
import Login from '../login/Login';
import Register from '../register/Register';

interface PopupProps {
    open: boolean;
    onClose: () => void;
    onClick: () => void;
}

export default function PopupAuthForm({ open, onClose, onClick }: PopupProps) {
    const [showLogin, setShowLogin] = useState(true);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleRegisterClick = () => {
        setShowLogin(false);
    };

    const tabs = [
        { label: 'Войти', onClick: handleLoginClick },
        { label: 'Регистрация', onClick: handleRegisterClick },
    ];
    return (
        <Popup open={open} onClose={onClose} onClick={onClick}>
            <NavAuthTitle tabs={tabs} />
            {showLogin ? <Login onLogin={() => {}} /> : <Register onRegister={() => {}} />}
        </Popup>
    );
}
