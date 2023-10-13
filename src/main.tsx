import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/theme'
import GamesProvider from '@/contexts/games.context'
import App from '@/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <GamesProvider>
          <App />
        </GamesProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
