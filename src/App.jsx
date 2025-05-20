import './App.css'
import NewProductArrival from './components/NewProductArrival'
import Delivery from './components/Delivery'
import Product from './components/Product'
import Outlet from './components/Outlet'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Product />
      <NewProductArrival />
      <Delivery />
      <Outlet />
      <Testimonial />
    </>
  )
}

export default App
