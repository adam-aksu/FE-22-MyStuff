import {useState} from 'react'
import React from 'react'
import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {

	const [products, setProducts] = useState([
		{	id: '123abc',
			name: 'Apple',
			done: false
		},
		{	id: '124bcd',
			name: 'Milk',
			done: false
		},
	])

	const clearList = () => {
		setProducts([])
	}

	const changeProduct = (product, newText) => {
		product.name = newText
		setProducts(state => [...state])
	}

	const addProduct = productName => {
		setProducts(state => {
			return [{ id: Date.now().toString(), name: productName, done: false }, ...state]
		})
	}

	const removeProduct = (id)  => {
		setProducts(oldProducts => {
			return oldProducts.filter(product =>product.id !== id)
		})
	}

	

	const toggleDone = product => {
		product.done = !product.done
		setProducts(state => {
		  state.sort((a, b) => a.done - b.done)
		  return [...state]
		})
	}

	return (
		<div className='container'>
			<Header title="Min inköpslista" />
			
			<div className="app">
				<AddProductForm addProduct={addProduct} clearList={clearList}/>
				<ProductList products={products} toggleDone={toggleDone} removeProduct= {removeProduct} changeProduct={changeProduct} />
			</div>
		</div>
	)
}

export default App