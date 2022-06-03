
import ProductRow from './ProductRow'

const ProductList = ({ products, removeProduct, toggleDone, changeProduct }) => {
	return (
		<div className="prod_list">
		{	products.map(product => <ProductRow key={product.id} product={product} toggleDone={toggleDone} removeProduct={removeProduct} changeProduct={changeProduct}/>)
		}
		{	!products.length && (
				<div className="text-center">No products to show</div>
			)
		}
		</div>
	)
}

export default ProductList