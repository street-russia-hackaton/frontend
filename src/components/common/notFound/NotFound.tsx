import { Box } from '@mui/material';
import NotFoundIcon from '../../../assets/images/NotFoundIcon.svg?react';
import TitleSecondary from '../titleSecondary/titleSecondary';

const styles = {

};

interface DataProps {
    title: string;
}

export default function NotFound({ title }: DataProps) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', p: { sm: '0' }, m: '64px auto 0', width: '100%', maxWidth: { lg: '1320px' } }}>
            <NotFoundIcon style={{width: '377px', height: '220px'}} />
            <TitleSecondary title={title} />
        </Box>
    );
}
