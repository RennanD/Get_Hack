import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/laptop.svg';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

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
                            <strong>{profile.name}</strong>
                        </div>
                        <img
                            src={
                                profile.avatar
                                    ? profile.avatar.url
                                    : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                            alt=""
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
