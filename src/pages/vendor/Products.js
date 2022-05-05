import UploadForm from "../../components/vendor/UploadForm";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Loading from "../../components/Global/Loading";
import Error from "../../components/Global/Error";
import Message from "../../components/Global/Message";

import { useVendorContext } from "../../context/vendor_context";

export default function Products() {
    const [isUploading, setUpload] = useState(false)
    const { 
        products, 
        getVendorProducts, 
        endCreateProduct, 
        getting_products_loading: loading,
        getting_details_error: error,
    } = useVendorContext();

      useEffect(() => {
        getVendorProducts()
      }, []);

  return (
      <>
    <div id="wrapper" className="products" style={isUploading? {'overflow':"hidden"}:{'overflow':"visible"}}>
        <nav>
            <div>
            <Link to="/" className="subtitle active">All (2)</Link>
            <Link to="/" className="subtitle">Online (0)</Link>
            <Link to="/" className="subtitle">Pending Review (0)</Link>
            <Link to="/" className="subtitle">Draft (0)</Link>
            </div>
            <button className="button" onClick={()=>{
                endCreateProduct()
                setUpload(true)
                }}>Add Product</button>
        </nav>
        <div className="body">
            <div className="filters">
            <div className='dropdown'>

                    <select name="size">
                        <option value="">XX</option>
                        <option value="XL">XL</option>
                    </select>
                    <label htmlFor='Filter' className="button">Filter</label>
            </div>
                <form>
                    <input 
                        name="search" 
                        placeholder='Search Products'
                        type="dropdown"
                        
                    />
                    <input name="submit" 
                    id="submit"
                    type="submit" 
                    placeholder="submit"
                    className="button"
                    />
                </form>

                <div className='dropdown'>
                    {/* <label htmlFor='Filter'>Filter</label> */}
                    <select name="size" placeholder='select'>
                        <option value=""> Select Category</option>
                        <option value="A">A-grade</option>
                        <option value="B">B-grade</option>
                    </select>
                    </div>

            </div>

        { loading ? <Loading/>  
        : error ? <Error/> 
        : products.length <=0 ? 
        <Message message="No products available..."/>:
        <div className="product_list">
            <div className="product_titles">
                <p className="product_image_title">Image</p>
                <p>Name</p>
                <p>Status</p>
                <p>Stock</p>
                <p>Price</p>
                <p>Views</p>
                <p>Date</p>
            </div>
            <div className="products">
                <ProductTile products={products}/>
            </div>

        </div>}
        </div>
        
       
    </div>
    {isUploading ? <UploadForm setUpload={setUpload}/>:null}
    </>
  )
}



function ProductTile({products}) {

    const tile= products.reverse().map((value) =>{
    let product= {
                    image:value.image,
                    title:value.name,
                    status:"Pending review",
                    stock:value.countInStock > 0 ? "In Stock" : "Out of Stock",
                    price:`₦ ${value.price}`,
                    views:"5",
                    date:"09/04/2022",
                    id:value._id,
                    reviews: value.review,
                    size: value.size,
                };
     return product
    })

  return (
      <>
      {tile.map((item,index)=>{
          return(
            
            <div className="product_tile" key={`product-${index}`}>
                <div className="product_img">
                    <img src={item.image} alt={item.title}/>
                </div>
                <p className="product_title">{item.title}</p>
                <p className="product_status">{item.status}</p>
                <p className="product_stock">{item.stock}</p>
                <p className="product_price">{item.price}</p>
                <p className="product_views">{item.views}</p>
                <p className="product_date">{item.date}<br/>Last Modified</p>
            </div>
          )
      })}
      </>
      )

  
}

// const baseProductExample = {
// brand: "Canon",
// category: "Male",
// cloudinary_id: "products/axvcpx02jlfdv8ebhovx",
// color: "black",
// countInStock: 1,
// createdAt: "2022-05-01T19:01:03.854Z",
// description: "This should work now",
// grade: "A",
// image: "https://res.cloudinary.com/kika/image/upload/v1651431663/products/axvcpx02jlfdv8ebhovx.png",
// name: "Test Product camera",
// newArrival: true,
// numReviews: 0,
// price: 10000,
// rating: 0,
// reviews: [],
// size: "S",
// slug: "test-product-camera",
// updatedAt: "2022-05-01T19:01:03.854Z",
// vendor: "626ecf4ea091e700041abe4a",
// __v: 0,
// _id: "626ed8efa091e700041abe63"
// }




