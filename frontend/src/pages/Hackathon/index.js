import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Textarea } from '@rocketseat/unform';

import { Container, Date, ActionButton, TextInput } from './styles';
import { hackUpdateRequest } from '~/store/modules/hackathon/actions';

export default function HackForm({ hackathon, actionForm }) {
    const [date, setDate] = useState(hackathon.dateFormatted);

    const dispatch = useDispatch();

    function handleSubmit(data) {
        if (actionForm === 'edit') {
            dispatch(hackUpdateRequest(data));
        }
    }

    return (
        <Container>
            <Form initialData={hackathon} onSubmit={handleSubmit}>
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
