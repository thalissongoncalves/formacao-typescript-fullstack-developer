import { Box, Center, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import DButton from "./DButton";
import { useState } from "react";

export const Card = () => {
  const [ email, setEmail ] = useState<string>('');

  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value) } />
      <Input placeholder="password" />
      <Center>
        <DButton 
          onClick={() => login(email)}
        />
      </Center>
    </Box>
  )
}