import { Box, Typography } from '@mui/material';
import { regionalDepartments } from '../../../utils/constants';

interface RegionListProps {
    onClick: () => void;
}

const styles = {
    container: { margin: '64px 0 120px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '32px' },
    letter: { fontFamily: 'Benzin', marginBottom: '20px' },
    text: { listStyle: 'none', padding: '0', margin: '0' },
    department: { textDecoration: 'none', color: '#fff', cursor: 'pointer' },
};

export default function RegionList({ onClick }: RegionListProps) {
    return (
        <Box sx={styles.container}>
            {regionalDepartments.map(({ letter, departments }) => (
                <Box key={letter}>
                    <Typography component="p" sx={styles.letter}>
                        {letter}
                    </Typography>
                    <ul style={styles.text}>
                        {departments.map((department, index) => (
                            <li key={index} style={{ marginTop: '16px' }}>
                                <Box onClick={onClick} style={styles.department}>
                                    {department}
                                </Box>
                            </li>
                        ))}
                    </ul>
                </Box>
            ))}
        </Box>
    );
}
