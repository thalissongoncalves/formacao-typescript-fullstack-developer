import { UCard } from "./UCard/UCard"
import { Form } from "./Form/Form"
import { Header } from "./Header/Header"
import { Box, Heading } from "@chakra-ui/react"

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <Form></Form>
      <Heading marginLeft='10px'>Usuários Cadastrados:</Heading>
      <Box display='flex' flexDirection='row' gap='4' width='100%' flexWrap='wrap' padding='10px'>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
        <UCard></UCard>
      </Box>
    </>
  )
}