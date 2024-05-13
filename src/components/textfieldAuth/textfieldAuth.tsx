import { TextField, InputLabel, Box } from '@mui/material';

interface TextFieldAuthProps {
    label: string;
    placeholder?: string;
    value: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'start', width: '553px', marginTop: '24px' },
    label: { color: '#000', fontSize: '16px', marginBottom: '8px' },
    input: { height: '48px', display: 'flex', justifyContent: 'center' },
};

export default function TextFieldAuth({ label, placeholder, value, onChange, id }: TextFieldAuthProps) {
    return (
        <Box sx={styles.container}>
            <InputLabel sx={styles.label}>{label}</InputLabel>
            <TextField placeholder={placeholder} fullWidth value={value} onChange={onChange} id={id} sx={styles.input} />
        </Box>
    );
}
