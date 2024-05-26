import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import FaqPlusIcon from '../../../assets/images/FaqPlusIcon.svg?react';
import FaqMinusIcon from '../../../assets/images/FaqMinusIcon.svg?react';
import { useState } from 'react';
import { SelectFaq } from '../../../types/types';

interface FaqSelectProps {
    select: SelectFaq;
}

const font = { width: '100%', textAlign: 'start', fontSize: '20px' };

const styles = {
    container: {
        boxShadow: 'none',
        backgroundColor: '#fff',
        borderRadius: '0',
        marginTop: '16px',
    },
    title: {
        ...font,
        fontFamily: 'Benzin',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
    },
    subtitle: {
        ...font,
    },
    text: {
        paddingTop: '0',
        margin: '0',
    },
};

export default function FaqSelect({ select }: FaqSelectProps) {
    const [clickIcon, setClickIcon] = useState(false);

    const handleChange = (isExpanded: boolean) => {
        setClickIcon(isExpanded);
    };
    return (
        <Accordion
            expanded={clickIcon}
            onChange={(_, isExpanded) => handleChange(isExpanded)}
            sx={{
                ...styles.container,
                '& .MuiButtonBase-root ': {
                    minHeight: '112px',
                },
                '&.Mui-expanded:first-of-type': { marginTop: '16px' },
            }}
        >
            <AccordionSummary
                expandIcon={!clickIcon ? <FaqPlusIcon /> : <FaqMinusIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    margin: '0',
                    height: '112px',
                    '& .MuiAccordionSummary-content': {
                        margin: '0',
                        height: '112px',
                    },
                }}
            >
                <Typography sx={styles.title}>{select.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.text}>
                <Typography sx={styles.subtitle}>{select.subtitle}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
