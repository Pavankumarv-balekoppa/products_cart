import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cart = () => {
    let [value, setvalue] = useState([])
    let param=useParams()
    console.log(param.id)
    useEffect(() => {
        let fecting = async () => {
            // let response = await fetch(`http://localhost:5000/products/${param.id}`)
            let response = await fetch('https://dummyjson.com/products')
            // let response = await fetch(`https://dummyjson.com/products/${param.id}`)
            let data = await response.json()
            setvalue(data.products)
        }
        fecting()
    }, [])
    return (
        <div className="products">
            {value.map((x) => (
                <div className="home bg-primary m-4 rounded-3">
                    <div className="items  d-flex ">
                    <div className="img m-4 ">
                        <img className="rounded-3" src={x.thumbnail} alt="" />
                    </div>
                    <div className="disc m-3">
                        <h3>Id :{x.id}</h3>
                        <h3>Title :<b>{x.title}</b></h3>
                        <h3>Desc :{x.description}</h3>
                        <h3>Category :{x.category}</h3>
                        <h3>Brand :{x.brand}</h3>
                        <h3>Rating :{x.rating}*</h3>
                        <h3>Price :<del>{x.price*80}</del></h3>
                        {/* <h3>Discount price :  -{x.discountPercentage}% <mark> Rs :{x.price-x.price / 100 * x.discountPercentage}</mark></h3> */}
                        <h3>Discount price :  <span className="text-danger">-{x.discountPercentage}%</span> <mark> Rs : {Math.trunc(x.price*80-(x.price *80 / 100 * x.discountPercentage))}</mark></h3>
                        <h3>Stock :{x.stock}</h3><br />
                        <button className="bg-warning rounded-4">Add Cart</button>
                    </div>
                </div>
                 <div className="imsges d-flex m-3">
                 <img className=" rounded-3 w-25 m-4" src={x.images[0]} alt="" />
                 <img className="rounded-3 w-25 m-4" src={x.images[1]} alt="" />
                 <img className="rounded-3 w-25 m-4" src={x.images[2]} alt="" />
                 {/* <img className="w-25" src={x.images[3]} alt="" /> */}
             </div>
                </div>
            ))}
        </div>
        );
    }
    
    export default Cart;