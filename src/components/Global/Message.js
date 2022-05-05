import styled from "styled-components";

export default function Message({message}){
    return (
      <Display>
        <h2>{message}</h2>
      </Display>
    );
  };

const Display = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
margin:0;
padding:4em 2em;
`
