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
    items: { id: number | string; name: string; path?: string[]; isHere?: string }[] ;
    margin?: string;
    width?: string;
    height?: string;
}

const styles = {
    text: { textAlign: 'start', fontSize: '16px' },
    placeholder: { textAlign: 'start', color: '#222', backgroundColor: '#fff', borderRadius: 0, fontSize: '16px' },
};

export default function FilterSelect({ label, value, onChange, defaultValue = '', title, items, margin, width, height }: SelectAuthProps) {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const toggleSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    };
    return (
        <Box sx={{ '&:focus': { border: 'none' } }}>
            {label && <Typography sx={{ ...styles.text }}>{label}</Typography>}
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
                    sx={{ ...styles.placeholder, margin: margin ? margin : '0', width: width ? width : '315px', height: height ? height : '57px' }}
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
