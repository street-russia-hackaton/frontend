import { Box, CardMedia, Modal } from '@mui/material';

import CloseIcon from '../../../assets/images/CloseIcon.svg';
import { useEffect, useState } from 'react';

interface PopupProps {
    open: boolean;
    onClose: () => void;
    onClick: () => void;
    children?: React.ReactNode;
}

const styles = {
    container: {
        position: 'absolute',
        top: '52%',
        left: '51%',
        transform: 'translate(-50%, -50%)',
        width: '649px',
        height: '900px',
        backgroundColor: 'rgba(255, 255, 255, 0.27)',
        backdropFilter: 'blur(27px)',
        padding: '20px',
        zIndex: 1,
    },
    closeIcon: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        cursor: 'pointer',
        width: '32px',
        height: '32px',
        zIndex: 3,
    },
};

export default function Popup({ open, onClose, onClick, children }: PopupProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (open && !isOpen) {
            setIsOpen(true);
        }
    }, [open, isOpen]);

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={styles.container}>
                <CardMedia component="img" src={CloseIcon} sx={styles.closeIcon} onClick={onClick} />
                {children}
            </Box>
        </Modal>
    );
}
