import styled from 'styled-components';

export const Container = styled.div`
    background: #2193f6;
    width: 125px;
    height: 100%;

    nav {
        padding: 30px 5px;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;

        div {
            height: 300px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;

            a {
                text-align: center;
                color: #fefefe;
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 15px;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            background: #fb6f91;
            height: 32px;
            border-radius: 4px;

            span {
                color: #ddd;
                font-weight: bold;
                margin-left: 5px;
            }
        }
    }
`;
