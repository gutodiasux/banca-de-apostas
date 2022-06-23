import {
  Box, Button, Flex, FormControl,
  FormLabel,
  Grid,
  Input
} from '@chakra-ui/react'

export function RegisterForm() {
  return (
    <>
      <Box>
        <Grid
          my={4}
          templateColumns={'repeat(2, 1fr)'}
          gap={4}
        >
          <FormControl>
            <FormLabel htmlFor='firstName'>Primeiro Nome</FormLabel>
            <Input
              name={'firstName'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='surName'>Sobrenome</FormLabel>
            <Input
              name={'surName'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='cpf'>CPF</FormLabel>
            <Input
              name={'cpf'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='bithdate'>Data de Nascimento</FormLabel>
            <Input
              name={'birthdate'}
              type='date'
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              name={'email'}
              type='text'
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='telephone'>Telefone</FormLabel>
            <Input
              name={'telephone'}
              type='text'
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='username'>Usuário</FormLabel>
            <Input
              name={'username'}
              type='text'
            />
          </FormControl>
          <FormControl>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input
              name={'password'}
              type='text'
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='confirm_password'>Confirmar senha</FormLabel>
            <Input
              name={'confirm_password'}
              type='text'
            />
          </FormControl>
        </Grid>
        <Flex
          w='100%'
          my={4}
          justify={'flex-end'}
        >
          <Button
            size='lg'
            colorScheme={'orange'}
          >
            Criar conta
          </Button>
        </Flex>
      </Box>
    </>
  )
}