import { useMediaQuery } from "react-responsive";
import About_1 from "../assets/About_1.png";
import About_2 from "../assets/About_2.png";

function About() {
  const isBig = useMediaQuery({
    query: "(min-width: 1100px)",
  });

  return (
    <>
      <div id="about">
        <div style={{ paddingTop: 20 }}></div>
        <h1>About Us</h1>
        <section className="d-flex justify-content-center pb-5 w-100 about-text" id="about-text-1">
          <div className={isBig ? "width-5" : "w 100"}>
            <h4>Who We Are?</h4>
            <p className="mx-auto text-center">
              We are a startup focused on developing innovative solutions for
              generating robust, recyclable, and cost-effective enzymes that
              unlock their full potential as catalysts to produce commercially
              viable products.
            </p>
          </div>
          {isBig ? (
            <>
              <div className={isBig ? "width-1" : ""}></div>
              <div className="width-6">
                <img src={About_1} width={400} />
              </div>
            </>
          ) : (
            <></>
          )}
        </section>
        <section className="d-flex justify-content-center w-100 about-text pb-5" id="about-text-2">
          {isBig ? (
            <>
              <div className="width-6">
                <img src={About_2} width={400} />
              </div>
              <div className={isBig ? "width-1" : ""}></div>
            </>
          ) : (
            <></>
          )}
          <div className={isBig ? "width-5" : "w-100"}>
            <h4>Our Mission</h4>
            <p className="mx-auto text-center">
              Our mission is to harness the power of enzymes to promote green
              sustainable chemical processes for a healthier and cleaner world.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
