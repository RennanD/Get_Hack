import React from 'react';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/laptop.svg';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="" />
                    <strong> GET HACK </strong>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>React App</strong>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt=""
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
