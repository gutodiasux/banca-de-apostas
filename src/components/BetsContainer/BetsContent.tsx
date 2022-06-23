import {
  Box,
  Icon,
  Tab,
  TabList,
  Tabs
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const BetsTabs = () => {
  return (
    <Tabs
      variant={'unstyled'}
      bg={'#464646'}
      color={'gray.200'}
      borderRadius={'6px 6px 0 0'}
    >
      <TabList>
        <Tab>
          <NextLink
            href={'/'}
            passHref
          >
            <Icon
              as={MdKeyboardArrowLeft}
            />
          </NextLink>
        </Tab>
        <Tab>Todos</Tab>
        <Tab>12hs</Tab>
        <Tab>24hs</Tab>
        <Tab>48hs</Tab>
        <Tab>Ao Vivo</Tab>
      </TabList>
    </Tabs>
  )
}

export function BetsContent() {
  return (
    <Box>
      <BetsTabs />
    </Box>
  )
}