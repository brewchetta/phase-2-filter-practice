function PlanetFilter({ filtered, setFiltered }) {
  return (
    <select value={ filtered } onChange={ e => setFiltered( e.target.value ) }>
      <option value="all">All</option>
      <option value="only_planets">True Planets</option>
    </select>
  )
}

export default PlanetFilter
