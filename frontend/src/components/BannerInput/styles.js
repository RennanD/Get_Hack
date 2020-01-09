import styled from 'styled-components';

import { MdCameraAlt } from 'react-icons/md';

export const Container = styled.div`
    label {
        input {
            display: none;
        }
    }
`;

export const Label = styled.label`
    margin-bottom: 20px;
    border: ${props => (props.hasThumb ? 'none' : '1px dashed #666')};
    background-size: cover;
    cursor: pointer;
    display: flex;
    height: 350px;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(MdCameraAlt)`
    display: ${props => (props.hasThumb ? 'none' : 'block')};
`;
