import { Select, MenuItem, FormControl, Typography, Box, SelectChangeEvent } from '@mui/material';
import SelectArrow from '../../../assets/images/SelectArrow.svg';
import { useState } from 'react';
import style from './FilterSelect.module.scss';

interface SelectAuthProps {
    label?: string;
    value?: string;
    onChange: (event: SelectChangeEvent<string>) => void;
    defaultValue?: string;
    title?: string;
    items: { id: number; name: string }[];
    margin?: string;
}

const styles = {
    text: { textAlign: 'start', marginTop: '24px', marginBottom: '8px', margin: '0 0 8px 0' },
    placeholder: { textAlign: 'start', color: '#222', width: '315px', backgroundColor: '#fff', borderRadius: 0 },
    arrow: {},
};

export default function FilterSelect({ label, value, onChange, defaultValue = '', title, items, margin }: SelectAuthProps) {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const toggleSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    };
    return (
        <Box sx={{ '&:focus': { border: 'none' } }}>
            {label && <Typography sx={styles.text}>{label}</Typography>}
            <FormControl fullWidth>
                <Select
                    value={value || ''}
                    onChange={onChange}
                    onClose={() => setIsOpenSelect(false)}
                    onClick={toggleSelect}
                    open={isOpenSelect}
                    displayEmpty
                    defaultValue={defaultValue}
                    IconComponent={() => null}
                    endAdornment={<img src={SelectArrow} alt="Arrow icon" className={style.select__arrow} />}
                    sx={{ ...styles.placeholder, margin: margin ? margin : '0' }}
                    renderValue={(selected) => {
                        if (selected === '') {
                            return <Typography sx={styles.placeholder}>{title}</Typography>;
                        }
                        return selected;
                    }}
                >
                    <MenuItem value="" disabled>
                        {title}
                    </MenuItem>
                    {items.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
