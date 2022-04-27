import styled from "styled-components";

export default function Input({name, value, onChange}) {
  return (
        <Inputs
          id={name}
          name={name}
          placeholder={`${name}`}
          type="text"
        //   value={value}
        //onChange={(e) => setName(e.target.value)}
        />
  );
}


const Inputs = styled.input`
padding:8px;
display:block;
margin:8px auto;
width:220px;
font-size:14px;
border-color:transparent;

:focus{
  outline:none;
  border-bottom:1px solid grey;
}

`;

