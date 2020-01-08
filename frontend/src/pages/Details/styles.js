import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
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
    }
`;

export const Banner = styled.div`
    padding: 20px 0;

    header {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        strong {
            color: #fefefe;
            font-size: 16px;
        }

        aside {
            display: flex;
            height: 100%;
            padding: 20px 0;
            align-items: center;
        }
    }

    img {
        width: 100%;
        max-height: 400px;
        border-radius: 4px;
    }
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    color: #fefefe;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 10px;
    background: ${props => (props.edit ? '#2193f6' : '#f64c75')};

    opacity: 0.9;

    &:hover {
        opacity: 1;
    }

    svg {
        margin-right: 4px;
    }
`;
