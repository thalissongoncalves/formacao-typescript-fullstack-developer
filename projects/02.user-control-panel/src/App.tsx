import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Layout } from './components/Layout'

function App() {

  return (
    <ChakraProvider value={defaultSystem}>
      <Layout></Layout>
    </ChakraProvider>
  )
}

export default App
