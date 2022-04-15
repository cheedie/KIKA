import React, { useState } from 'react'
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from '../landing-page/Navbar'
// import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput } from './Form.style';



function VendorSignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [biz, setBiz] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");

    // const form_data = [
    //   {input:"Full Name", short:"name",type:"text", onChange:(e) => setName(e.target.value)},
    //   {input:"Email Address", short:"email",type:"email", onChange:(e) => setName(e.target.value)},
    //   {input:"Password", short:"password",type:"password", onChange:(e) => setPassword(e.target.value)},
    //   {input:"Confirm Password", type:"password"},
    //   {input:"Business Name",  short:"biz",type:"text", onChange:(e) => setBiz(e.target.value)},
    //   {input:"Residential Address", short:"address", type:"text", onChange:(e) => setAddress(e.target.value)},
    //   {input:"City/Town",  short:"city", type:"text", onChange:(e) => setCity(e.target.value)},
    //   {input:"State",  short:"state",type:"text", onChange:(e) => setState(e.target.value)},
    // ]

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
        <Navbar />
        <Heading>Sell on Kika</Heading>
        <StyledForm onSubmit={handleSubmit} input={StyledInput} wrapper={Wrapper}>
            {/* {form_data.map((data,index)=>{
              const {name,short,type} = data
              return(
                <Wrapper key={`${short}-${index}`}>
                  <StyledInput
                    id={short}
                    name={name}
                    placeholder={name}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <StyledLabel htmlFor="name"> FullName </StyledLabel>
              </Wrapper>
              )
            })} */}

            {/* <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="name"> Full Name </StyledLabel>
                <StyledInput
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="off"
                  value={values.name}
                  onChange={handleChange}
                />
                {touched.name && errors.name ?(
                  <Message>{errors.name}</Message>
                ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="email"> Email Address </StyledLabel>
                <StyledInput
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  normal
                 />
                 {touched.email && errors.email ?(
                  <Message>{errors.email}</Message>
                ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="password"> Phone Number </StyledLabel>
                <StyledInput
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  />
                  {touched.phone && errors.phone ?(
                    <Message>{errors.phone}</Message>
                  ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="name"> Password </StyledLabel>
                <StyledInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  />
                  {touched.password && errors.password ?(
                    <Message>{errors.password}</Message>
                  ) : null}
                
              </Wrapper>
              <Wrapper flex>
               <StyledInput
                  id="terms"
                  name="terms"
                  placeholder="terms and condition"
                  type="checkbox"
                  value={values.terms}
                  onChange={handleChange}
                  checkbox
                 />
                 <StyledLabel normal htmlFor="name"> I accept the KIKA <Link to="/">E-CONTACT POLICIES</Link> </StyledLabel>
                 {touched.terms && errors.terms  ?(
                    <Message>{errors.phone}</Message>
                  ) : null}
              </Wrapper> */}

               {/* <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="biz"> Business Name </StyledLabel>
                <StyledInput
                  id="biz"
                  name="biz"
                  placeholder="Business Name"
                  autoComplete="off"
                  value={values.biz}
                  onChange={handleChange}
                />
                {touched.biz && errors.biz ?(
                  <Message>{errors.biz}</Message>
                ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="email"> Email Address </StyledLabel>
                <StyledInput
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  normal
                 />
                 {touched.email && errors.email ?(
                  <Message>{errors.email}</Message>
                ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="password"> Phone Number </StyledLabel>
                <StyledInput
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  />
                  {touched.phone && errors.phone ?(
                    <Message>{errors.phone}</Message>
                  ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor="name"> Password </StyledLabel>
                <StyledInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  />
                  {touched.password && errors.password ?(
                    <Message>{errors.password}</Message>
                  ) : null}
                
              </Wrapper> */}
            <Wrapper>
              <Wrapper>
                <StyledLabel htmlFor="name"> Full Name </StyledLabel>
                <StyledInput
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <StyledLabel htmlFor="email"> Email Address </StyledLabel>
                <StyledInput
                  id="email"
                  name="name"
                  placeholder="Email Address"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <StyledLabel htmlFor="password"> Password </StyledLabel>
                <StyledInput
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <StyledLabel htmlFor="name"> Confirm password </StyledLabel>
                <StyledInput
                  id="confirm"
                  name="confirm"
                  placeholder="Confirm password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setName(e.target.value)}
                />
              </Wrapper>
              <Wrapper>
                <StyledLabel htmlFor="name"> Full Name </StyledLabel>
                <StyledInput
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Wrapper>
            </Wrapper>

            <Button type="submit">Join the waitlist</Button>
          
           
           </StyledForm>
       
    </div>
  )
}

export default VendorSignup

const Wrapper = styled.div`
  position: relative;
  margin:0;
  order:${props=>props.order};
`;

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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em 2em;
  background: #2e3192;
  border: 2px solid #2e3192;
  font-style: normal;
  font-weight: 700;
  font-size: 17.61px;
  text-transform: uppercase;
  color: #ffffff;
  box-sizing:border-box;
  max-width: 280px;
  align-self:flex-end;
  cursor: pointer;



  :hover {
    color: #2e3192;
    border-color: #2e3192;
    background: transparent;
  }
  @media (max-width:720px){
    //   padding:0.7em 0.8em;
    //   font-size:100%;
  }
`;



// const Wrapper = styled.div`
//   position: relative;
//   margin:0;
// `;
// const Form = styled.form`
//   display: grid;
//   justify-self: flex-end;
//   position: relative;
//   gap:2em;
//   @media (max-width:720px){
//    width:100%;
//    gap:3em;
//    margin:3em 0;
// }
//   ${Button}{
//       justify-self:flex-end;
//       margin-top:0.5em;
//   }

//   ${Wrapper} {
//     :focus-within {
//       label {
//         top: -8px;
//       }
//     }

//     input:not(:placeholder-shown):not(:focus) ~ label {
//       top: -8px;
//       font-size: 13px;
//     }
//   }
// `;