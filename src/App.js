import styled from "styled-components";
import { DialogTitle, Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput, AboutLink, SignUpLink, ContactLink } from "./components/headerComponents";
import Recipe from "./components/recipeComponent";
import { useState } from "react";
import Axios, * as others from 'axios';


const APP_ID = "5a62ff99";
const APP_KEY = "c8960840fc5ee2a0ee8e69232821689b";

const Container = styled.div`
display: flex;
flex-direction: column;
backgroung-colour : red;
`;
const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;
const Placeholder = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;

const Footer = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 3px 0 0 6px #555;
height: 40vh;
`;
const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const {recipeObj} =props;
  return (
    <>
    <Dialog open={show}>
    <DialogTitle id="alter-dialog-slide-title">Ingredient</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {recipeObj.ingredients.map((ingredientObj) =>(
              <tr>
              <td>{ingredientObj.text}</td>
              <td>{ingredientObj.weight}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
          <Recipe.IngredientText onClick={() => window.open(recipeObj.url)}>See More</Recipe.IngredientText>
          <Recipe.SeeMoreText onClick={() => setShow("")}>Close</Recipe.SeeMoreText>
        </DialogActions>
    </Dialog>
    <Recipe.RecipeContainer>
      <Recipe.CoverImage src={recipeObj.image} />
      <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
      <Recipe.IngredientText onClick={()=> setShow(true)}>Ingredient</Recipe.IngredientText>
      <Recipe.SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</Recipe.SeeMoreText>
    </Recipe.RecipeContainer>
    </>
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
        {recipeList.length ? recipeList.map((recipeObj) =>(

        <RecipeComponent recipeObj ={recipeObj.recipe}/>
        ) ): <Placeholder>
          <h1>Vok-Lagyo-My-Lord</h1>
          <img src="/hamburger.svg" alt="Description" style={{opacity: 0.2, height: 200, width:200}} ></img>
          <h2>Your Ultimate Recipe Finder</h2>
          </Placeholder>}
      </RecipeListContainer>
      <Footer>
      </Footer>
    </Container>
  );
}

export default App;
