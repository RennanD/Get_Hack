import React from 'react';

import { Content, Wrapper } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
}
