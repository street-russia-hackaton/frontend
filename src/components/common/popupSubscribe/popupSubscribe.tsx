import { useState } from 'react';
import Popup from '../popup/Popup';
import NavAuthTitle from '../navPopupTitle/navPopupTitle';
import Subscribe from '../subscribe/Subscribe';
import Donate from '../donate/Donate';

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
