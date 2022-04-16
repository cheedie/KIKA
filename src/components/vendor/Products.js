import shirt from "../../assets/vendor/images/shirt.png"
import styled from "styled-components";
import image from "../../assets/vendor/images/image_vector.png"
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput, Wrapper } from './Form.style';
import {useFormik} from 'formik';
import * as Yup from 'yup'

export default function Products() {
  return (
    <Wrapper id="wrapper" className="products">
        <nav>
            <Wrapper>
            <a href="/" className="subtitle active">All (2)</a>
            <a href="/" className="subtitle">Online (0)</a>
            <a href="/" className="subtitle">Pending Review (0)</a>
            <a href="/" className="subtitle">Draft (0)</a>
            </Wrapper>
            <button className="button">Add Product</button>
        </nav>
        <Wrapper className="body">
            <Wrapper className="filters">
            <Wrapper className='dropdown'>

                    <select name="size">
                        <option value="">XX</option>
                        <option value="XL">XL</option>
                    </select>
                    <label htmlFor='Filter' className="button">Filter</label>
                    </Wrapper>
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

                <Wrapper className='dropdown'>
                    {/* <label htmlFor='Filter'>Filter</label> */}
                    <select name="size" placeholder='select'>
                        <option value=""> Select Category</option>
                        <option value="A">A-grade</option>
                        <option value="B">B-grade</option>
                    </select>
                    </Wrapper>

            </Wrapper>

            
        <Wrapper className="product_list">
            <Wrapper className="product_titles">
                <p className="product_image_title">Image</p>
                <p>Name</p>
                <p>Status</p>
                <p>Stock</p>
                <p>Price</p>
                <p>Views</p>
                <p>Date</p>
            </Wrapper>
            <Wrapper className="products">
                <ProductTile/>
            </Wrapper>

        </Wrapper>
        </Wrapper>
        <Upload />

    
    </Wrapper>
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
            
            <Wrapper className="product_tile" key={`product-${index}`}>
                <Wrapper className="product_img">
                    <img src={item.image} alt={item.title}/>
                </Wrapper>
                <p className="product_title">{item.title}</p>
                <p className="product_status">{item.status}</p>
                <p className="product_stock">{item.stock}</p>
                <p className="product_price">{item.price}</p>
                <p className="product_views">{item.views}</p>
                <p className="product_date">{item.date}<br/>Last Modified</p>
            </Wrapper>
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
                    <Heading>Add New Product</Heading>
                    <Wrapper>
                        <UploadInput type='file'/>
                        <Wrapper>
                            <Input type='text' placeholder='A new product' />
                            <Wrapper>
                                <Wrapper>
                                    <label>Price</label>
                                    <Input type='text' placeholder='A new product' />
                                </Wrapper>
                                <Wrapper>
                                    <label>Discounted Price</label>
                                    <Input type='text' placeholder='A new product' />
                                </Wrapper>

                            </Wrapper>
                        </Wrapper>

                    </Wrapper>

                    <Wrapper>
                        <Input type='text' placeholder='A new product' />
                        <Input type='text' placeholder='A new product' />
                        <Input type='text' placeholder='A new product' />
                    </Wrapper>

                        <StyledButton type='submit' >Add Product</StyledButton>
                   
                </StyledForm>
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
const UploadContainer = styled.Wrapper`
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