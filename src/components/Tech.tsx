import OurTechnology from "../assets/OurTechnology.png";

function Tech() {
  return (
    <>
      <div id="tech" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <h1 className="text-center">Our Technology</h1>
        <div className="d-flex justify-content-center pb-5">
          <img src={OurTechnology} className="width-12"/>
        </div>
      </div>
    </>
  );
}

export default Tech;
