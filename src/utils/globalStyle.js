import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
  	font-family: 'Proxima Nova';
  	src: url('/fonts/ProximaNova-Regular.eot');
  	src: local('Proxima Nova Regular'), local('ProximaNova-Regular'),
  		url('/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
  		url('/fonts/ProximaNova-Regular.woff') format('woff'),
  		url('/fonts/ProximaNova-Regular.ttf') format('truetype');
  	font-weight: normal;
  	font-style: normal;
  }

  @font-face {
  	font-family: 'Proxima Nova';
  	src: url('/fonts/ProximaNova-Semibold.eot');
  	src: local('Proxima Nova Semibold'), local('ProximaNova-Semibold'),
  		url('/fonts/ProximaNova-Semibold.eot?#iefix') format('embedded-opentype'),
  		url('/fonts/ProximaNova-Semibold.woff') format('woff'),
  		url('/fonts/ProximaNova-Semibold.ttf') format('truetype');
  	font-weight: 600;
  	font-style: normal;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Proxima Nova", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
