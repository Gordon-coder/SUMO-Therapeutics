import OurTeam from "../assets/Team.jpeg";

function Team() {
  return (
    <>
      <div id="team" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <div className="d-flex justify-content-center pb-5">
          <img src={OurTeam} className="width-12"/>
        </div>
      </div>
    </>
  )
}

export default Team
