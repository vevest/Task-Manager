function PointsOverviewWeek() {
  return (
    <div className="framedContent pointsOverviewWeek">
      <h2 className="textCenter" id="pointsOverviewTitle">Points oversigt</h2>
      <div className="flexSA" role="list" aria-labelledby="pointsOverviewTitle">
        {/* Mandag */}
        <div className="container" role="listitem" aria-label="Mandag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '20%' }} 
              >
            </div>
          </div>
          <p className="overviewDays">Man</p>
        </div>

        {/* Tirsdag */}
        <div className="container" role="listitem" aria-label="Tirsdag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '50%' }} 
              >
            </div>
          </div>
          <p className="overviewDays">Tirs</p>
        </div>

        {/* Onsdag */}
        <div className="container" role="listitem" aria-label="Onsdag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '30%' }} 
              >
            </div>
          </div>
          <p className="overviewDays">Ons</p>
        </div>

        {/* Torsdag */}
        <div className="container" role="listitem" aria-label="Torsdag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '40%' }} 
              >
            </div>
          </div>
          <p className="overviewDays">Tors</p>
        </div>

        {/* Fredag */}
        <div className="container" role="listitem" aria-label="Fredag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '80%' }} 
              >
            </div>
          </div>
          <p className="overviewDays">Fre</p>
        </div>

        {/* Lørdag */}
        <div className="container" role="listitem" aria-label="Lørdag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '90%' }} 
            >
            </div>
          </div>
          <p className="overviewDays">Lør</p>
        </div>

        {/* Søndag */}
        <div className="container" role="listitem" aria-label="Søndag">
          <div className="capsule" aria-live="polite">
            <div 
              className="color" 
              style={{ height: '24%' }} 
              role="progressbar" 
              >
            </div>
          </div>
          <p className="overviewDays">Søn</p>
        </div>
      </div>
    </div>
  );
}

export default PointsOverviewWeek;
