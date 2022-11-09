function MoonFilter({ search, setSearch }) {

  return (
    <>

      <label htmlFor="moon-search">Search for a moon:</label>

      <input type="text" name="moon-search" value={search} onChange={e => setSearch(e.target.value)} />

    </>
  )

}

export default MoonFilter
