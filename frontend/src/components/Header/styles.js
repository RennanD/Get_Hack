import styled from 'styled-components';

export const Container = styled.div`
    background: #292a2e;
    padding: 0 30px;
    width: 100%;
`;
export const Content = styled.div`
    height: 64px;

    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            height: 40px;
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #666;
        }

        strong {
            font-weight: bold;
            color: #fefefe;
            font-size: 18px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    div {
        text-align: right;
        margin-right: 10px;
        display: flex;
        align-items: center;

        strong {
            color: #fefefe;
        }
    }

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
    }
`;
