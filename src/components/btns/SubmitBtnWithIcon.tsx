import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';

interface SubmitBtnWithIconProps {
    title?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    disabled?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
}

const styles = {
    container: {
        backgroundColor: '#fff',
        border: '1px solid #000',
        borderRadius: '0',
    },
    title: {
        lineHeight: '1.25',
        fontWeight: '400',
        color: '#000',
        textTransform:'uppercase',
    },
};

export default function SubmitBtnWithIcon({ title, width, height, fontSize, disabled, onClick, icon }: SubmitBtnWithIconProps) {
    return (
        <Button
            variant="contained"
            disableElevation
            startIcon={icon}
            sx={{
                ...styles.container,
                width: width ? width : '553px',
                height: height ? height : '54px',
                '&:hover': {
                    backgroundColor: '#fff',
                    opacity: '0.9',
                },
                '&:focus': {
                    backgroundColor: '#fff',
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
                }}
            >
                {title}
            </Typography>
        </Button>
    );
}
