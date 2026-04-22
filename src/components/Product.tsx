import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import OurProductRobozyme1 from "../assets/OurProductRobozyme1.png";
import OurProductRobozyme2 from "../assets/OurProductRobozyme2.png";
import OurProductRobozyme3 from "../assets/OurProductRobozyme3.png";


function Product() {
  let [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  }

  return (
    <>
      <div id="product" className="p-3">
        <h1 className="text-center">Our Products</h1>
        <Carousel className="width-12" activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" style={{margin:"auto"}}>
          <Carousel.Item interval={3000}>
            <img src={OurProductRobozyme1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={OurProductRobozyme2} className="d-block w-100" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={OurProductRobozyme3} className="d-block w-100" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Product;
