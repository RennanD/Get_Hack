import React from 'react';

import { Wrapper } from './styles';

import SideBar from '~/components/SideBar';
import Header from '~/components/Header';

export default function DefaulLayout({ children }) {
    return (
        <Wrapper>
            <SideBar />
            <div style={{ flex: 1 }}>
                <Header />
                {children}
            </div>
        </Wrapper>
    );
}
