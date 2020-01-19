const filteredProducts = (products, filters) => {
    return products.filter((product) => {
        return !!product.name.includes(filters.text)
    })
}

export default filteredProducts;