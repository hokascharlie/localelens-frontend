
import React, { useState } from 'react'
import ResultsPage from './ResultsPage'

export default function App() {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(true)
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Apartment hunting. Reimagined.</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex gap-2">
        <input
          type="text"
          placeholder="Search for amenities, style, vibe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 rounded border border-gray-300"
        />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Search</button>
      </form>
      {search && <ResultsPage query={query} />}
    </div>
  )
}
