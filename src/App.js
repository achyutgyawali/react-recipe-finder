import styled from "styled-components";
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput, AboutLink, SignUpLink, ContactLink } from "./components/headerComponents";
import { RecipeContainer, CoverImage, RecipeName, IngredientText, SeeMoreText } from "./components/recipeComponent";
import { useState } from "react";
import Axios, * as others from 'axios';


const APP_ID = "5a62ff99";
const APP_KEY = "c8960840fc5ee2a0ee8e69232821689b";

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;

const RecipeComponent = (props) => {
  const {recipeObj} =props;
  return (
    <RecipeContainer>
      <CoverImage src={recipeObj.image} />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientText>Ingredient</IngredientText>
      <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
  )
}
function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);


  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };
  

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput
            placeholder="Search Recipe"
            onChange={onTextChange}
          />
        </SearchComponent>
        <AboutLink>About</AboutLink>
        <ContactLink>Contact</ContactLink>
        <SignUpLink>SignUp</SignUpLink>
      </Header>
      <RecipeListContainer>
        {recipeList.length && recipeList.map((recipeObj) =>(

        <RecipeComponent recipeObj ={recipeObj.recipe}/>
        ) )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
