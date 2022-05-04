import styled from "styled-components";

export default function Error(){
  return (
    <Display>
      <h2>there was an error...</h2>
    </Display>
  );
};


const Display = styled.div`
width:100%;
height:100%;
margin:0;
display:flex;
justify-content:center;
align-items:center;
`