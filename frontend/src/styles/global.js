import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    *  {
        margin: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
