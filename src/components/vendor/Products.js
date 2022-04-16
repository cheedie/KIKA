import shirt from "../../assets/vendor/images/shirt.png"
import styled from "styled-components";
import image from "../../assets/vendor/images/image_vector.png"
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput ,Wrapper} from './Form.style';
import {useFormik} from 'formik';
import * as Yup from 'yup'

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
                <StyledForm>
                    <Wrapper>
                        <Heading> + Add New Product</Heading>
                    </Wrapper>
                    
                    <Wrapper>
                        <UploadInput type='file'/>
                        <Wrapper grid gap='2'>
                            <Wrapper>
                                <StyledLabel className="floating">A new product</StyledLabel>
                                <StyledInput type='text' placeholder='A new product' floating/>
                            </Wrapper>
                            <Wrapper flex>
                            <Wrapper>
                                <StyledLabel className="floating">Price</StyledLabel>
                                <StyledInput type='text' placeholder='A new product' floating/>
                            </Wrapper>
                            <Wrapper>
                                <StyledLabel className="floating">Discounted Price</StyledLabel>
                                <StyledInput type='text' placeholder='A new product' floating/>
                            </Wrapper>

                            </Wrapper>
                        </Wrapper>

                    </Wrapper>

                    <Wrapper>
                        <Wrapper>
                            <StyledLabel className="floating">Select category</StyledLabel>
                            <StyledInput type='text' placeholder='A new product' floating/>
                        </Wrapper>
                        
                       
                    </Wrapper>

                        <StyledButton type='submit' label ='Add Product'/>
                   
                </StyledForm>
            </UploadContainer>
        </UploadWrapper>

    )    
}

const Container = styled.div`
  position: relative;
  margin:0;
  order:${props=>props.order};
  display:${props=>props.grid ? 'grid' : props.flex ? 'flex' : 'block'};
  gap:${props=>props.gap?`${props.gap}em`:''};
  align-items:${props=>props.flex ? 'center' : ''};
`

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
padding:1.5em;
`

const UploadInput = styled.input`
background:url(${image}) no-repeat;
background-size:contain;
width :213px;
height :213px;
text-indent:-1000em;
padding:1em !important;
border:2px dotted #C4C4C4  !important;
cursor:crosshair;
`
const Input = styled.input`
padding:1em !important;
cursor:crosshair;
`

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 100%;
  line-height: 78px;
  width:100%;
  text-align:center;

    @media (max-width:720px){
        font-size:36px;
        line-height:40px;
        
    }
`;