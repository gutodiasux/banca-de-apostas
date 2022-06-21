import { Box } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <Box
        as='body'
        bg={'#3d3d3d'}
      >
        <Main />
        <NextScript />
      </Box>
    </Html>
  )
}