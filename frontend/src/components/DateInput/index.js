import React, { useState } from 'react';

import DatePiker from 'react-datepicker';

import { MdEventAvailable } from 'react-icons/md';

import { Container } from './styles';

export default function DateInput({ eventDate }) {
    const [date, setDate] = useState(eventDate);

    return (
        <Container>
            <DatePiker
                startDate={date}
                onChange={newDate => setDate(newDate)}
            />
            <MdEventAvailable color="rgba(255,255,255,0.3)" />
        </Container>
    );
}
