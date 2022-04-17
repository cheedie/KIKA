import styled from 'styled-components'
import image_bg from "../../assets/vendor/images/image_vector.png"
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput, InputWrapper, Wrapper, Message} from './Form.style';
import { AiOutlineCloseCircle as Close} from 'react-icons/ai'
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';

export default function UploadForm({setUpload}) {

    const FILE_SIZE = 160 * 1024;
   const [imagePreview, setImagePreview] = useState({
        path: "",
      });


    const handleFileChange = (e) => {
        console.log(e.target.files)
        setImagePreview({
            ...values.image,
            path: URL.createObjectURL(e.target.files[0]),
        });
    };
  
    const {handleSubmit,handleChange,values, touched, errors } = useFormik({
        initialValues:{
            name:'',
            price:'',
            discount:'',
            image:undefined 
        },

        validationSchema: Yup.object({
          name: Yup.string().max(30, 'Full should not not be longer than 30 character')
          .min(10, 'Fullname should be longer than 10 characters').required('Required'),
          
          price: Yup.string().required('Please Include price'),

          image: Yup.mixed()
          .test("FILE_SIZE", "Uploaded file is too big.",value => !value || (value && value.size <= FILE_SIZE))
          .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, and .doc", (value) => {
            return !value || (value && (
                  value[0].type === "image/jpeg" ||
                  value[0].type === "image/bmp" ||
                  value[0].type === "image/png" ||
                  value[0].type === "application/msword"
              ))
          })
          .required('Please upload product Image'),
        }),

        onSubmit:({name, email, password, id})=>{

          }
    })

    return(
        <UploadWrapper>
            <UploadContainer>
                <StyledForm products gap='2' onSubmit={handleSubmit}>
                    <Wrapper flex>
                        <Heading> + Add New Product </Heading>
                        <ExitButton onClick={()=>setUpload(false)}><Close/></ExitButton>
                    </Wrapper>
                    
                    <Wrapper grid gap="1"
                        Justify='space-between'
                        Align='flex-start'
                        GTC='1fr 2fr'
                    >
                        <UploadInput type='file' 
                            img={imagePreview} 
                            name='image' 
                            onChange={handleFileChange}/>
                            {touched.image && errors.image  ?(
                            <Message>{errors.image}</Message>
                            ) : null}
                        <Wrapper grid gap='2'>
                            <InputWrapper>
                                <StyledLabel className="floating">A new product</StyledLabel>
                                <StyledInput type='text' name='name' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.name && errors.name  ?(
                                <Message>{errors.name}</Message>
                                ) : null}
                            </InputWrapper>
                            <Wrapper grid gap="1" GTC="1fr 1fr">
                            <InputWrapper>
                                <StyledLabel >Price</StyledLabel>
                                <StyledInput type='text' name='price' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.price && errors.price  ?(
                                <Message>{errors.price}</Message>
                                ) : null}
                            </InputWrapper>
                            <InputWrapper>
                                <StyledLabel >Discounted Price</StyledLabel>
                                <StyledInput type='text' name='discount' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.discount && errors.discount  ?(
                                <Message>{errors.discount}</Message>
                                ) : null}
                            </InputWrapper>

                            </Wrapper>
                        </Wrapper>

                    </Wrapper>

                    <Wrapper grid gap="2">
                        <InputWrapper>
                            <StyledLabel className="floating" >Category</StyledLabel>
                            <StyledInput type='text' 
                            name='category' 
                            placeholder='A new product'
                            onChange={handleChange}
                             floating/>
                            {touched.category && errors.category  ?(
                                <Message>{errors.category}</Message>
                                ) : null}
                        </InputWrapper>
                        <InputWrapper>
                            <StyledLabel className="floating" >Product tags</StyledLabel>
                            <StyledInput type='text' 
                            name='tags'
                            onChange={handleChange} 
                            placeholder='Product tags' 
                            floating/>
                            {touched.tags && errors.tags  ?(
                                <Message>{errors.tags}</Message>
                                ) : null}
                        </InputWrapper>
                        <InputWrapper>
                            <StyledLabel className="floating" >Details of product</StyledLabel>
                            <StyledInput type='text' 
                            name='description' 
                            placeholder='Description' 
                            onChange={handleChange}
                            floating/>
                            {touched.description && errors.description  ?(
                                <Message>{errors.description}</Message>
                                ) : null}
                        </InputWrapper>
                        
                       
                    </Wrapper>

                        <StyledButton type='submit' label ='Add Product'/>
                   
                </StyledForm>
            </UploadContainer>
        </UploadWrapper>

    ) 
}


const UploadWrapper = styled.section`
position:absolute;
top:0;
left:0;
width:100%;
background: rgba(0, 0, 0, 0.4);
display:flex;
justify-content:center;
align-items:center
`
const UploadContainer = styled.div`
max-width: 906px;
height: 100%;
background:#FFFFFF;
padding: 0em 1.5em;
`

const UploadInput = styled.input`
background: ${props=>props.img.path ? `url(${props.img.path}) no-repeat` : `url(${image_bg}) no-repeat`};
background-size:contain;
background-position:center;
background-repeat:no-repeat;
width :213px;
height :213px;
text-indent:-1000em;
padding:1em !important;
border:2px dotted #C4C4C4  !important;
cursor:crosshair;
`


const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  line-height: 78px;
  width:100%;
  text-align:left;

    @media (max-width:720px){
        font-size:36px;
        line-height:40px;
        
    }
`;

const ExitButton = styled.button`
border: none;
background: none;
display:flex;
font-size: 2em;

&:hover{
    color:#F15A24;
    cursor:pointer;
    transform:scale(1.2);
}
`
