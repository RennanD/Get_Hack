import styled from 'styled-components';

import { Input } from '@rocketseat/unform';

export const Container = styled.div`
    max-width: 800px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 28px;
        color: #2193f6;
        margin-bottom: 10px;
    }

    span {
        color: #fefefe;
        font-size: 18px;
        margin-top: 10px;
    }

    p {
        display: flex;
        align-items: flex-end;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 5px;

        svg {
            margin-right: 5px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        justify-content: center;

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

        textarea {
            background: #444;
            padding: 10px;
            border: 0;
            font-size: 16px;
            border-radius: 4px;
            height: 140px;
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

        aside {
            display: flex;

            input {
                width: 100%;
                margin-right: 10px;
            }
        }

        button {
            margin-top: 30px;
            opacity: 0.9;
        }
    }
`;

export const TextInput = styled(Input)`
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
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 200px;
    color: #fefefe;
    border-radius: 4px;
    font-weight: bold;
    margin-right: ${props => (props.edit ? 10 : 0)}px;
    background: ${props => (props.edit ? '#2193f6' : '#f64c75')};

    opacity: 0.9;

    &:hover {
        opacity: 1;
    }

    svg {
        margin-right: 4px;
    }
`;
