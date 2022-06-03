import {useState} from 'react'
import '../App.css'
import ChangeProduct from './ChangeProduct'

const ProductRow = ({ product, removeProduct, toggleDone, changeProduct }) => {

	const [change, setChange] = useState(false)
	const toggleChange = () => {
		setChange(state => !state)
	}

	const changeText = (text) => {
		changeProduct(product, text)
		setChange(false)
	}

  return (
	<div className='product_row'>
		{	change
			? 	<ChangeProduct product={product} changeText={changeText}/>
			:	<div className='product'> <div className={` ${product.done && 'done'}`}>{ product.name }</div></div>
		}
		
		
		
		<div className='buttons'>
			<div id= 'done_icon' onClick={() => toggleDone(product)} className='far fa-check-square'></div>
			<div id= 'edit_icon' onClick={toggleChange} className='far fa-edit '></div>
			<div id= 'delete_icon' onClick={() => removeProduct(product.id)} className='far fa-trash-alt'></div>
		</div>
	</div>
	)
}

export default ProductRow