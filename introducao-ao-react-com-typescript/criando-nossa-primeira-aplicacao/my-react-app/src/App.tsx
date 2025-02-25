import './App.css'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header />
      Hello world!

      <Card
        id={1}
        paragraph='TypeScript'
        details='TS para frontend e backend'
      />
      <Card 
        id={2}
        paragraph='HTML'
        details='HTML para frontend'
      />
      <Card 
        id={3}
        paragraph='SQL'
        details='SQL para banco de dados'
      />
      
      <Footer />
    </>
  )
}

export default App
