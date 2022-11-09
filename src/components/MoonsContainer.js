import { useState, useEffect } from "react"
import MoonFilter from "./MoonFilter"
import MoonCard from './MoonCard'

function MoonsContainer() {

  // STATE //
  const [moons, setMoons] = useState([])
  const [search, setSearch] = useState('')

  // USE EFFECT //
  useEffect(() => {
    const moonsURL = "http://localhost:4000/moons"
    fetch(moonsURL)
    .then( res => res.json() )
    .then( data => setMoons(data) )
  }, [])

  // FILTER MOONS //
  const filteredMoons = moons.filter( moon => {
    return moon.name.toLowerCase().includes( search.toLowerCase() )
  })

  // MAP MOONS //

  const mappedMoons = filteredMoons.map(moon => <MoonCard key={moon.id} moon={moon} />)

  // RENDER //
  return (
    <div className="white-border-top">

      <h2>Moons</h2>

      <MoonFilter search={search} setSearch={setSearch} />

      <div className="grid column-3">

        { mappedMoons }

      </div>

    </div>
  )

}

export default MoonsContainer
