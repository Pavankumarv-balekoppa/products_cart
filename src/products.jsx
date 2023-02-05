import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// http://localhost:7000/products
// https://dummyjson.com/products
const Products = () => {
    let [value, setvalue] = useState([])
    let nevigate=useNavigate()


    useEffect(() => {
        let fecting = async () => {
            // let response = await fetch('http://localhost:5000/products')
            let response = await fetch('https://dummyjson.com/products')
            let data = await response.json()
            setvalue(data.products)
        }
        fecting()
    }, [])
    let nevi=(id1)=>{
        nevigate(`/products/${id1}`)
    }
    return (
        <div className="home">
            <h1 align="center">products</h1><hr />
            {value.map((x) => (
                <div className="items bg-primary m-4 d-flex rounded-3">
                    <div className="img m-4">
                        <img className="rounded-3" src={x.thumbnail} alt="" />
                    </div>
                    <div className="disc m-3">
                    <h3>Id :{x.id}</h3>
                        <h3>Title :<b>{x.title}</b></h3>
                        <h3>Desc :{x.description}</h3>
                        <h3>Category :{x.category}</h3>
                        <h3>Brand :{x.brand}</h3>
                        <h3>Rating :{x.rating} *</h3>
                        <h3>Price :<del>{x.price*82}</del></h3>
                        <h3>Discount price :  <span className="text-danger">-{x.discountPercentage}%</span> <mark> Rs : {Math.trunc(x.price*80-(x.price *80 / 100 * x.discountPercentage))}</mark></h3>
                        <h3>Stock :{x.stock}</h3><br />
                        <button className="bg-danger rounded-3" onClick={()=>nevi(x.id)}>More detail</button>
                    </div>

                </div>
            ))}
        </div>
    );
}
export default Products;