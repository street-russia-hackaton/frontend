import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface SubmitBtnBlackProps {
    title?: string;
    width?: string;
    backgroundColor?: string;
    color?: string;
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

export default function SubmitBtnColor({ title, width, height, backgroundColor, color, fontSize, disabled, margin, onClick }: SubmitBtnBlackProps) {
    return (
        <Button
            variant="contained"
            disableElevation
            sx={{
                ...styles.container,
                width: width ? width : '553px',
                height: height ? height : '54px',
                backgroundColor: backgroundColor ? backgroundColor : '#000',
                color: color ? color : '#fff',
                '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: '0.9',
                },
                '&:focus': {
                    backgroundColor: 'transparent',
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
