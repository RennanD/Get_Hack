import React from 'react';

import { useSelector } from 'react-redux';

import { MdCancel, MdEdit } from 'react-icons/md';

import { Container, Banner, ActionButton } from './styles';

export default function Details() {
    const hackathon = useSelector(state => state.hackathon.details);

    return (
        <Container>
            <Banner>
                <header>
                    <strong>Organizado por {hackathon.organizer.name}</strong>

                    <aside>
                        <ActionButton type="button" edit>
                            <MdEdit size={16} color="#fefefe" />
                            Editar
                        </ActionButton>
                        <ActionButton type="button">
                            <MdCancel size={16} color="#fefefe" />
                            Cancelar
                        </ActionButton>
                    </aside>
                </header>

                <img src={hackathon.banner.url} alt={hackathon.title} />
            </Banner>

            <strong>{hackathon.title}</strong>
            <span>{hackathon.description}</span>
        </Container>
    );
}
