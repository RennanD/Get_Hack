import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaEdit, FaUser, FaSignOutAlt } from 'react-icons/fa';

import { Container } from './styles';

export default function SideBar() {
    return (
        <Container>
            <nav>
                <div>
                    <Link to="/dashboard">
                        <FaHome size={32} color="#eee" />
                    </Link>

                    <Link to="/dashboard">
                        <FaEdit size={32} color="#eee" />
                    </Link>

                    <Link to="/dashboard">
                        <FaUser size={32} color="#eee" />
                    </Link>
                </div>

                <button type="button">
                    <FaSignOutAlt size={20} color="#eee" /> <span>Sair</span>
                </button>
            </nav>
        </Container>
    );
}
