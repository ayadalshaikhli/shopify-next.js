import type { NextPage } from 'next'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'

const Home: NextPage = ({ products }) => {
  console.log(products)

  return (
    <div className="hello">
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products },
  }
}

export default Home
