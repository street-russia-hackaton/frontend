import { TextField, InputLabel, Box } from '@mui/material';

interface TextFieldAuthProps {
    label: string;
    placeholder?: string;
    value: string;
    id: string;
    margin?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'start', width: '553px' },
    label: { color: '#fff', fontSize: '16px', marginBottom: '8px' },
    text: { display: 'flex', justifyContent: 'center', width: '100%', backgroundColor: '#fff' },
};

export default function TextFieldAuth({ label, placeholder, value, onChange, id, margin }: TextFieldAuthProps) {
    return (
        <Box
            sx={{
                ...styles.container,
                margin: margin ? margin : '0',
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderRadius: 0,
                    },
                },
            }}
        >
            <InputLabel sx={styles.label}>{label}</InputLabel>
            <TextField
                placeholder={placeholder}
                fullWidth
                value={value}
                onChange={onChange}
                id={id}
                sx={styles.text}
                InputProps={{
                    style: {
                        fontSize: '16px',
                        border: 'none',
                        textDecoration: 'start',
                    },
                }}
            />
        </Box>
    );
}
