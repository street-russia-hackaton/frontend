import Popup from './Popup';
import NavAuthTitle from '../navPopupTitle/navPopupTitle';
import { PopupProps } from '../../../types/types';
import Join from '../forms/Join';

export default function PopupJoin({ open, onClose, onClick }: PopupProps) {
    const handleJoinClick = () => {
        console.log('Login tab clicked');
    };

    const tabs = [{ label: 'Вступить в организацию', onClick: handleJoinClick }];

    return (
        <Popup open={open} onClose={onClose} onClick={onClick}>
            <NavAuthTitle tabs={tabs} />
            <Join onJoin={() => {}} />
        </Popup>
    );
}
