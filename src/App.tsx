import "bootstrap/dist/css/bootstrap.css"
import "./css/style.css"
import main_image from "./assets/main_image.png"
import Navagation from "./components/Nav.tsx"
import About from "./components/About.tsx"
import Tech from "./components/Tech.tsx"
import Product from "./components/Product.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"
import Team from "./components/Team.tsx"

function App() {
  return (
    <>
      <Navagation />
      <div id="space"></div>
      <div id="top">
        <img src={main_image} className="w-100" />
      </div>
      <About />
      <Tech />
      <Product />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
