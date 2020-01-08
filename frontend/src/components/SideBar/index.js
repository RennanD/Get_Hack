import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPower } from 'react-icons/io';
import { MdPersonPin, MdEventNote, MdAddBox } from 'react-icons/md';

import { Container } from './styles';

export default function SideBar() {
    return (
        <Container opened={false}>
            <nav>
                <div>
                    <Link to="/dashboard">
                        <MdEventNote size={32} color="#eee" />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/dashboard">
                        <MdAddBox size={32} color="#eee" />
                        <span>Adicionar</span>
                    </Link>

                    <Link to="/dashboard">
                        <MdPersonPin size={32} color="#eee" />
                        <span>Configurar</span>
                    </Link>
                </div>

                <button type="button">
                    <IoMdPower size={20} color="#eee" /> <span>Sair</span>
                </button>
            </nav>
        </Container>
    );
}
