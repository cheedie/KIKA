import shirt from "../../assets/vendor/images/shirt.png"
import styled from "styled-components";
import image from "../../assets/vendor/images/image_vector.png"
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput } from './Form.style';
import {useFormik} from 'formik';
import * as Yup from 'yup'

export default function Products() {
  return (
    <Container id="Container" className="products">
        <nav>
            <Container>
            <a href="/" className="subtitle active">All (2)</a>
            <a href="/" className="subtitle">Online (0)</a>
            <a href="/" className="subtitle">Pending Review (0)</a>
            <a href="/" className="subtitle">Draft (0)</a>
            </Container>
            <button className="button">Add Product</button>
        </nav>
        <Container className="body">
            <Container className="filters">
            <Container className='dropdown'>

                    <select name="size">
                        <option value="">XX</option>
                        <option value="XL">XL</option>
                    </select>
                    <label htmlFor='Filter' className="button">Filter</label>
                    </Container>
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

                <Container className='dropdown'>
                    {/* <label htmlFor='Filter'>Filter</label> */}
                    <select name="size" placeholder='select'>
                        <option value=""> Select Category</option>
                        <option value="A">A-grade</option>
                        <option value="B">B-grade</option>
                    </select>
                    </Container>

            </Container>

            
        <Container className="product_list">
            <Container className="product_titles">
                <p className="product_image_title">Image</p>
                <p>Name</p>
                <p>Status</p>
                <p>Stock</p>
                <p>Price</p>
                <p>Views</p>
                <p>Date</p>
            </Container>
            <Container className="products">
                <ProductTile/>
            </Container>

        </Container>
        </Container>
        <Upload />

    
    </Container>
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
            
            <Container className="product_tile" key={`product-${index}`}>
                <Container className="product_img">
                    <img src={item.image} alt={item.title}/>
                </Container>
                <p className="product_title">{item.title}</p>
                <p className="product_status">{item.status}</p>
                <p className="product_stock">{item.stock}</p>
                <p className="product_price">{item.price}</p>
                <p className="product_views">{item.views}</p>
                <p className="product_date">{item.date}<br/>Last Modified</p>
            </Container>
          )
      })}
      </>
      )

  
}

function Upload () {
    return(
        <UploadContainer>
            <UploadContainer>
                <StyledForm>
                    <Heading>Add New Product</Heading>
                    <Container>
                        <UploadInput type='file'/>
                        <Container>
                            <Input type='text' placeholder='A new product' />
                            <Container>
                                <Container>
                                    <label>Price</label>
                                    <Input type='text' placeholder='A new product' />
                                </Container>
                                <Container>
                                    <label>Discounted Price</label>
                                    <Input type='text' placeholder='A new product' />
                                </Container>

                            </Container>
                        </Container>

                    </Container>

                    <Container>
                        <Input type='text' placeholder='A new product' />
                        <Input type='text' placeholder='A new product' />
                        <Input type='text' placeholder='A new product' />
                    </Container>

                        <StyledButton type='submit' >Add Product</StyledButton>
                   
                </StyledForm>
            </UploadContainer>
        </UploadContainer>

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