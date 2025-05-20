import './App.css'
import NewProductArrival from './components/NewProductArrival'
import Delivery from './components/Delivery'
import Product from './components/Product'
import Outlet from './components/Outlet'
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
      <Outlet />
    </>
  )
}

export default App
