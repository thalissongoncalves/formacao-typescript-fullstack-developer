import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { UCard } from '../UCard/UCard';
import { welcome } from '../../services/welcome';

export const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState([{
    name: '',
    email: ''
  }])

  return (
    <>
    <Box display='flex' flexDirection='column' minHeight='30vh' width='40vw' margin='20px auto'>
      <label htmlFor='name'>Nome:</label>
      <Input id='name' placeholder='Digite seu nome...' marginBottom='15px' onChange={(e) => setName(e.target.value)}></Input>
      <label htmlFor='email'>E-mail:</label>
      <Input id='email' placeholder='Digite seu e-mail...' marginBottom='20px' onChange={(e) => setEmail(e.target.value)}></Input>
      <Button onClick={() => {
        if (user[0].name === '') {
          setUser([{name, email}])
          welcome(name)
        } else {
          setUser([...user, {name, email}])
          welcome(name)
        }
      }}>Cadastrar</Button>
    </Box>
    <Heading textAlign='center'>Usuários Cadastrados:</Heading>
    {
      user[0].name === '' ? <Box display='none'></Box> : 
        <Box display='flex' flexDirection='row' gap='4' width='100%' flexWrap='wrap' padding='10px'>
          {
            user.map((u, index) => 
              <UCard name={u.name} email={u.email} key={index}></UCard>
            )
          }
        </Box>
    }
    </>
  )
}