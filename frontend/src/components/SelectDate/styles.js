import styled from 'styled-components';

import DatePiker from 'react-datepicker';

export const Date = styled(DatePiker)`
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
    width: 100%;
    min-width: 300px;
`;
