import styled  from "styled-components";

export const StyledButton =  styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:7.377px;
    border: 2px solid #F15A24;
    background:#F15A24;
    font-style: normal;
    font-weight: 700;
    font-size: 17.61px;
    text-decoration:none;
    height:40px;
    text-transform: uppercase;
    color: #ffffff;
    box-sizing:border-box;
    min-width: 260px;
    max-width: ${({wide})=> wide ? "auto" :"280px"};
    align-self:flex-end;
    justify-self:${({wide})=> wide ? "auto" :"flex-end"};
    cursor: pointer;



  :hover {
    color: #F15A24;
    border-color: #F15A24;
    background: transparent;
  }
  @media (max-width:720px){
    //   padding:0.7em 0.8em;
    //   font-size:100%;
  }
`;