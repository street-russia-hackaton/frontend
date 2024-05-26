import { MobileStepper, Box } from '@mui/material';
import ArrowRight from '../../../assets/images/ArrowRight.svg?react';
import ArrowLeft from '../../../assets/images/ArrowLeft.svg?react';
import SubmitBtn from '../btns/SubmitBtn';

interface PaginationProps {
    activeStep: number;
    handleBack: () => void;
    handleNext: () => void;
    handleShowAll: () => void;
    title?: string;
    width: string;
    margin?: string;
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '70px 60px 0',
    },
    stepper: { backgroundColor: 'transparent' },
};

export default function PaginationComponent({ activeStep, handleBack, handleNext, handleShowAll, title, width, margin }: PaginationProps) {
    return (
        <Box sx={{ ...styles.container, margin: margin ? margin : '0' }}>
            <MobileStepper
                sx={{
                    ...styles.stepper,
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: '#fff',
                        marginRight: '12px',
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: '#AA433A',
                    },
                }}
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                nextButton={null}
                backButton={null}
            />
            <Box>
                <ArrowLeft onClick={handleBack} />
                <ArrowRight onClick={handleNext} />
            </Box>
            <SubmitBtn title={title} width={width} onClick={handleShowAll} />
        </Box>
    );
}
