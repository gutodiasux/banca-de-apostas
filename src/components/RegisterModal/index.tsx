import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react'
import { RegisterForm } from './RegisterForm'

type RegisterModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'2xl'}
    >
      <ModalOverlay />
      <ModalContent
        bg={'gray.50'}>
        <ModalBody>
          <RegisterForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}