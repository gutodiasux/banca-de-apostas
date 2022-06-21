import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement, Text
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { RiSearchLine } from 'react-icons/ri'
import { BetsContainer } from '../components/BetsContainer'
import WithSubnavigation from '../components/Layout'

const DownNavLinks = [
  {
    link: '#',
    name: 'Regras Gerais',
  },
  {
    link: '#',
    name: 'Jogo Responsável',
  },
  {
    link: '#',
    name: 'Suporte',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <WithSubnavigation />
      <Flex w='100%' p={4} justify={'space-between'}>
        <Box>
          <InputGroup
            bg={'#464646'}
            border='none'
            color='gray.200'
            borderRadius={'lg'}
          >
            <InputLeftElement
              pointerEvents={'none'}
              children={<RiSearchLine />}
            />
            <Input
              border='none'
            />
          </InputGroup>
        </Box>
        <HStack spacing={8}>
          {DownNavLinks.map((link, index) => {
            return (
              <NextLink
                key={index}
                href={link.link}
              >
                <Text
                  color='whiteAlpha.600'
                  fontSize={'sm'}
                >
                  {link.name}
                </Text>
              </NextLink>
            )
          })}
        </HStack>
      </Flex>
      <BetsContainer />
    </>
  )
}

export default Home
