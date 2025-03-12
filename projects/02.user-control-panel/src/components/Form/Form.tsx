import { Box, Button, Input } from '@chakra-ui/react';

export const Form = () => {
  return (
    <Box display='flex' flexDirection='column' minHeight='30vh' width='40vw' margin='20px auto'>
      <label htmlFor='name'>Nome:</label>
      <Input id='name' placeholder='Digite seu nome...' marginBottom='15px'></Input>
      <label htmlFor='email'>E-mail:</label>
      <Input id='email' placeholder='Digite seu e-mail...' marginBottom='15px'></Input>
      <br></br>
      <Button>Cadastrar</Button>
    </Box>
  )
}