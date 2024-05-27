import { List, ListItem } from '@mui/material';
import ObjectCard from '../objects/ObjectCard';
import { objectCardData } from '../../../utils/constants';
import { useState, useEffect } from 'react';
import { MIN_LAPTOP_DISPLAY } from '../../../utils/constants';
import useScreenResize from '../../../utils/screenResize';
import { CardObject } from '../../../types/types';

const styles = {
    cardContainer: {
        p: '40px 0 40px 0',
        width: '100%',
        display: 'grid',
        gap: '32px',
    },
    listItem: {
        p: 0,
        width: 'auto',
        display: 'block',
    },
};

interface ObjectsProps {
    filteredCards: CardObject[];
}

export default function Objects({ filteredCards }: ObjectsProps) {
    const display = useScreenResize();

    const [cardCounter, setCardCounter] = useState(0);

    function showDefaultCards() {
        if (display > MIN_LAPTOP_DISPLAY) {
            setCardCounter(6);
        } else {
            setCardCounter(3);
        }
    }

    useEffect(() => {
        showDefaultCards();
    }, [display, objectCardData]);

    return (
        <>
            {filteredCards.length !== 0 && (
                <List sx={{ ...styles.cardContainer }}>
                    {filteredCards.slice(0, cardCounter).map((data) => (
                        <ListItem key={data.id ?? 0} sx={{ ...styles.listItem }}>
                            <ObjectCard data={data} />
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    );
}
