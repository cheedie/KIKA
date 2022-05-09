import styled from "styled-components";
import image_bg from "../../assets/vendor/images/image_vector.png";
import { StyledButton } from "./Button.styled";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  InputWrapper,
  Wrapper,
  Message,
} from "./Form.style";
import { AiOutlineCloseCircle as Close } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useVendorContext } from "../../context/vendor_context";


export default function ProductPopUp({ setPopUp }) {
  const {
    //product,
    createProduct,
    endCreateProduct,
    getVendorProducts,
    creating_product,
    creating_product_error,
    creating_product_message,
  } = useVendorContext();

  const [uploadMessage, setUploadMessage] = useState(false);

  useEffect(() => {
    if (
      !creating_product &&
      creating_product_message &&
      !creating_product_error &&
      creating_product_message
    ) {
      setUploadMessage(false);
    } else if (creating_product_error) {
      setUploadMessage(false);
    } else {
      setUploadMessage(true);
    }
  }, []);

  const product = {
    brand: "Gucci",
    category: "Female",
    color: "black, purple",
    countInStock: 10,
    description: "Beautiful Floral Gown",
    grade: "A",
    image: "https://res.cloudinary.com/kika/image/upload/v1651749062/products/alz4qb1axzxwxm8inyk9.png",
    name: "Beautiful Floral gown",
    numReviews: 0,
    price: 2000,
    rating: 0,
    reviews: [],
    size: "M",
    slug: "beautiful-floral-gown",
    updatedAt: "2022-05-05T11:11:02.591Z",
    vendor: {_id: '6273b00345ed5a00043d478f', name: 'John Doe', email: 'johndoe@gmail.com'},
    _id: "6273b0c645ed5a00043d47a5",
  }

  // const FILE_SIZE = 5 * 160 * 1024;
  // const [imagePreview, setImagePreview] = useState({
  //   path: "",
  // });

  // const {
  //   setFieldValue,
  //   handleBlur,
  //   handleSubmit,
  //   handleChange,
  //   values,
  //   touched,
  //   errors,
  // } = useFormik({
  //   initialValues: {
  //     name: "",
  //     price: "",
  //     discount: "",
  //     newArrival: true,
  //     category: "", //['Male', 'Female']
  //     grade: "", //['A', 'B']
  //     brand: "",
  //     size: "",
  //     color: "",
  //     countInStock: "1",
  //     description: "",
  //     image: "",
  //   },

  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .min(3, "Product name should be longer than 3 characters")
  //       .max(30, "Product name should not be longer than 30 characters")
  //       .required("Required"),
  //     description: Yup.string()
  //       .required("Required")
  //       .min(10, "Product description should be longer than 10 characters")
  //       .max(
  //         150,
  //         "Product description should not not be longer than 150 characters"
  //       ),
  //     price: Yup.string()
  //       .required("Please include price")
  //       .matches(/^[0-9]+$/, "Price should be digits"),
  //     discount: Yup.string().matches(/^[0-9]+$/, "Price should be digits"),
  //     image: Yup.mixed()
  //       .required("Required")
  //       .test(
  //         "FILE_SIZE",
  //         "Uploaded file is too big.",
  //         (value) => !value || (value && value.size <= FILE_SIZE)
  //       )
  //       .test(
  //         "type",
  //         "Only the following formats are accepted: .jpeg, .jpg, .bmp, and .doc",
  //         (value) => {
  //           return (
  //             !value ||
  //             (value &&
  //               (value.type === "image/jpeg" ||
  //                 value.type === "image/bmp" ||
  //                 value.type === "image/png"))
  //           );
  //         }
  //       ),
  //     category: Yup.string()
  //       .required("Please choose category")
  //       .oneOf(["Male", "Female"]),
  //     grade: Yup.string().required("Please choose grade").oneOf(["A", "B"]),
  //     size: Yup.string()
  //       .required("Please include size")
  //       .oneOf(["S", "M", "L", "XL"]),
  //     countInStock: Yup.string()
  //       .required("Please include quantity")
  //       .matches(/^[0-9]+$/, "Quantity should be in digits"),
  //   }),

  //   onSubmit: (values) => {
  //     return createProduct(values).then((response) => {
  //       if (response.data?.data && response.data?.message) {
  //         getVendorProducts();
  //         setTimeout(() => setUpload(false), 2000);
  //       }
  //     });
  //   },
  // });

  // const handleFileChange = (e) => {
  //   setFieldValue("image", e.currentTarget.files[0]).then(() =>
  //     setImagePreview({
  //       ...values.image,
  //       path: URL.createObjectURL(e.target.files[0]),
  //     })
  //   );
  // };
  // const handleNameChange = (e) => {
  //   setFieldValue("name", e.target.value);
  //   endCreateProduct();
  // };
  // const [readOnly, setReadOnly] = useState(true)

  return (
    <ProductWrapper>
      <ProductContainer>
        <Wrapper
          products
          gap="2"
          grid
        >
          <Wrapper flex>
            <Heading>{product.slug}</Heading>
            
            <ExitButton
              id="exit"
              name="exit_button"
              onClick={() => {
                setPopUp({state:false});
              }}
            >
              <Close />
            </ExitButton>
          </Wrapper>

          <Wrapper
            grid
            gap="2"
            Justify="space-between"
            Align="flex-start"
            GTC="1fr 1fr"
            padding="0 0.8em"
          >
            <ImgWrapper style={{
              
              }}>
              <Image
                src={product.image}
                alt={product.slug}
                id="image"
              />
            </ImgWrapper>
            <Wrapper gap="1" grid GTC="1fr">
              <Wrapper>
                <Subtitle>Name</Subtitle>
                <Title>{product.name}</Title>
              </Wrapper>
              <Wrapper>
                <Subtitle>Brand</Subtitle>
                <Title>{product.brand}</Title>
              </Wrapper>
              <Wrapper>
                <Subtitle>Color(s)</Subtitle>
                <Title>{product.color}</Title>
              </Wrapper>
              <Wrapper grid GTC="repeat(auto-fill, minmax(64px, 1fr))">
                <Wrapper>
                  <Subtitle>Size</Subtitle>
                  <Title>{product.size}</Title>
                </Wrapper>
                <Wrapper>
                  <Subtitle>Grade</Subtitle>
                  <Title>{product.grade}</Title>
                </Wrapper>
                <Wrapper>
                  <Subtitle>Category</Subtitle>
                  <Title>{product.category}</Title>
                </Wrapper>
              </Wrapper>
              <Wrapper>
                <Subtitle>Price</Subtitle>
                <Title>₦ {product.price}</Title>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper 
            grid
            gap="2"
            Justify="space-between"
            Align="flex-start"
            GTC="1fr"
            padding="0 0.8em"
          >
            <Wrapper>
              <Subtitle description>{product.description}</Subtitle>
            </Wrapper>
          </Wrapper>
          

          
          {/* <Wrapper flex>
            {values.name &&
            (uploadMessage ||
              creating_product ||
              creating_product_error ||
              creating_product_message) ? (
              <Heading
                smallHeading
                color={
                  creating_product_error && !creating_product
                    ? "red"
                    : creating_product || product
                    ? "green"
                    : "black"
                }
              >
                {" "}
                {creating_product_message}
              </Heading>
            ) : null}
          </Wrapper> */}

        </Wrapper>
        <Wrapper 
            grid
            gap="2"
            Justify="space-between"
            Align="flex-start"
            GTC="1fr"
            padding="0 0.8em"
           
          >
            <StyledButton
              id="delete"
              name="delete"
              type="delete"
              label="delete"
               style={{"justify-self":"flex-start"}}
            >
            Delete
          </StyledButton>

            
          </Wrapper>
      </ProductContainer>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 830px;
  max-height: 900px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
const ProductContainer = styled.div`
  width:100%;
  max-width: 725px;
  height: 100%;
  background: #ffffff;
  padding: 0em 1.5em;
`;
const ImgWrapper = styled(Wrapper)`
width:280px;
height:350px;
&::after{
    content: '';
    top: 0px;
    right: -2em;
    position: absolute;
    height: 100%;
    width: 1px;
    background: grey;
  }
`

const Image = styled.img`
  background: ${(props) =>
    props.src
      ? `url(${props.src}) no-repeat`
      : `url(${image_bg}) no-repeat`};
  background-size: cover;
  object-fit:cover;
  object-position:center;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  max-height: 350px;
  text-indent: -1000em;
  border: 2px dotted #c4c4c4 !important;

  
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.smallHeading ? "1em" : "2em")};
  line-height: 78px;
  width: 100%;
  text-align: left;
  color: ${({ smallHeading, color }) => (smallHeading && color ? color : "")};

  @media (max-width: 720px) {
    font-size: 36px;
    line-height: 40px;
  }
`;
const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 100%;
  width: 100%;
  text-align: left;
  padding:0.2em 0;
  //color: ${({ smallHeading, color }) => (smallHeading && color ? color : "")};

  @media (max-width: 720px) {
    font-size: 24px;
    line-height: 100%;
  }
`;
const Subtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  padding:0.1em 0;
`;

const ExitButton = styled.button`
  border: none;
  background: none;
  display: flex;
  font-size: 2em;
  &:hover {
    color: #f15a24;
    cursor: pointer;
    transform: scale(1.2);
  }
`;


