import { Typography } from '@mui/material';

interface titleSecondaryProps {
    title?: string;
    margin?: string;
}

const styles = {
    title: {
        fontFamily: 'Benzin',
        fontSize: '24px',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        color: '#fff',
    },
};

export default function TitleSecondary({ title, margin }: titleSecondaryProps) {
    return (
        <Typography component="h3" sx={{ ...styles.title, margin: margin ? margin : '0' }}>
            {title}
        </Typography>
    );
}
