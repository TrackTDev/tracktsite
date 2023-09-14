import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";



export default function PublicLayout({ children }:  {children: ReactNode}) {
    return (
      <Box minH={"100vh"} bg={"#2A2B2E"}>
        <Head>
          <title>TracT</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:image" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ChakraProvider >
          {/* <Navbar/> */}
          <main>{children}</main>
        </ChakraProvider>
      </Box>
    );
  }