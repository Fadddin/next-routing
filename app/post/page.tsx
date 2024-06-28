'use client'

import { useState } from 'react'

export default function Home() {
  const [id, setId] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setResult(null)
    try {
      const response = await fetch(`/api/double/${id}`)
      const data = await response.json()
      if (response.ok) {
        setResult(data.result)
      } else {
        setError(data.error || 'An error occurred')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while fetching data')
    }
  }

  return (
    <div>
      <h1>Double the Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter a number"
          required
        />
        <button type="submit">Double it</button>
      </form>
      {result !== null && (
        <p>The double of {id} is: {result}</p>
      )}
      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  )
}