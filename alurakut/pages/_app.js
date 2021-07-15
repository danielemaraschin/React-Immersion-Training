import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
/*reset CSS (necolas reset - reset simples, procurar na internet)*/
  {
  margin: 0;
  passing:0;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #D9E6F6;
    font-family: sans-serif;
  }

  #_next {
    display: flex;
    min-eight: 100vh;
    flex-direction:column;
  }

  img {
    max-width: 100%;
    heigh: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
