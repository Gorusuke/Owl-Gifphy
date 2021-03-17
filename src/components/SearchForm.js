import React, { useState, useCallback } from 'react'
import {useHistory} from 'react-router-dom'


const SearchForm = () => {

  const [keyword, setKeyword] = useState('')
	const history = useHistory();

  const handleSubmit = useCallback((e) => {
		e.preventDefault()
		if(keyword.length === 0) return null
		history.push(`./search/${keyword}`)
	},[history, keyword])


	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input onChange={handleChange} placeholder="Search a gif here..!" type='text'/>
    </form>    
  )
}

export default SearchForm
