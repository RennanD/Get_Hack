import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 30px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        padding: 0 10px;
        background: #444;
        border: 0;
        border-radius: 4px;
        height: 44px;
        color: #fefefe;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    hr {
        border: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        margin-bottom: 20px;
        margin-top: 10px;
    }

    span {
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
    }
    button {
        margin: 5px 0 0;
        height: 44px;
        background: #2193f6;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
        font-size: 16px;
        border: 0;
        transition: background 0.2s;
        &:hover {
            background: ${darken(0.03, '#2193f6')};
        }
    }
`;
