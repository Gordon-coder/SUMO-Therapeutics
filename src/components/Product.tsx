import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import TherapeuticPeptides1 from "../assets/TherapeuticPeptides1.jpeg";
import TherapeuticPeptides2 from "../assets/TherapeuticPeptides2.jpeg";


function Product() {
  let [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  }

  return (
    <>
      <div id="product" className="p-3">
        <h1 className="text-center">Our Therapeutic Peptides</h1>
        <Carousel className="width-12" activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" style={{margin:"auto"}}>
          <Carousel.Item interval={3000}>
            <img src={TherapeuticPeptides1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={TherapeuticPeptides2} className="d-block w-100" alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Product;
