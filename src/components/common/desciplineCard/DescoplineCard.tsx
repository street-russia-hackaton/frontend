import style from './DesciplineCard.module.scss';
import CloseIcon from '../../../assets/images/CloseIcon.svg?react';
import { Box, CardMedia, Typography } from '@mui/material';
import { DesciplineCard } from '../../../types/types';

interface DisceplineCardProps {
    data: DesciplineCard;
    isExpanded: boolean;
    onClick: () => void;
    otherCardsShrunk: boolean;
}

const styles = {
    container: {
        position: 'relative',
        backgroundColor: '#222',
        cursor: 'pointer',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
    },
    backgroundContainer: {
        position: 'relative',
        width: '892px',
        height: '649px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    textContainer: { position: 'absolute', top: 0, left: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        textTransform: 'uppercase',
        transform: 'rotate(-90deg) translateY(100%)',
        transformOrigin: 'bottom left',
        position: 'absolute',
        fontSize: '24px',
        fontFamily: 'Benzin',
        letterSpacing: '2%',
        bottom: '28px',
        left: '26px',
        whiteSpace: 'nowrap',
        transition: 'left 0.3s ease',
    },
    text: {
        fontSize: '16px',
        marginTop: '28px',
        maxWidth: '740px',
    },
    blackOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to right, transparent 0%, rgba(34, 34, 34, 0.64) 5%, rgba(34, 34, 34, 0.64) 100%)',
    },
    videoContainer: {
        position: 'absolute',
        top: '290px',
        maxWidth: '560px',
    },
};

export default function DisceplineCard({ data, isExpanded, onClick, otherCardsShrunk }: DisceplineCardProps) {
    const { title, text, subtitle, videoSrc, imageSrc } = data;

    return (
        <Box onClick={onClick} sx={{ ...styles.container, width: isExpanded ? '62vw' : otherCardsShrunk ? '40px' : '120px' }}>
            <Box sx={styles.backgroundContainer}>
                <Box sx={styles.blackOverlay}></Box>
                {isExpanded && <CloseIcon className={style.desciplineCard__icon} onClick={onClick} />}
                <CardMedia component="img" src={imageSrc} sx={styles.image} />
            </Box>
            <Typography sx={{ ...styles.title, left: isExpanded ? '26px' : otherCardsShrunk ? 0 : '26px' }}>{title}</Typography>
            {isExpanded && (
                <Box sx={styles.textContainer}>
                    <Typography component="p" sx={styles.text}>
                        {text}
                    </Typography>
                    <Typography component="p" sx={{ ...styles.text, marginTop: '10px' }}>
                        {subtitle}
                    </Typography>
                    <Box sx={{ ...styles.videoContainer }}>
                        <iframe width="500" height="325" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
