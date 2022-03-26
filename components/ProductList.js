import ProductCard from './ProductCard'
const ProductList = ({ products }) => {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl  py-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
