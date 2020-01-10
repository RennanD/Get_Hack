import styled from 'styled-components';

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
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        input {
            padding: 0 10px;
            background: none;
            border: 0;
            border-bottom: 1px solid #444;
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

        button {
            margin-top: 30px;
            opacity: 0.9;
        }
        aside {
            display: flex;
            height: 100%;
            padding: 20px 0;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Banner = styled.div`
    padding: 20px 0;

    header {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        div {
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid #666;

            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #666;
        }

        strong {
            color: #fefefe;
            font-size: 16px;
            display: flex;
            align-items: center;

            svg {
                margin-right: 5px;
            }
        }

        aside {
            display: flex;
            height: 100%;
            padding: 20px 0;
            align-items: center;
            justify-content: center;
        }
    }

    img {
        width: 100%;
        max-height: 350px;
        border-radius: 4px;
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
