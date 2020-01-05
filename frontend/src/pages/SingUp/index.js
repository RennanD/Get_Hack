import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/laptop.svg';
import { singUpRequest } from '~/store/modules/auth/actions';

export default function SingUp() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório.'),
        email: Yup.string()
            .email('Inisira um e-mail válido.')
            .required('O e-mail é orbigatório.'),
        password: Yup.string().required('A senha é obrigatória'),
    });

    function handleSubmit({ name, email, password }) {
        dispatch(singUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="Get Hack" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="name" placeholder="Nome e sobrenome" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />

                <button type="submit">
                    {' '}
                    {loading ? 'Carregando' : 'Cadastrar-se'}{' '}
                </button>
                <Link to="/"> Ja tenho login </Link>
            </Form>
        </>
    );
}
