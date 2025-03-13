import { Card } from "@chakra-ui/react"

interface ICard {
  name: string,
  email: string
}

export const UCard = ({name, email}: ICard) => {
  return(
    <Card.Root width='430px'>
      <Card.Body>
        Nome: {name} <br/>
        E-mail: {email}
      </Card.Body>
    </Card.Root>
  )
}