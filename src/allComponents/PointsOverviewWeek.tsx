function PointsOverviewWeek() {
  return(
    <div className="framedContent pointsOverviewWeek">
      <h2 className="textCenter">Points oversigt</h2>
      <div className="flexSA">
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `20%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Man</p>
        </div>
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `50%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Tirs</p>
        </div>
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `30%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Ons</p>
        </div>
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `40%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Tors</p>
        </div>
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `80%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Fre</p>
        </div>
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `90%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Lør</p>
        </div>
        <div className="container">
          <div className="capsule">
            <div className="color" style={{
          height: `24%`, // Dynamisk bredde baseret på fremgangen mod næste level
        }}></div>
          </div>
          <p>Søn</p>
        </div>
      </div>
    </div>
  )
}

export default PointsOverviewWeek;