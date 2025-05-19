import './App.css'
import NewProductArrival from './components/NewProductArrival'
import Delivery from './components/Delivery'
import Product from './components/Product'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Product />
      <NewProductArrival />
      <Delivery />
    </>
  )
}

export default App
