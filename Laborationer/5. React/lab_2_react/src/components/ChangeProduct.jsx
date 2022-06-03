import {useState, useRef, useEffect} from 'react'

const ChangeProduct = ( {product, changeText} ) => {

	const [text, setText] = useState(product.name)
	const input = useRef()

	useEffect( () => {
		input.current.focus()
	}, []) // Lämnas deps. arrayen tom så körs useEffect endast 1 gånr, då komponenten skapas

	const handleSub = e => {
		e.preventDefault() // Förhindrar att sidan laddas om då submit körs vilket är standardförfarande
		changeText(text)
	}

	return (
		<form className='ChangeProduct' onSubmit={handleSub}>
			<input type="text" ref={input} value={text}  onChange={e => setText(e.target.value)} />
			<button className="btn-change"><i className="fa-solid fa-check"></i></button>
		</form>
	)
}

export default ChangeProduct