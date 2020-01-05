import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/laptop.svg';
import { singInRequest } from '~/store/modules/auth/actions';

export default function SingIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(singInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="Get Hack" />
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">
                    {' '}
                    {loading ? 'Carregando' : 'Entrar'}{' '}
                </button>
                <Link to="/isngup"> Criar conta </Link>
            </Form>
        </>
    );
}
