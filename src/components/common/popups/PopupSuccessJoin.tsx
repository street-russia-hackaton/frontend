import Popup from './Popup';
import { PopupProps } from '../../../types/types';
import SuccessJoin from '../successJoin.tsx/SuccessJoin';

export default function PopupSuccessJoin({ open, onClose, onClick }: PopupProps) {
    return (
        <Popup open={open} onClose={onClose} onClick={onClick}>
            <SuccessJoin />
        </Popup>
    );
}
