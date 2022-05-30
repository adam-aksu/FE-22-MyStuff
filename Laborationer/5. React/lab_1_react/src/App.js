import { useState } from 'react'
import './App.css'
import Book from './components/Book'
import Navbar from './components/Navbar'

const App = () => {

	const [books] = useState([
		{
			id: 1,
			title: 'Crime and Punishment',
			author: 'Fyodor Dostoevsky',
			summary: 'Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat.'
		},
		{	
			id: 2,
			title: 'Life of Pi',
			author: 'Yann Martel',
			summary: 'A magnificent and beautiful adventure about 16-year-old Pi who after a shipwreck ends up in a lifeboat in the middle of the Pacific Ocean - alone with an orangutan, a zebra, a hyena and a Bengal tiger. Life on the boat will be a 227 day long struggle for survival.'
		},
		{	
			id: 3,
			title: 'The Metamorphosis',
			author: 'Franz Kafka',
			summary: 'One of Kafka\'s best-known works, Metamorphosis tells the story of salesman Gregor Samsa, who wakes one morning to find himself inexplicably transformed into a huge insect (ungeheueres Ungeziefer, lit. "monstrous vermin") and subsequently struggles to adjust to this new condition.'
		},
		{	
			id: 4,
			title: 'The Trial',
			author: 'Franz Kafka',
			summary: 'The Trial is the chronicle of that intervening year of K.\'s case, his struggles and encounters with the invisible Law and the untouchable Court. It is an account, ultimately, of state-induced self-destruction. Yet, as in all of Kafka\'s best writing, the "meaning" is far from clear.'
		}
	])

  return (
	<div><Navbar />
	<div className='container'>
		
		{books.map(book => (
			<Book key={book.id} title={book.title} author={book.author} summary={book.summary}/>
		))}
		
	</div>
	</div>
  )
}

export default App