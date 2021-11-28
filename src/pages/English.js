import React, { useState, useEffect } from 'react'

function English() {
  const [words, setWords] = useState([])
  useEffect(() => {
    fetch(`https://ups-json-server.herokuapp.com/english`)
      .then(res => res.json())
      .then(data => {
        console.log(`data`, data)
        // setMovies(data.Search)
        // setLoading(false)
        setWords(data)
      })
    return () => {}
  }, [])
  return (
    <div>
      <h2>English</h2>
      <p></p>
    </div>
  )
}

export default English
