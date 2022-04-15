import shirt from "../../assets/vendor/images/shirt.png"
import styled from "styled-components";
import image_vector from "../../assets/vendor/images/image_vector.png"
export default function Products() {
  return (
    <div id="wrapper" className="products">
        <nav>
            <div>
            <a href="/" className="subtitle active">All (2)</a>
            <a href="/" className="subtitle">Online (0)</a>
            <a href="/" className="subtitle">Pending Review (0)</a>
            <a href="/" className="subtitle">Draft (0)</a>
            </div>
            <button className="button">Add Product</button>
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
                <ProductTile/>
            </div>

        </div>
        </div>
        <Upload />

    
    </div>
  )
}



function ProductTile() {
    const tile=[
        {
            image:shirt,
            title:"Navy Blue Botton Down Shirt",
            status:"Pending review",
            stock:"In Stock",
            price:"N3,400",
            views:"5",
            date:"09/04/2022"
        },
        {
            image:shirt,
            title:"Navy Blue Botton Down Shirt",
            status:"Pending review",
            stock:"In Stock",
            price:"N3,400",
            views:"5",
            date:"09/04/2022"
        },
        {
            image:shirt,
            title:"Navy Blue Botton Down Shirt",
            status:"Pending review",
            stock:"In Stock",
            price:"N3,400",
            views:"5",
            date:"09/04/2022"
        }
    ]
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

function Upload () {
    return(
        <UploadWrapper>
            <UploadContainer>
                <form>
                    <h1>Add New Product</h1>
                    <div>
                        <input type='file'/>
                        <img src='' alt='vec'/>
                    </div>
                   
                </form>
            </UploadContainer>
        </UploadWrapper>

    )    
}
const UploadWrapper = styled.section`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
min-width: 906px;
min-height: 787px;
background: rgba(0, 0, 0, 0.4);
display:flex;
justify-content:center;
align-items:center
`
const UploadContainer = styled.div`
top:0;
left:0;
min-width: 906px;
min-height: 787px;
background:#FFFFFF;
`