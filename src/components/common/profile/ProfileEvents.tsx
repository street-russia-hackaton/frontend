import { Box } from '@mui/material';
import { EventCardData } from '../../../utils/constants';
import EventCard from '../events/eventCard/EventCard';
import { useNavigate } from 'react-router-dom';
import NavPopupTitle from '../navPopupTitle/navPopupTitle';
import { useState } from 'react';
import { CardUser } from '../../../types/types';
import NotFound from '../notFound/NotFound';
import SubmitBtnWithIcon from '../btns/SubmitBtnWithIcon';

const styles = {
    cards: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 40px ' },
};

interface userCardProps {
    data: CardUser;
}

export default function ProfileEvents({ data }: userCardProps) {
    const navigate = useNavigate();
    const primaryFilteredEvents = EventCardData.slice(0, 2);
    const secondaryFilteredEvents = EventCardData.slice(0, 4);
    const [showLeft, setShowLeft] = useState(true);

    console.log(data);

    const handleLeftClick = () => {
        setShowLeft(true);
    };

    const handleRightClick = () => {
        setShowLeft(false);
    };

    const handleLinkClick = () => {
        console.log('Navigating to /events/:id');
        navigate('/events/:id');
    };

    const handleButtonClick = () => {
        navigate('/events');
    };

    const userTabs = [
        { label: 'Ты зарегистрирован', onClick: handleLeftClick },
        { label: 'Твои избранные', onClick: handleRightClick },
    ];

    const participantTabs = [
        { label: 'Действующие', onClick: handleLeftClick },
        { label: 'Архив', onClick: handleRightClick },
    ];

    return (
        <>
            <NavPopupTitle tabs={data.role === '' ? userTabs : participantTabs} />
            {data.role === '' && (
                <>
                    <NotFound title="Ты пока не зарегистрирован ни на одно мероприятие, переходи в раздел мероприятий и найди, что тебе нравится " />
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: { sm: '0' }, m: '32px 0 0' }}>
                    <SubmitBtnWithIcon title='Перейти в мероприятия' width='286px' onClick={handleButtonClick}/>
                    </Box>
                </>
            )}
            {data.role !== '' && showLeft && (
                <Box sx={styles.cards}>
                    {primaryFilteredEvents.map((data, index) => (
                        <EventCard key={index} data={data} onClick={handleLinkClick} cardStyle={index === (primaryFilteredEvents.length - 1 && index !== 2) ? { marginTop: '-30px' } : {}} />
                    ))}
                </Box>
            )}
            {data.role !== '' && !showLeft && (
                <Box sx={styles.cards}>
                    {secondaryFilteredEvents.map((data, index) => (
                        <EventCard key={index} data={data} onClick={handleLinkClick} cardStyle={index === (primaryFilteredEvents.length - 1 && index !== 2) ? { marginTop: '-30px' } : {}} />
                    ))}
                </Box>
            )}
        </>
    );
}
