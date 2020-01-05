import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #292a2e;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: #333;
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fefefe;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
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
            border-radius: 4px;
            font-size: 16px;
            border: 0;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#2193f6')};
            }
        }

        a {
            color: #fefefe;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            font-weight: bold;

            &:hover {
                opacity: 1;
            }
        }
    }
`;
