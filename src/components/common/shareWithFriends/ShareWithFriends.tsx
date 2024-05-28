import { Box, Link } from '@mui/material';
import TitleSecondary from '../titleSecondary/titleSecondary';
import IconVkBorder from '../../../assets/images/IconVkBorder.svg?react';
import IconTelegram from '../../../assets/images/IconTelegram.svg?react';

interface shareProps {
    title?: string;
    linkVk?: string;
    linkTg?: string;
}

export default function ShareWithFriends({ title, linkVk, linkTg }: shareProps) {
    return (
        <>
        <TitleSecondary title={title} margin='0 0 32px' />
        <Box sx={{ display: 'flex', gap: '16px', p: { sm: '0' }, m: '0' }}>
        <Link href={linkVk}><IconVkBorder /></Link>
            <Link href={linkTg}><IconTelegram /></Link>
        </Box>
        </>
    )
}
