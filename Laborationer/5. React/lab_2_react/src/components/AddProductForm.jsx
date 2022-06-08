import { useState, useRef } from 'react'

const AddProductForm = ({addProduct, clearList}) => {
	const [productName, setProductName] = useState('')
	const input = useRef()

	const handleSubmit = e => {
		e.preventDefault()
		input.current.focus()
		
		if(productName.trim() === '')
			return

		addProduct(productName)
		setProductName('')
	}

	return (
		<form  onSubmit={handleSubmit}>
			<div id="form_controls" className=" ">
				<div className='form-input'>
					<input type="text" ref={input} value={productName} onChange={e => {setProductName(e.target.value)} } placeholder='Varans namn' className='form-control-lg '/>
					<button className="button_add btn-lg btn-dark">Lägg till</button>
				</div>
				<div>
					<button onClick={clearList} className='btn-delete-all btn btn-sm'>Töm <br/>Listan</button>
				</div>

			</div>
		</form>
	)
}

export default AddProductForm