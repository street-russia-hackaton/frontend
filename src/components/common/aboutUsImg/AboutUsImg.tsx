import { Box, CardMedia } from '@mui/material';
import { ImgAboutUsId } from '../../../types/types';
import { AboutUsImgSize } from '../../../utils/constants';

interface AboutUsImgProps {
    borderColor?: string;
    img?: string;
}

const styles = {
    container: { maxWidth: '538px', position: 'absolute' },
};

export default function AboutUsImg({ id, borderColor, img }: AboutUsImgProps & { id: ImgAboutUsId }) {
    const { width, height, top, left } = AboutUsImgSize[id] || { width: '538px', height: '350px', top: '0', left: '0' };

    return (
        <Box sx={{ ...styles.container, top, left }}>
            <CardMedia component="img" src={img} sx={{ width, height, zIndex: '2', position: 'absolute' }} />
            <Box
                sx={{
                    position: 'absolute',
                    border: `1px solid ${borderColor || '#fff'}`,
                    width,
                    height,
                    top: '32px',
                    left: '32px',
                    zIndex: '-1',
                }}
            ></Box>
        </Box>
    );
}
