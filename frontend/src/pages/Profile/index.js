import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input, Form } from '@rocketseat/unform';

import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/action';

import AvatarInput from './AvatarInput';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Seu nome" />
                <Input name="email" type="email" placeholder="Seu e-mail" />

                <hr />

                <Input name="oldPassword" placeholder="Sua senha atual" />
                <Input name="password" placeholder="Sua nova senha" />
                <Input
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>
        </Container>
    );
}
