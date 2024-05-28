import { forwardRef } from 'react';
import { TextField, InputLabel, Box, FormControl, FormHelperText } from '@mui/material';

interface TextFieldAuthProps {
    label: string;
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    name: string;
    type?: string;
    margin: string;
    error?: boolean;
    helperText?: string;
}

const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'start' },
    label: { color: '#fff', fontSize: '16px', marginBottom: '8px' },
    text: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff',
    },
    helperText: {
        margin: ' 0',
        fontSize: '14px',
        backgroundColor: 'transparent',
    },
};

const TextFieldAuth = forwardRef<HTMLInputElement, TextFieldAuthProps>(({ label, placeholder, value, onChange, onBlur, name, type = 'text', margin, error, helperText }, ref) => {
    return (
        <Box
            sx={{
                ...styles.container,
                margin: margin ? margin : '0',
                '&.MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: 0,
                },
            }}
        >
            <InputLabel sx={styles.label}>{label}</InputLabel>
            <FormControl fullWidth error={error} sx={{ height: '60px' }}>
                <TextField
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    type={type}
                    fullWidth
                    sx={styles.text}
                    inputRef={ref}
                    InputProps={{
                        style: {
                            fontSize: '16px',
                            textDecoration: 'start',
                        },
                    }}
                />
                {helperText && <FormHelperText sx={styles.helperText}>{helperText}</FormHelperText>}
            </FormControl>
        </Box>
    );
});

export default TextFieldAuth;
