import { useState, useEffect } from "react"
import PlanetFilter from "./PlanetFilter"
import PlanetCard from "./PlanetCard"

function PlanetsContainer() {

  // STATE //
  const [planets, setPlanets] = useState([])
  const [filtered, setFiltered] = useState("all")

  // USE EFFECT //
  useEffect(() => {
    const planetsURL = "http://localhost:4000/planets"
    fetch(planetsURL)
    .then( res => res.json() )
    .then( data => setPlanets(data) )
  }, [])

  // FILTER PLANETS //

  const filteredPlanets = planets.filter( planet => {
    if (filtered === "all") {
      return true
    } else {
      return planet.is_planet
    }
  })

  // MAP PLANETS //

  const mappedPlanets = filteredPlanets.map(planet => <PlanetCard key={planet.id} planet={planet} />)

  // RENDER //
  return (
    <div className="white-border-top">

      <h2>Planets of the Solar System</h2>

      <PlanetFilter filtered={filtered} setFiltered={setFiltered} />

      <div className="grid column-3">

        { mappedPlanets }

      </div>



    </div>
  )

}

export default PlanetsContainer
