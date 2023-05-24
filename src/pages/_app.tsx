import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/assets/font/basier/stylesheet.css"
import "@/assets/icon/flag-icon-css/css/flag-icon.min.css"
import { Box, ChakraProvider, extendBaseTheme, Spinner } from '@chakra-ui/react'
import Navbar from '@/base-ui/Navbar';
import { useRouter } from 'next/router'
import useLoading from '@/hooks/useLoading'
import Loading from '@/base-ui/Loading'

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
  const router = useRouter();
  const { isLoading } = useLoading();

  // check if this page is Login page
  const isLoginPage = router.pathname === "/login";

  return (
    <ChakraProvider theme={ theme }>
      <Box color="black1" minHeight="100vh" paddingX="15px">
        {!isLoginPage && <Navbar />}
        {isLoading && <Loading />}
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
