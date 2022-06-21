import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'

const NAV_LINKS = [
  {
    name: 'Futebol',
    image: '/futebol.png',
    path: '#'
  },
  {
    name: 'Basquete',
    image: '/basquete.png',
    path: '#'
  },
  {
    name: 'Tênis',
    image: '/tenis.png',
    path: '#'
  },
  {
    name: 'Tênis de Mesa',
    image: '/tenis-de-mesa.png',
    path: '#'
  },
  {
    name: 'Vôlei',
    image: '/volei.png',
    path: '#'
  },
  {
    name: 'Vôlei de Praia',
    image: '/futebol.png',
    path: '#'
  },
  {
    name: 'Handebol',
    image: '/handebol.png',
    path: '#'
  },
  {
    name: 'Basebol',
    image: '/basebol.png',
    path: '#'
  },
  {
    name: 'Futebol Americano',
    image: '/futebol-americano.png',
    path: '#'
  },
  {
    name: 'MMA',
    image: '/mma.png',
    path: '#'
  },
  {
    name: 'Boxe',
    image: '/boxe.png',
    path: '#'
  },
]

export function BetsContainer() {
  return (
    <Flex
      w='100%'
      my={4}
    >
      <VStack
        w='250px'
        color={'gray.200'}
      >
        {NAV_LINKS.map((el, index) => {
          return (
            <Flex
              key={index}
              align={'center'}
              gap={4}
              textAlign={'start'}
              w={'100%'}
              py={2}
              px={2}
            >
              <Image
                src={el.image}
                alt={el.name}
                w={'32px'}
              />
              <Text>
                {el.name}
              </Text>
            </Flex>
          )
        })}
      </VStack>
      <Box
        flex={1}
        bg={'gray.200'}
        borderRadius={'lg'}
      >

      </Box>
      <VStack
        w='250px'
        color={'gray.200'}
      >
        <Heading
          fontSize={'md'}
          fontWeight={'normal'}
        >
          Ainda não há apostas
        </Heading>
      </VStack>
    </Flex>
  )
}