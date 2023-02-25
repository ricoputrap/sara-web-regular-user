import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/assets/font/basier/stylesheet.css"
import "@/assets/icon/flag-icon-css/css/flag-icon.min.css"
import { Box, ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import Navbar from '@/base-ui/Navbar';

const theme = extendBaseTheme({
  fonts: {
    body: "Basier Circle"
  },
  colors: {
    bg: "#F6F7F8",

    black0: "#000000",
    black1: "#15171A",
    black2: "#525252",
    black3: "#525C66",
    black4: "#828B94",
    black5: "#616262",

    blue: "#0666EB"
  }
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ theme }>
      <Box color="black1" minHeight="100vh" paddingX="15px">
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
