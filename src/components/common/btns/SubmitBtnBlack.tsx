import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface SubmitBtnBlackProps {
    title?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    disabled?: boolean;
    margin?: string;
    onClick?: () => void;
}

const styles = {
    container: {
        backgroundColor: '#000',
        borderRadius: '0',
    },
    title: {
        lineHeight: '1.25',
        fontWeight: '400',
    },
};

export default function SubmitBtnBlack({ title, width, height, fontSize, disabled, margin, onClick }: SubmitBtnBlackProps) {
    return (
        <Button
            variant="contained"
            disableElevation
            sx={{
                ...styles.container,
                width: width ? width : '553px',
                height: height ? height : '54px',
                '&:hover': {
                    backgroundColor: '#000',
                    opacity: '0.9',
                },
                '&:focus': {
                    backgroundColor: '#000',
                },
                margin: margin ? margin : '0',
            }}
            disabled={disabled}
            onClick={onClick}
        >
            <Typography
                component="h2"
                sx={{
                    ...styles.title,
                    fontSize: fontSize ? fontSize : '20px',
                }}
            >
                {title}
            </Typography>
        </Button>
    );
}
