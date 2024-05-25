import { forwardRef } from 'react';
import { TextField, InputLabel, Box, FormControl, FormHelperText } from '@mui/material';

interface TextFieldProps {
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
    borderBottom?: boolean | string;
}

const styles = {
    container: { display: 'flex', alignItems: 'start', },
    label: { color: '#fff', fontSize: '20px', width: 160},
    text: {
        display: 'flex',
        justifyContent: 'start',
        width: '100%',
        color: '#fff',
        borderColor: 'none',
    },
};

const ProfileTextField = forwardRef<HTMLInputElement, TextFieldProps>(({ label, placeholder, value, onChange, onBlur, name, type = 'text', margin, error, borderBottom }, ref) => {
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
            <FormControl fullWidth error={error} sx={{ height: '30px' }}>
                <TextField
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    type={type}
                    fullWidth
                    sx={{...styles.text, borderBottom: borderBottom ? borderBottom : 'none',}}
                    inputRef={ref}
                    InputProps={{
                        style: {
                            fontSize: '16px',
                            textDecoration: 'start',
                            padding: '0',
                            height: '30px',
                            color: '#fff'
                        },
                    }}
                />
            </FormControl>
        </Box>
    );
});

export default ProfileTextField;
