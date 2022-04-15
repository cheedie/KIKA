import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import signImage from "../../assets/user/sign-in.png";
import Navbar from '../landing-page/Navbar'
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput } from './Form.style';
import {useFormik} from 'formik';
import * as Yup from 'yup'
import Footer from '../landing-page/Footer';
import { useUserContext } from "../../context/user_context";

function VendorSignup() {
  const navigate = useNavigate();
  const { uploadUserDetails } = useUserContext();

  const [isVisible, setVisible ] = useState(false);
  const [page, setPage ] = useState(1);
  const SUPPORTED_FORMATS=["image/jpeg" , "image/bmp", "image/png","application/msword"]
  const FILE_SIZE = 1000000;
           
    const {handleSubmit,handleChange, values, touched, errors} = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            password:'',
            biz:'',
            address:'',
            city:'',
            state:'',
            terms:'',
            id_num:'',
            id:'',
            otp:''
            
        },

        validationSchema: Yup.object({
          name: Yup.string().max(30, 'Full should not not be longer than 30 character')
          .min(10, 'Fullname should be longer than 10 characters').required('Required'),
          phone: Yup.number().min(11, 'Phone Number should not be less than 11 characters').required('Required').positive().integer(),
          email:  Yup.string().email().required('Required'),
          password: Yup.string().min(8, 'Password should be longer than 8 characters').required('Required'),
          terms: Yup.boolean().required('Required'),
          biz: Yup.string().required('Required'),
          id: Yup.mixed()
          .test("FILE_SIZE", "Uploaded file is too big.",value => !value || (value && value.size <= FILE_SIZE))
          // .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
          // value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
          .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, and .doc", (value) => {
            return !value || (value && (
                  value[0].type === "image/jpeg" ||
                  value[0].type === "image/bmp" ||
                  value[0].type === "image/png" ||
                  value[0].type === "application/msword"
              ))
          }),
        }),

        onSubmit:({name, email, password, id})=>{
          if(page === 1){
            setPage(2);
           // alert(`Render page 2`);
            console.log('Page:: ', page)
          }
          if(page === 2){
            alert(`Name: ${name}, password: ${password}, email: ${email}, img_size : ${id}`)
          }
          // else{
            
          //}
          }
    })
    
    const form_data = [
      {input_name:"Full Name", short:"name",},
      {input_name:"Email Address", short:"email", input_type: "email"},
      {input_name:"Phone Number", short:"phone"},
      {input_name:"Password", short:"password", input_type: isVisible ? "text" : "password"},
      {input_name:"Business Name",  short:"biz",},
      {input_name:"Residential Address", short:"address"},
      {input_name:"City/Town",  short:"city"},
      {input_name:"State",  short:"state"},
    ]

  
  return (
    <div>
        <Navbar />
        <Heading> {page === 1 ? 'Sell on Kika' : 'Vendor Verification'}</Heading>
        <StyledForm onSubmit={handleSubmit} input={StyledInput} wrapper={Wrapper}>
            {page === 1 ?
            <>
            {/* First column */}
            <Wrapper  grid gap="2">
                {form_data.slice(0,4).map((data,index)=>{
                  const {input_name,short, input_type} = data
                  return(
                    <Wrapper key={`${short}-${index}`} grid gap="0.5">
                      <StyledLabel htmlFor={short}> {input_name} </StyledLabel>
                      <StyledInput
                        id={short}
                        name={short}
                        placeholder={input_name}
                        autoComplete="off"
                        value={values[short]}
                        type={input_type ? input_type : "text"}
                        onChange={handleChange}
                      />
                      {touched[short] && errors[short]?(
                          <Message>{errors[short]}</Message>
                        ) : null}
                      {
                        short === "password" && values.password? 
                        <Wrapper flex>
                          <StyledInput
                            id="show_password"
                            type='checkbox'
                            checkbox
                            onChange={()=>isVisible ? setVisible(false): setVisible(true)}
                          /> 
                          <StyledLabel normal htmlFor={"show_password"}>Show password</StyledLabel>
                        </Wrapper> : null
                      }
                        
                    </Wrapper>
                  )
                })}

              <Wrapper flex>
                <StyledInput
                    id="terms"
                    name="terms"
                    type="checkbox"
                    value={values.terms}
                    onChange={handleChange}
                    checkbox
                  />
                  <StyledLabel normal htmlFor="name"> I accept the KIKA <Link to="/">E-CONTACT POLICIES</Link> </StyledLabel>
                  {touched.terms && errors.terms  ?(
                      <Message>{errors.terms}</Message>
                    ) : null}
                </Wrapper>
              
            </Wrapper>

            {/* Second column */}
            <Wrapper  grid gap="2">
              {form_data.slice(4,8).map((data,index)=>{
                const {input_name,short} = data
                    return(
                      <Wrapper key={`${short}-${index}`} grid gap="0.5">
                        <StyledLabel htmlFor={short}> {input_name} </StyledLabel>
                        <StyledInput
                          id={short}
                          name={short}
                          placeholder={input_name}
                          autoComplete="off"
                          value={values[short]}
                          onChange={handleChange}
                        />
                        {touched[short] && errors[short]?(
                          <Message>{errors[short]}</Message>
                        ) : null}
                      </Wrapper>
                    )
                })}
              <StyledButton type={"submit"} label="continue" align-self="end"
                onClick={()=> console.log(page)}             
              />
            </Wrapper>
            </>
            :
            <Wrapper  grid gap="2">
              
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor='id_num' normal> National Identification Number </StyledLabel>
                <StyledInput
                  id='id_num'
                  name='id_num'
                  placeholder='National Identification Number'
                  autoComplete="off"
                  value={values.id_num}
                  onChange={handleChange}
                />
                {touched.id_num && errors.id_num?(
                  <Message>{errors.id_num}</Message>
                ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor='id' normal>Identification</StyledLabel>
                <StyledInput
                  id='id'
                  name='id'
                  placeholder='Identification'
                  autoComplete="off"
                  type="file"
                  value={values.id}
                  onChange={handleChange}
                />
                {touched.id && errors.id?(
                  <Message>{errors.id}</Message>
                ) : null}
              </Wrapper>
              <Wrapper grid gap="0.5">
                <StyledLabel htmlFor='otp' normal> Input code sent to your email address </StyledLabel>
                <StyledInput
                  id='otp'
                  name='otp'
                  placeholder='Input code'
                  autoComplete="off"
                  value=''
                  onChange={handleChange}
                />
                {touched.otp && errors.otp?(
                  <Message>{errors.otp}</Message>
                ) : null}
              </Wrapper>
                    
              <StyledButton type="button" label="continue"
                onClick={()=> console.log('hello')}
                />
            </Wrapper>

            }

        </StyledForm>
        <Footer/>
    </div>
  )
}

export default VendorSignup

const Wrapper = styled.div`
  position: relative;
  margin:0;
  order:${props=>props.order};
  display:${props=>props.grid ? 'grid' : props.flex ? 'flex' : 'block'};
  gap:${props=>props.gap?`${props.gap}em`:''};
  align-items:${props=>props.flex ? 'center' : ''};
`

const Message = styled.p`
 font-size:11px;
 font-style:italic;
 font-weight:500;
 color:#f15a24;
 margin:-1em 0;
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




