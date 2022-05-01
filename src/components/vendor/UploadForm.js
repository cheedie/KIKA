import styled from 'styled-components'
import image_bg from "../../assets/vendor/images/image_vector.png"
import { StyledButton } from './Button.styled';
import {StyledForm , StyledLabel, StyledInput, StyledTextArea, StyledSelect , InputWrapper, Wrapper, Message} from './Form.style';
import { AiOutlineCloseCircle as Close} from 'react-icons/ai'
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';
import { useVendorContext } from "../../context/vendor_context";

export default function UploadForm({setUpload}) {
    
  const { createProduct2 } = useVendorContext();

    const FILE_SIZE = 5 * 160 * 1024;
   const [imagePreview, setImagePreview] = useState({
        path: "",
      });
   const [uploadStatus, setUploadStatus] = useState({
       status:false,
       message:''
   });



  
    const {setFieldValue, handleBlur, handleSubmit,handleChange,values, touched, errors } = useFormik({
        initialValues:{
            name:'',
            price:'',
            discount:'',
            newArrival:true,
            category:'', //['Male', 'Female']
            grade:'',//['A', 'B']
            size:'',
            countInStock:'1',
            description:'',
            image:'',
        },

        validationSchema: Yup.object({
          name: Yup.string().min(3, 'Product name should be longer than 3 characters')
          .max(30, 'Product name should not be longer than 30 characters').required('Required'),
          description: Yup.string().required('Required').min(10, 'Product description should be longer than 10 characters')
          .max(150, 'Product description should not not be longer than 150 characters'),
          price: Yup.string().required('Please include price').matches(/^[0-9]+$/, "Price should be digits"),
          discount: Yup.string().matches(/^[0-9]+$/, "Price should be digits"),
          image: Yup.mixed().required('Required')
          .test("FILE_SIZE", "Uploaded file is too big.",value => !value || (value && value.size <= FILE_SIZE))
          .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, and .doc", (value) => {
            return !value || (value && (
                  value.type === "image/jpeg" ||
                  value.type === "image/bmp" ||
                  value.type === "image/png"
              ))
          }),
          category: Yup.string().required('Please choose category').oneOf(['Male', 'Female']),
          grade: Yup.string().required('Please choose grade').oneOf(['A', 'B']),
          size: Yup.string().required('Please include size').oneOf(['S', 'M', 'L', 'XL']),
          countInStock: Yup.string().required('Please include quantity').matches(/^[0-9]+$/, "Quantity should be in digits"),
         
        }),

        onSubmit:values=>{
            setUploadStatus({
                status:true,
                message: 'Uploading...'
            })
            return createProduct2(values)
            .then((response)=>{
                setUploadStatus({
                    status: response.error ? true: false, 
                    message: response.error.includes('name') ? "Product name already exists" 
                    : response.error ? response.error : response.data.message
                })
                console.log("response on submit", response)
            });
            //setUpload(false)
        }
    })

    const handleFileChange = (e) => {
    console.log(e.target.files)
    setFieldValue("image", e.currentTarget.files[0])
    .then(()=>setImagePreview({
            ...values.image,
            path: URL.createObjectURL(e.target.files[0]),
        })
    )
    };

    return(
        <UploadWrapper>
            <UploadContainer>
                <StyledForm products gap='2' 
                onBlur={handleBlur} 
                onSubmit={handleSubmit}
                enctype="multipart/form-data"
                >
                    <Wrapper flex>
                        <Heading> + Add New Product </Heading>
                        <ExitButton onClick={()=>setUpload(false)}><Close/></ExitButton>
                    </Wrapper>
                    
                    <Wrapper grid gap="1"
                        Justify='space-between'
                        Align='flex-start'
                        GTC='1fr 2fr'
                    >
                        <Wrapper>
                        <UploadInput  
                            img={imagePreview} 
                            id='image'
                            name='image'
                            placeholder='Identification'
                            type="file"
                            accept="image/*"
                            onChange={(event) => handleFileChange(event)}
                        />  <br/> <span>{values.name && values.image ? values.name : values.image.name}</span>
                            
                            {touched.image && errors.image  ?(
                            <Message margin="0">{errors.image}</Message>
                            ) : null}
                            </Wrapper>
                        <Wrapper grid gap='2'>
                            <InputWrapper>
                                <StyledLabel className="floating">A new product</StyledLabel>
                                <StyledInput type='text' name='name' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.name && errors.name  ?(
                                <Message margin="0">{errors.name}</Message>
                                ) : null}
                            </InputWrapper>
                            {/*------ description -------*/}
                            <InputWrapper>
                                <StyledLabel className="floating">description</StyledLabel>
                                <StyledTextArea type='text' name='description' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.description && errors.description  ?(
                                <Message margin="0">{errors.description}</Message>
                                ) : null}
                            </InputWrapper>

                            {/*------ Price and Discount -------*/}
                            <Wrapper grid gap="1" GTC="1fr 1fr">
                            <InputWrapper>
                                <StyledLabel >Price</StyledLabel>
                                <StyledInput type='text' name='price' onChange={handleChange} placeholder='price' floating/>
                                {touched.price && errors.price  ?(
                                <Message margin="0">{errors.price}</Message>
                                ) : null}
                            </InputWrapper>
                            <InputWrapper>
                                <StyledLabel >Discounted Price</StyledLabel>
                                <StyledInput type='text' name='discount' onChange={handleChange} placeholder='discount' floating/>
                                {touched.discount && errors.discount  ?(
                                <Message margin="0">{errors.discount}</Message>
                                ) : null}
                            </InputWrapper>

                            </Wrapper>

                            {/*------Color & Brand-------*/}
                            <Wrapper grid gap="1" GTC="1fr 1fr">
                            <InputWrapper>
                                <StyledLabel >Color</StyledLabel>
                                <StyledInput type='text' name='color' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.color && errors.color  ?(
                                <Message margin="0">{errors.color}</Message>
                                ) : null}
                            </InputWrapper>
                            <InputWrapper>
                                <StyledLabel >Brand</StyledLabel>
                                <StyledInput type='text' name='brand' onChange={handleChange} placeholder='A new product' floating/>
                                {touched.brand && errors.brand  ?(
                                <Message margin="0">{errors.brand}</Message>
                                ) : null}
                            </InputWrapper>

                                
                            </Wrapper>
                            {/*------Category, Grade & Size-------*/}
                            <Wrapper grid GTC="1fr 1fr 1fr 1fr" gap="1">
                                <InputWrapper>
                                    <StyledLabel className="floating" >Category</StyledLabel>
                                    <Dropdown options={['---','Male', 'Female']} type='text' 
                                        name='category' 
                                        placeholder='category'
                                        onChange={handleChange}
                                        value={values.category}
                                        floating/>
                                    {touched.category && errors.category?
                                    (<Message margin="0">{errors.category}</Message>) : null}
                                </InputWrapper>
                                <InputWrapper>
                                    <StyledLabel className="floating" >Size</StyledLabel>
                                    <Dropdown options={['---','S', 'M', 'L', 'XL']} type='text' 
                                        name='size' 
                                        placeholder='size'
                                        onChange={handleChange}
                                        floating
                                        value={values.size}
                                        />
                                    {touched.size && errors.size ?
                                    (<Message margin="0">{errors.size}</Message>) : null}
                                </InputWrapper>
                                <InputWrapper>
                                    <StyledLabel className="floating" >Grade</StyledLabel>
                                    <Dropdown options={['---','A', 'B']} type='text' 
                                        name='grade' 
                                        placeholder='grade'
                                        onChange={handleChange}
                                        floating
                                        value={values.grade}
                                        />
                                    {touched.grade && errors.grade ?
                                    (<Message margin="0">{errors.grade}</Message>) : null}
                                </InputWrapper>
                                <InputWrapper>
                                <StyledLabel >Quantity</StyledLabel>
                                <StyledInput type='text' 
                                name='countInStock' 
                                onChange={handleChange} 
                                value={values.countInStock}
                                placeholder='Quantity' small/>
                                {touched.countInStock && errors.countInStock  ?(
                                <Message margin="0">{errors.countInStock}</Message>
                                ) : null}
                            </InputWrapper>
                            </Wrapper>
                        </Wrapper>

                    </Wrapper>
                    
                    <StyledButton id='submit' name='submit' type='submit' label ='Add Product'>Upload</StyledButton>
                    <Wrapper flex>
                        <Heading smallHeading> {uploadStatus.message}</Heading>
                    </Wrapper>
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
height:100vh;
background: rgba(0, 0, 0, 0.4);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
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
  font-size:${props=> props.smallHeading ? "1em" : "2em"};
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

const Dropdown = ({name, options, onChange}) =>{
    return (
        <StyledSelect name={name} onChange={onChange}>
            {options.map((option, index)=>{
                return(
                    <option 
                        key={`${option}-${index}`} 
                        value={option}>
                        {option}
                    </option>
                )
            })}
        </StyledSelect>
    )
}

