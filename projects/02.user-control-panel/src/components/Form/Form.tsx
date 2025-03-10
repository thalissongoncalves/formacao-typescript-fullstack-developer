import { Box, Button, Input } from '@chakra-ui/react';

export const Form = () => {
  return (
    <Box minHeight='50vh' width='40vw' marginLeft='20px' marginTop='20px'>
      <label htmlFor='name'>Nome:</label>
      <Input id='name' placeholder='Digite seu nome...' marginBottom='15px'></Input>
      <label htmlFor='email'>E-mail:</label>
      <Input id='email' placeholder='Digite seu e-mail...' marginBottom='20px'></Input>
      <Button>Cadastrar</Button>
    </Box>
  )
}