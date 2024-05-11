import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
    title?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    color?: string;
    borderRadius?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const styles = {
    container: {
        textTransform: 'none',
    },
    title: {
        fontFamily: 'Inter',
        lineHeight: '1.25',
    },
    icon: {
        marginRight: '8px',
        width: '20px',
        height: '22px',
    },
};

export default function SubmitButton({
    title,
    width,
    height,
    fontSize,
    disabled,
    borderRadius,
    color,

    onClick,
}: SubmitButtonProps) {
    return (
        <Button
            variant="contained"
            disableElevation
            sx={{
                ...styles.container,
                backgroundColor: '#000',
                width: width ? width : '553px',
                height: height ? height : '54px',
                borderRadius: borderRadius ? borderRadius : '0',
                '&:hover': {
                    backgroundColor: '#000',
                    opacity: '0.9',
                },
                '&:focus': {
                    backgroundColor: '#000',
                },
            }}
            disabled={disabled}
            onClick={onClick}
        >
            <Typography
                component="h2"
                sx={{
                    ...styles.title,
                    fontSize: fontSize ? fontSize : '20px',
                    fontWeight: '400',
                    color: color ? color : '#fff',
                }}
            >
                {title}
            </Typography>
        </Button>
    );
}
