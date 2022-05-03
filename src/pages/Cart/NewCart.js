import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { StyledButton } from '../../components/vendor/Button.styled';
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
// import CartContent from "../../components/Cart/CartContent";
// import CartCard from "../../components/Cart/CartCard";
import "../../styles/CartStyles/MyCart.css";
import EmptyCart from "./EmptyCart";

export default function NewCart(){
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <>
      <Navbar />
      <CartContainer>
          <Heading>My cart</Heading>
          <CartMain>
            <CartWrapper>
              {cart.map((item) => {
                  return  <Card product ={item} key={item._id}/>
                })}
               
            </CartWrapper>
            <CartSummary/>
          </CartMain>
      </CartContainer>
      <Footer />
    </>
  );
};

const Card = ({product}) =>{
  const keys = Object.keys(product)
  return(
    <CartCard>
      <Wrapper image>
        <ImgWrapper>
          <img src={product['image']} alt='Image' />
        </ImgWrapper>
        <StyledButton 
          type="button"
          id="remove" name='remove' label="remove item"
        >
          Remove item
        </StyledButton>
      </Wrapper>
      
      <Wrapper decription>
        <Heading smallHeading>Name</Heading>
        {keys.map((item,index)=>{
          return(
            <Wrapper key={`${product['name']}`} flex>
              <Text>{item}</Text>
              <Text>{product[item]}</Text>
            </Wrapper>
          )
        })}
        <StyledButton 
          type="button"
          id="remove" name='remove' label="remove item"
        >
          Remove item
        </StyledButton>
      </Wrapper>
      <Wrapper price>
        <Text>N{product['price']}</Text>
        <Wrapper flex>
        <StyledButton type="button" id="dec" small name='remove' label="-">
          -
        </StyledButton>
          <Text>1</Text>
        <StyledButton type="button" id="inc" small name='remove' label="+">
          +
        </StyledButton>
        </Wrapper>
        
      </Wrapper>
    </CartCard>
  )
}



const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size:${props=> props.smallHeading ? "1em" : "2em"};
  line-height: 78px;
  width:100%;
  text-align:${props=> props.smallHeading ? "left" : "center"};
  color:${({smallHeading, color})=> smallHeading && color ? color : ""};


    @media (max-width:720px){
        font-size:36px;
        line-height:40px;
        
    }
`;
const CartContainer = styled.section`
width:100%;
padding:1em 3em;
display:grid;
gap:2em;
grid-template-columns:1fr;
margin:0;
`

const CartMain = styled.div`
display:grid;
grid-template-columns:3fr 2fr;
justify-content:space-between;
margin:0;
`
const CartWrapper = styled.div``
const CartCard= styled.div`
padding:1em;
display:grid;
grid-template-columns:1fr 1fr 1fr;
`
const ImgWrapper = styled.div`

`
const Text = styled.p``
const Wrapper = styled.div`

`
const CartSummary = styled.div``
