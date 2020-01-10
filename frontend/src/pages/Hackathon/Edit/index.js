import React, { useState, useEffect } from 'react';

import { Form, Textarea } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { parseISO } from 'date-fns';

import { Container, ActionButton, TextInput } from '../styles';
import { hackUpdateRequest } from '~/store/modules/hackathon/actions';

import SelectDate from '~/components/SelectDate';
import BannerInput from '~/components/BannerInput';
import api from '~/services/api';

export default function EditHackathon({ match }) {
    /**
     * Declare consts
     */

    const [state, setState] = useState();
    const dispatch = useDispatch();
    const schema = Yup.object().shape({
        banner_id: Yup.number().required('O hackathon precisa de um banner'),
        title: Yup.string('O título precisa ser um texto').required(
            'O título é obrigatório'
        ),
        description: Yup.string('A descrição precisa ser um texto').required(
            'A descrição é obrigatório'
        ),
        awards: Yup.string().required('A premição é obrigatória'),
        date: Yup.date().required('A data do hackathon é obrigatória'),
    });

    /**
     * Declare funtions
     */

    useEffect(() => {
        async function loadHackathon() {
            const { id } = match.params;
            const response = await api.get(`/hackathons/${id}/details`);

            const data = {
                ...response.data,
                date: parseISO(response.data.date),
            };

            setState(data);
        }
        loadHackathon();
    }, [match]);

    function handleSubmit(data) {
        const editHackathon = {
            ...data,
            id: match.params.id,
        };

        dispatch(hackUpdateRequest(editHackathon));
    }

    /**
     * Render component
     */

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit} initialData={state}>
                {state && <BannerInput name="banner_id" />}

                <TextInput name="title" placeholder="Título do hackathon" />
                <Textarea
                    name="description"
                    placeholder="Descrição do hackathon"
                />

                <hr />

                <aside>
                    <TextInput
                        type="number"
                        name="awards"
                        placeholder="Premiação do hackathon"
                    />

                    {state && <SelectDate name="date" />}
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
