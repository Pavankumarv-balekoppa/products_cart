import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    let [value, setvalue] = useState([])
    let param=useParams()
    // console.log(param.id)
    // console.log(value.images[1])
    useEffect(() => {
        let fecting = async () => {
            let response = await fetch(`https://dummyjson.com/products/${param.id}`)
            let data = await response.json()
            setvalue(data)
        }
        fecting()
    }, [])
    return (
        <div className="products">
            <div className="home bg-primary m-4 rounded-3">
                    <div className="items  d-flex ">
                    <div className="img m-4 ">
                        <img className="rounded-3" src={value.thumbnail} alt="" />
                    </div>
                    <div className="disc m-3">
                        <h3>Id :{value.id}</h3>
                        <h3>Title :<b>{value.title}</b></h3>
                        <h3>Desc :{value.description}</h3>
                        <h3>Category :{value.category}</h3>
                        <h3>Brand :{value.brand}</h3>
                        <h3>Rating :{value.rating}*</h3>
                        <h3>Price :<del>{value.price*80}</del></h3>
                        <h3>Discount price :  <span className="text-danger">-{value.discountPercentage}%</span> <mark> Rs : {Math.trunc(value.price*80-(value.price *80 / 100 * value.discountPercentage))}</mark></h3>
                        <h3>Stock :{value.stock}</h3><br />
                        <button className="bg-warning rounded-4">Add Cart</button>
                    </div>
                </div>
                 <div className="imsges d-flex m-3"> 
                 {/* <img className=" rounded-3 w-25 m-4" src={value.images[0]} alt="" /> */}
                 {/* <img className="rounded-3 w-25 m-4" src={value.images[1]} alt="" />
                 <img className="rounded-3 w-25 m-4" src={value.images[2]} alt="" />
                 <img className="rounded-3 w-25 m-4" src={value.images[3]} alt="" />  */}
             </div>
                </div>
        </div>
    );
}

export default ProductDetails;