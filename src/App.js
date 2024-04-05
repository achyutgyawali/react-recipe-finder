import styled from "styled-components";
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput,AboutLink,SignUpLink,ContactLink} from "./components/headerComponents";
import { RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientText, SeeMoreText } from "./components/recipeComponent";
const Container = styled.div`
display: flex;
flex-direction: column;
`;



function App() {
  return (
    <Container>
      <Header><AppNameComponent><AppIcon src="/hamburger.svg" />Recipe Finder</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipe" />
        </SearchComponent>
        <AboutLink>About</AboutLink>
        <ContactLink>Contact</ContactLink>
        <SignUpLink>SignUp</SignUpLink>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/hamburger.svg" />
          <RecipeName>MatarPaneer</RecipeName>
          <IngredientText>Ingredient</IngredientText>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
