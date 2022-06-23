import {
  Button, Flex, FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text
} from '@chakra-ui/react'

type RetrieveAccountModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function RetrieveAccountModal({ isOpen, onClose }: RetrieveAccountModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        bg={'gray.50'}>
        <ModalBody
          bg={'#2c2c2c'}
          color={'gray.200'}
        >
          <Flex
            as='form'
            width={'100%'}
            direction={'column'}
            gap={4}
            my={4}
          >
            <Text
              textAlign={'center'}
              px={8}
            >
              Informe seu e-mail para receber o link de redefinição de senha
            </Text>
            <FormControl>
              <Input
                border={'none'}
                bg={'gray.200'}
              />
            </FormControl>
            <Button
              colorScheme={'orange'}
            >
              Enviar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}