import { useState, useEffect } from "react"
import StarFilter from "./StarFilter"
import StarCard from "./StarCard"

function StarsContainer() {

  // STATE //
  const [stars, setStars] = useState([])
  const [search, setSearch] = useState(0)

  // USE EFFECT //
  useEffect(() => {
    const starsURL = "http://localhost:4000/stars"
    fetch(starsURL)
    .then( res => res.json() )
    .then( data => setStars(data) )
  }, [])

  // FILTER STARS //
  const filteredStars = stars.filter( star => {
    return star.distance_in_light_years >= search
  })

  // MAP STARS //

  const mappedStars = filteredStars.map(star => <StarCard key={star.id} star={star} />)

  // RENDER //
  return (
    <div className="white-border-top">

      <h2>Stars of the Solar System</h2>

      <StarFilter search={search} setSearch={setSearch} />

      <div className="grid column-3">

        { mappedStars }

      </div>

    </div>
  )

}

export default StarsContainer
