import { useState } from 'react'
import './Book.css'

const Book = ({ title, author, summary}) => {

	const [isRead, setIsRead] = useState(false)

	const setReadStatus = () => {
	  setIsRead(state => !state)
	}

  return (
	<div onClick={setReadStatus} className={`card book mb-2 ${isRead && 'read'}`}>
		<h2 className='title '> {title} </h2>
		<h4 className='author'>Written by: {author} </h4>
		<p>{summary}</p>
	</div>
  )
}

export default Book