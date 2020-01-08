import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { MdDateRange, MdLink, MdDvr } from 'react-icons/md';

import { Container, Card } from './styles';

import api from '~/services/api';
import { hackDetailRequest } from '~/store/modules/hackathon/actions';

export default function Dashboard() {
    const [hackathons, setHackathons] = useState([]);

    const dispatch = useDispatch();

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
                                <MdDvr size={20} color="#fefefe" />
                                {hackathon.title}
                            </span>
                            <span>
                                <MdDateRange size={20} color="#fefefe" />
                                {hackathon.formattedDate}
                            </span>
                            <button
                                type="button"
                                onClick={() =>
                                    dispatch(hackDetailRequest(hackathon.id))
                                }
                            >
                                <MdLink size={20} color="#fefefe" />
                                Vizualisar
                            </button>
                        </footer>
                    </Card>
                ))}
            </ul>
        </Container>
    );
}
