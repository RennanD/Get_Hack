import React, { useState } from 'react';

import { Form, Textarea } from '@rocketseat/unform';

import { Container, Date, ActionButton, TextInput } from './styles';

export default function EditHackathon() {
    const [date, setDate] = useState();

    function handleSubmit() {}

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <TextInput name="title" placeholder="Título do hackathon" />
                <Textarea
                    name="description"
                    placeholder="Descrição do hackathon"
                />

                <hr />

                <aside>
                    <TextInput name="awards" />
                    <Date
                        name="date"
                        selected={date}
                        onChange={newDate => setDate(newDate)}
                        locale="pt-BR"
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={15}
                        dateFormat="Pp"
                    />
                </aside>

                <aside>
                    <ActionButton type="submit" edit>
                        Salvar dados
                    </ActionButton>
                </aside>
            </Form>
        </Container>
    );
}
