import { Box, CardMedia, Modal } from '@mui/material';
import CloseIcon from '../../../assets/images/CloseIcon.svg';
import { useEffect, useState } from 'react';
import { PopupProps } from '../../../types/types';

const styles = {
    container: {
        position: 'absolute',
        top: '50vh',
        left: '50vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.27)',
        backdropFilter: 'blur(27px)',
        padding: '60px 48px 48px',
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
