import { Card } from "@chakra-ui/react"

export const UCard = () => {
  return(
    <Card.Root>
      <Card.Header>Usuário 1</Card.Header>
      <Card.Body>
        Nome: Thalisson G. <br/>
        E-mail: thalissongdev@gmail.com
      </Card.Body>
    </Card.Root>
  )
}