import { Select, MenuItem, FormControl, Typography } from '@mui/material';

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
        <>
            <Typography>{label}</Typography>
            <FormControl variant="outlined" fullWidth margin="normal">
                <Select id="city-select" fullWidth value={value} onChange={onChange} defaultValue="Выберите город">
                    {city?.map((city) => (
                        <MenuItem key={city.id} value={city.name}>
                            {city.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
