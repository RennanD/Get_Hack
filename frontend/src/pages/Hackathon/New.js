import React from 'react';

import { Form, Textarea } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';

import { Container, ActionButton, TextInput } from './styles';
import { hackAddRequest } from '~/store/modules/hackathon/actions';

import SelectDate from '~/components/SelectDate';
import BannerInput from '~/components/BannerInput';

export default function NewHackathon() {
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(hackAddRequest(data));
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BannerInput name="banner_id" />

                <TextInput name="title" placeholder="Título do hackathon" />
                <Textarea
                    name="description"
                    placeholder="Descrição do hackathon"
                />

                <hr />

                <aside>
                    <TextInput name="awards" />
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
