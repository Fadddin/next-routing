"use client"

import { useState } from 'react';
import axios from 'axios'; // Axios for making HTTP requests in the browser

export default function post() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const fetchHelloMessage = async () => {
    try {
      const { data } = await axios.get(`/api/select/hello?query=${query}`);
      setResponse(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter query"
      />
      <button onClick={fetchHelloMessage}>Fetch Message</button>
      <p>{response}</p>
    </div>
  );
}
