import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoMdPower } from 'react-icons/io';
import { MdPersonPin, MdEventNote, MdAddBox } from 'react-icons/md';

import { Container } from './styles';
import { singOut } from '~/store/modules/auth/actions';

export default function SideBar() {
    const dispatch = useDispatch();

    function handleSingOut() {
        dispatch(singOut());
    }

    return (
        <Container opened={false}>
            <nav>
                <div>
                    <Link to="/dashboard">
                        <MdEventNote size={32} color="#eee" />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/hackathons/new">
                        <MdAddBox size={32} color="#eee" />
                        <span>Adicionar</span>
                    </Link>

                    <Link to="/dashboard">
                        <MdPersonPin size={32} color="#eee" />
                        <span>Configurar</span>
                    </Link>
                </div>

                <button type="button" onClick={handleSingOut}>
                    <IoMdPower size={20} color="#eee" /> <span>Sair</span>
                </button>
            </nav>
        </Container>
    );
}
