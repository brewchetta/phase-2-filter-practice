function StarFilter({ search, setSearch }) {

  return (
    <>

      <label htmlFor="star-search">Lightyears away:</label>

      <input type="number" name="star-search" value={search} onChange={ e => setSearch( parseInt(e.target.value) ) } />

    </>
  )

}

export default StarFilter
