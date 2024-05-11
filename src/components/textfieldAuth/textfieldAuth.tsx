import { TextField, InputLabel } from '@mui/material';

interface TextFieldAuthProps {
    label: string;
    placeholder?: string;
    value: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextFieldAuth({ label, placeholder, value, onChange, id }: TextFieldAuthProps) {
    return (
        <>
            <InputLabel>{label}</InputLabel>
            <TextField placeholder={placeholder} fullWidth value={value} onChange={onChange} id={id} />
        </>
    );
}
