import React, { useState } from 'react';

import { parseISO } from 'date-fns';

import { MdEventAvailable } from 'react-icons/md';

import { Container, Date } from './styles';

export default function DateInput({ eventDate }) {
    const [date, setDate] = useState(eventDate);

    return (
        <Container>
            <Date
                showPopperArrow={false}
                selected={date}
                onChange={newDate => setDate(newDate)}
                inline
            />

            <MdEventAvailable color="rgba(255,255,255,0.3)" size={24} />
        </Container>
    );
}
