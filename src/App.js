import styled from "styled-components";
import { DialogTitle, Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { HeaderContainer, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput,NavLink,NavLinks} from "./components/headerComponents";
import { CategoryContainer,CategoryButton,CategoryIcon,RecipeListContainer,Placeholder } from "./components/category";
import { AboutUsContainer,AboutCard,AboutContent,AboutDescription,PersonImage,Heading,Section,Image} from "./components/about";
import Recipe from "./components/recipeComponent";
import Axios from 'axios';
import React, { useState, useRef } from "react";

const APP_ID = "5a62ff99";
const APP_KEY = "c8960840fc5ee2a0ee8e69232821689b";

const categories = [
  { name: "Breakfast", icon: "/breakfast-icon.svg" },
  { name: "Lunch", icon: "/kitchen-cooker-utensils-icon.svg" },
  { name: "Dinner", icon: "/dish-spoon-knife-icon.svg" },
  { name: "Dessert", icon: "/ice-cream-icon.svg" }
];

const Container = styled.div`
  //background-image: url('/anish.png') ;
  text-align: center;
`;

const RecipeComponent = ({ recipeObj }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Dialog open={show} style={{borderRadius:20}}>
        <DialogTitle id="alter-dialog-slide-title">Ingredient</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj, index) => (
                <tr key={index}>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Recipe.IngredientText onClick={() => window.open(recipeObj.url)}>
            See More
          </Recipe.IngredientText>
          <Recipe.SeeMoreText onClick={() => setShow(false)}>Close</Recipe.SeeMoreText>
        </DialogActions>
      </Dialog>
      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientText onClick={() => setShow(true)}>Ingredient</Recipe.IngredientText>
        <Recipe.SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</Recipe.SeeMoreText>
      </Recipe.RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const signUpRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    fetchRecipe(category.toLowerCase());
  };

  return (
    <>
    <HeaderContainer>
      <AppNameComponent>
          <AppIcon src="/hamburger.svg" />
          <strong style={{fontSize:20}}>Vok Laagyo!!</strong>
        </AppNameComponent>
      
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
        </SearchComponent>
        <NavLinks>
          <NavLink onClick={() => scrollToRef(aboutRef)}>About</NavLink>
          <NavLink onClick={() => scrollToRef(teamRef)}>Team</NavLink>
          <NavLink onClick={() => scrollToRef(signUpRef)}>SignUp</NavLink>
        </NavLinks>
      </HeaderContainer>
    <Container>
      
      <h2>Categories</h2><br/>

      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryButton key={index} onClick={() => filterByCategory(category.name)}>
            <CategoryIcon src={category.icon} />
          </CategoryButton>
        ))}
      </CategoryContainer>

      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj, index) => (
            <RecipeComponent key={index} recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder>
          </Placeholder>
        )}
      </RecipeListContainer>


      <AboutUsContainer>
          <h1 ref={aboutRef}>About US</h1>
          <AboutDescription>
      <Section>
        <Image src="/bg-image.jpg" />
        <Heading>This is heading One</Heading>
      </Section>
      <Section>
        <Heading>This is heading Two</Heading>
        <Image src="/bg-image.jpg" />
      </Section>
    </AboutDescription>
          <br/>

        <h1 ref={teamRef}>Our Team</h1>

        <AboutContent>
        
          <AboutCard>
            <PersonImage src="/bg-image.jpg" alt="Person 1" />
            <p><strong>Biraj Maharjan</strong></p>
            <p>Lalitpur,Kathmandu</p>
            <p>+977-9999999999</p>
            <p>birajmaharjan@gmail.com</p>
          </AboutCard>
          <AboutCard>
            <PersonImage src="/bg-image.jpg" alt="Person 2" />
            <p><strong>Achyut Gyawali</strong></p>
            <p>Bhaktapur,Kathmandu</p>
            <p>+977-9999999999</p>
            <p>achyutgyawali777@gmail.com</p>
          </AboutCard>
        </AboutContent>
      </AboutUsContainer>


      <div ref={signUpRef}>
        <h1>SignUp</h1>
        {/* Your SignUp content goes here */}
      </div>
    </Container>
    </>
  );
}

export default App;
