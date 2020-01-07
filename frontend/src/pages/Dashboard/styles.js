import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin: 50px auto;
    overflow: auto;

    header {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fefefe;
            font-size: 24px;
            margin: 0 15px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        margin-top: 15px;
    }
`;

export const Card = styled.li`
    border-radius: 4px;
    background: #222;
    max-width: 300px;

    img {
        height: 70%;
        width: 100%;
        border-radius: 4px 4px 0 0;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        height: 30%;

        span {
            display: flex;
            align-items: flex-end;
            font-size: 16px;
            color: #fefefe;
            font-weight: bold;

            & + span {
                margin-top: 10px;
            }

            svg {
                margin-right: 7px;
            }
        }
    }
`;
