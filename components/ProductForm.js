import { useState, useContext } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOptions'

function ProductForm({ product }) {
  console.log(product)
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {}

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    }
  })

  const defaultValues = {}
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  //   console.log('defaultvalues', defaultValues)
  //   console.log('variant options', allVariantOptions)
  return (
    <div className="flex w-full flex-col rounded-2xl p-4 shadow-lg md:w-1/3">
      <div className="text-2xl font-bold">{product.title}</div>
      <span className="pb-6">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button className="rounded-lg bg-black px-2 py-3 text-white hover:bg-gray-800">
        Add to card
      </button>
    </div>
  )
}

export default ProductForm