import { useState } from 'react'
import './Book.css'

const Book = ({ title, author, summary}) => {
  return (
	<div className=''>
		<h2> {title} </h2>
		<h4>Written by: {author} </h4>
		<p>{summary}</p>
	</div>
  )
}

export default Book