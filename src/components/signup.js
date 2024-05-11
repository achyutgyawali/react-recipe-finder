import styled from "styled-components";
export const SignupContainer = styled.div`
background-color: #f2f2f2;
  width: 500px;
  padding: 20px;
  padding-top:50px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 10px 0 #aaa;
  border-radius: 20px;
  text-align: center;
  //margin-top: 15px;
`;

export const InputField = styled.input`
width: 60%;
margin-bottom: 10px;
padding: 15px;
border-radius: 10px;
border: 1px solid #ccc;
`;

export const Button = styled.button`
padding: 10px 20px;
margin: 10px;
border-radius: 5px;
border: 1px solid #ccc;
cursor: pointer;
background-color: #f2f2f2;
text-color: black;
font-size:16px;
&:hover {
  background-color: #FCD667;
}
`;

export const CancelButton = styled(Button)`
  background-color:  #f2f2f2;
  &:hover {
    background-color: #FCD667;
  }
`;
export const SignupContent = styled.div`
display: flex;
justify-content: center;
gap: 20px;
margin-bottom:50px;
`;
export const Buttonsection = styled.div`
display:flex;
justify-content:center;
gap:20px;
`;