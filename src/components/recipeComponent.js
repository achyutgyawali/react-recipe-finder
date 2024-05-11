import styled from "styled-components";
const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;
const RecipeContainer = styled.div`
display:flex;
flex-direction: column;
padding: 10px;
box-shadow: 0 3px 10px 0 #aaa;
border-radius: 20px;
width: 300px;
`;
const CoverImage = styled.img`
height:200px;
border-radius: 20px;
`;
const RecipeName = styled.span`
font-size: 18px;
font-weight:bold;
color: black;
margin: 10px;
border-radius: 20px;
`;
const IngredientText = styled.span`
font-size: 18px;
border: solid 1px black;
cursor: pointer;
padding: 10px 15px;
color: black;
text-align: center;
margin-bottom: 12px;
border-radius: 20px;
&:hover {
    background-color: #FCD667;
  }
`;
const SeeMoreText = styled(IngredientText)`
color: black;
border: solid 1px black;
&:hover {
    background-color: #FCD667;
  }
`;
export default{
    RecipeListContainer,
    RecipeContainer,
    CoverImage,
    RecipeName,IngredientText,
    SeeMoreText,
};