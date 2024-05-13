import { Select, MenuItem, FormControl, Typography, Box } from '@mui/material';

// interface City {
//     id: number;
//     name: string;
// }

interface SelectAuthProps {
    label?: string;
    value?: string;
    placeholder?: string;
    onChange?: () => void;

    // cities?: City[];
}

const styles = {
    text: { textAlign: 'start', marginTop: '24px', marginBottom: '8px' },
    placeholder: { textAlign: 'start', color: 'grey' },
};

const city = [
    { id: 0, name: 'Выберите город' },
    { id: 1, name: 'Москва' },
    { id: 2, name: 'Санкт-Петербург' },
    { id: 3, name: 'Екатеринбург' },
    { id: 4, name: 'Казань' },
    { id: 5, name: 'Владивосток' },
];

export default function SelectAuth({ label, value, onChange }: SelectAuthProps) {
    return (
        <Box>
            <Typography sx={styles.text}>{label}</Typography>
            <FormControl variant="outlined" fullWidth>
                <Select id="city-select" fullWidth value={value} onChange={onChange} defaultValue="Выберите город" sx={styles.placeholder}>
                    {city?.map((city) => (
                        <MenuItem key={city.id} value={city.name}>
                            {city.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
