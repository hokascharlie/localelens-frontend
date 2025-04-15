
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ResultsPage({ query }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/search?q=${encodeURIComponent(query)}`)
      .then(res => setResults(res.data))
      .catch(err => console.error(err))
  }, [query])

  return (
    <div className="w-full max-w-5xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Here’s what you care about: {query}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((apt, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow bg-white">
            <img src={apt.image_url || 'https://via.placeholder.com/300x200'} alt="apartment" className="w-full h-48 object-cover mb-2 rounded" />
            <div className="font-bold text-lg">{apt.address}</div>
            <div className="text-sm text-gray-600">{apt.bedrooms} bd • {apt.bathrooms} ba</div>
            <div className="text-sm mt-1 font-semibold text-black">${apt.price}</div>
            <a href={apt.url} target="_blank" className="text-blue-600 mt-2 block">View Listing →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
