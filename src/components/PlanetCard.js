function PlanetCard({ planet }) {

  return (
    <div className="white-border">

      <h3>{ planet.name }</h3>

      <p>Planet Orbital Period: { planet.orbital_period_in_earth_days } days</p>

      <p>{ planet.fun_fact }</p>

      <p>{ planet.is_planet ? "TRUE PLANET" : "TRANS NEPTUNIAN OBJECT" }</p>

    </div>
  )

}

export default PlanetCard
