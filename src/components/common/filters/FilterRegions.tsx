import { useState } from 'react';
import FilterSelect from '../filterSelect/FilterSelect';
import { Box, SelectChangeEvent } from '@mui/material';
import { mapData } from '../../pages/main/map/mapConstant';

export default function FilterRegions() {
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    const handleRegionChange = (event: SelectChangeEvent<string>) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <Box>
            <FilterSelect value={selectedRegion} onChange={handleRegionChange} items={mapData} title="Выбери свой регион" margin="0" width="100%" height="48px" />
        </Box>
    );
}
