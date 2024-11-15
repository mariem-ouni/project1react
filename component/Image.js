import {product}  from "./product";

 const Image=( )=> {
    return (
    <img src={product.imageUrl} alt={product.imageUrl} style={{width:'50%'}}/>
)
 }
 export default Image