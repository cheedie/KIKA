import styled from "styled-components";
import {Colors}  from '../../styles/vendor/themes/colors'

// const {wineRed,darkRed,lightPink,lightGreen,lighterGreen,darkGreen} = Colors;

// const ContentWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #eee;
//   background: ${darkRed};
//   height: 100vh;
// `;

export const StyledLabel = styled.label`
  cursor: pointer;
  font-weight: 500;
  text-transform:${(props)=>props.normal ? "" :"capitalize" };
  letter-spacing: -0.008em;
  /* pointer-events:none; */
  //margin:1em 0;
  transition:0.2s ease all; 

  &.floating{
    position:absolute;
    left:5px;
    padding:0 0.5em;
    background:#fff;
    margin:0;

      &:focus{
      top:-8px;
    }   
  }
`
export const StyledInput = styled.input`
    font-family:'montserrat';
    font-size:14px;
    font-weight:500;
    padding:${props=>props.floating ? "1.2em" : "1.2em 1em"};
    margin-right:${(props)=>props.checkbox ? "1em" :"" };
    display:block;
    width:${(props)=>props.checkbox ? "" :"100%" };
    background:#FFFFFF;
    border:1px solid #C4C4C4;
    text-transform:${(props)=>props.type === "email" ? "lowercase" :"capitalize" };

    :focus{
    outline:none;
    border-bottom:1px solid grey;
   
        &:not(::placeholder-shown){
            background:white;
        }
    
        &:not(::placeholder-shown) ~ ${StyledLabel}.floating {
            top:-8px;
            font-size:13px;
        }
    }
    &::placeholder{
        opacity:0;
        }
    &:not(:placeholder-shown){
        background:#ffffff;
    }
`
export const InputWrapper = styled.div`
  position: relative;
  margin:0;
  order:${props=>props.order};
`;

export const StyledForm = styled.form`
  display: grid;
  justify-self: center;
  justify-content:space-around;
  align-items:center;
  grid-template-columns:1fr 1fr;
  grid-template-columns: repeat(2, minmax(280px,380px));
  position: relative;
  gap:4em;
  width:100%;
  
  @media (max-width:720px){
  grid-template-columns:1fr 1fr;
   width:100%;
   gap:3em;
   margin:3em 0;
}
  .submit{
      justify-self:flex-end;
      margin-top:0.5em;
  }

  ${InputWrapper} {
    :focus-within {
      label.floating {
        top: -8px;
      }
    }

    input:not(:placeholder-shown):not(:focus) ~ ${StyledLabel}.floating {
      top: -8px;
      font-size: 13px;
    }
  }
`;