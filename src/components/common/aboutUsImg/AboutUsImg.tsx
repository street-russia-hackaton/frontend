import { Box, CardMedia } from '@mui/material';

interface AboutUsImgProps {
    border?: string;
    img?: string;
    height?: string;
    width?: string;
}

const styles = {
    container: { maxWidth: '583px' },
};

export default function AboutUsImg({ border, img, height, width }: AboutUsImgProps) {
    return (
        <Box sx={{ ...styles.container, border: border ? border : '1px solid #fff' }}>
            <CardMedia component="img" src={img} sx={{ width: width ? width : '583px', height: height ? height : '350px' }} />
        </Box>
    );
}
