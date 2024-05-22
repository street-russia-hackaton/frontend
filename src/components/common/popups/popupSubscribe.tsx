import { useState } from 'react';
import Popup from './Popup';
import NavAuthTitle from '../navPopupTitle/navPopupTitle';
import Subscribe from '../forms/Subscribe';
import Donate from '../forms/Donate';

interface PopupProps {
    open: boolean;
    onClose: () => void;
    onClick: () => void;
}

export default function PopupSubscribe({ open, onClose, onClick }: PopupProps) {
    const [showSubscribe, setShowSubscribe] = useState(true);

    const handleSubscribeClick = () => {
        setShowSubscribe(true);
    };

    const handleDonateClick = () => {
        setShowSubscribe(false);
    };

    const tabs = [
        { label: 'Подписка', onClick: handleSubscribeClick },
        { label: 'Разовый донат', onClick: handleDonateClick },
    ];
    return (
        <Popup open={open} onClose={onClose} onClick={onClick}>
            <NavAuthTitle tabs={tabs} margin="0 0 0 30px" />
            {showSubscribe ? <Subscribe onSubscribe={() => {}} /> : <Donate onDonate={() => {}} />}
        </Popup>
    );
}
