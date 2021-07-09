import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1D1C24;
    }
    h2 {
        color: white;
        font-size: 4rem;
    }
    h1 {
        font-size: 0.4rem;
    }
`

export default GlobalStyles;