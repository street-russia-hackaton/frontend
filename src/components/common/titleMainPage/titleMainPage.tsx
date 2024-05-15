import { Box, Typography } from '@mui/material';

interface titleMainPageProps {
    title?: string;
    background?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
}

const styles = {
    container: { display: 'flex', alignItems: 'center', justifyContent: 'start', backgroundSize: 'cover' },
    title: { fontFamily: 'Benzin', fontWeight: '400', fontSize: '36px', color: '#222', textTransform: 'uppercase' },
};

export default function TitleMainPage({ title, background, width, height, padding, margin }: titleMainPageProps) {
    return (
        <Box sx={{ ...styles.container, background: background ? `url(${background}) no-repeat center center` : '', width: width ? width : '285px', height: height ? height : '150px', margin: margin ? margin : '0' }}>
            <Typography component="h2" sx={{ ...styles.title, padding: padding ? padding : '0 0 12px 15px' }}>
                {title}
            </Typography>
        </Box>
    );
}
