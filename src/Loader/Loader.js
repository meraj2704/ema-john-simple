const cartProductLoader = async () =>{
    const loaderProdcucts = await fetch('products.json');
    const products = await loaderProdcucts.json();
    console.log(products);
}

export default cartProductLoader;