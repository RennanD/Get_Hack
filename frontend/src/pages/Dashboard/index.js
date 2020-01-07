import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { MdDateRange, MdSlideshow } from 'react-icons/md';

import { Container, Card } from './styles';

import api from '~/services/api';

export default function Dashboard() {
    const [hackathons, setHackathons] = useState([]);

    useEffect(() => {
        async function loadHackathons() {
            const response = await api.get('/hackathons');

            const data = response.data.map(h => ({
                ...h,
                formattedDate: format(
                    parseISO(h.date),
                    " dd 'de' MMM 'de' yyyy ",
                    {
                        locale: pt,
                    }
                ),
            }));

            setHackathons(data);
        }
        loadHackathons();
    }, []);

    return (
        <Container>
            <ul>
                {hackathons.map(hackathon => (
                    <Card key={String(hackathon.id)}>
                        <img src={hackathon.banner.url} alt={hackathon.title} />
                        <footer>
                            <span>
                                <MdSlideshow size={20} color="#fefefe" />
                                {hackathon.title}
                            </span>
                            <span>
                                <MdDateRange size={20} color="#fefefe" />
                                {hackathon.formattedDate}
                            </span>
                        </footer>
                    </Card>
                ))}
            </ul>
        </Container>
    );
}
