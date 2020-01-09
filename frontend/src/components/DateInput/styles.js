import styled from 'styled-components';

import DatePiker from 'react-datepicker';

export const Container = styled.div`
    width: 50%;
    margin-left: 10px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    background: #444;
    border-radius: 4px;
    height: 44px;
    padding: 0 20px;
`;

export const Date = styled(DatePiker)`
    background: none;
    height: 44px;
    border: none;
    font-size: 14px;
    margin: 0;
    margin-right: 20px;
`;
