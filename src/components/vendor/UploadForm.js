import styled from 'styled-components'
import image_bg from "../../assets/vendor/images/image_vector.png"
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput ,Wrapper, Message} from './Form.style';
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
                <StyledForm products onSubmit={handleSubmit}>
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
                            <Wrapper>
                                <StyledLabel className="floating">A new product</StyledLabel>
                                <StyledInput type='text' name='name' onChange={handleChange} placeholder='A new product' floating/>
                            </Wrapper>
                            <Wrapper grid gap="1" GTC="1fr 1fr">
                            <Wrapper>
                                <StyledLabel >Price</StyledLabel>
                                <StyledInput type='text' name='price' onChange={handleChange} placeholder='A new product' floating/>
                            </Wrapper>
                            <Wrapper>
                                <StyledLabel >Discounted Price</StyledLabel>
                                <StyledInput type='text' name='discount' onChange={handleChange} placeholder='A new product' floating/>
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


const UploadWrapper = styled.section`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
/* min-width: 906px;
min-height: 787px; */
background: rgba(0, 0, 0, 0.4);
display:flex;
justify-content:center;
align-items:center
`
const UploadContainer = styled.div`
max-width: 906px;
height: 100%;
background:#FFFFFF;
padding: 3em 1.5em;
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
  font-size: 100%;
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
