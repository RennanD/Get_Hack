import React from 'react';

import { Form, Textarea } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { Container, ActionButton, TextInput } from '../styles';
import { hackAddRequest } from '~/store/modules/hackathon/actions';

import SelectDate from '~/components/SelectDate';
import BannerInput from '~/components/BannerInput';

export default function NewHackathon() {
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

    function handleSubmit(data) {
        dispatch(hackAddRequest(data));
    }

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <BannerInput name="banner_id" />

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

                    <SelectDate name="date" />
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
