import styled from "styled-components";
import { DialogTitle, Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { HeaderContainer, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput,NavLink,NavLinks} from "./components/headerComponents";
import { CategoryContainer,CategoryButton,CategoryIcon,RecipeListContainer,Placeholder,CategoryText,Categorydiv} from "./components/category";
import { AboutUsContainer,AboutCard,AboutContent,AboutDescription,PersonImage} from "./components/about";
import { SignupContainer,InputField,Button,CancelButton,SignupContent,Buttonsection} from "./components/signup";
import Recipe from "./components/recipeComponent";
import Axios from 'axios';
import React, { useState, useRef ,useEffect} from "react";

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

const PopularContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;

  & > ${Recipe.RecipeContainer} {
    width: 300px;
    box-shadow: 0 3px 10px 0 #aaa;
    border-radius: 20px;
    padding: 10px;
  }
`;

const Footer =styled.div`
background-color: #f2f2f2;
display: flex;
flex-direction:column;
align-items: center;
font-size:12px;
gap:0px;

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

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await Axios.get(
          `https://api.edamam.com/search?q=popular&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
        );
        setPopularRecipes(response.data.hits);
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
      }
    };

    fetchPopularRecipes();
  }, []); 

  return (
    <PopularContainer>
      <h1>Popular Recipes</h1>
      <RecipeListContainer>
        {popularRecipes.length ? (
          popularRecipes.map((recipeObj, index) => (
            <RecipeComponent key={index} recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder>No popular recipes found.</Placeholder>
        )}
      </RecipeListContainer>
    </PopularContainer>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const signUpRef = useRef(null);
  const homeRef =useRef(null);
  const searchRef =useRef(null);


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
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

  
  const handleSignUp = () => {
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Sign Up successful!");
  };
  
    const handleCancel = () => {
      setUsername("");
      setEmail("");
      setPassword("");
    };

  return (
    <>
    <p ref={homeRef}/>
    <HeaderContainer>
      <NavLink onClick={() => scrollToRef(homeRef)}>
      <AppNameComponent>
          <AppIcon src="/hamburger.svg" />
          <strong style={{fontSize:20}}>Vok Laagyo!!</strong>
        </AppNameComponent>
        </NavLink>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} onClick={() => scrollToRef(searchRef)}/>
        </SearchComponent>
        <NavLinks>
          <NavLink onClick={() => scrollToRef(aboutRef)}>About</NavLink>
          <NavLink onClick={() => scrollToRef(teamRef)}>Team</NavLink>
          <NavLink onClick={() => scrollToRef(signUpRef)}>SignUp</NavLink>
        </NavLinks>
      </HeaderContainer>
      
      
    <Container>
      
      <h1>Categories</h1>

      <CategoryContainer>
        
        {categories.map((category, index) => (<Categorydiv>
          <CategoryButton key={index} onClick={() => filterByCategory(category.name)}>
            <CategoryIcon src={category.icon} />
          </CategoryButton>
          <CategoryText>{category.name}</CategoryText>
          </Categorydiv>
        ))}
      </CategoryContainer>

      <RecipeListContainer ref={searchRef}>
        {recipeList.length ? (
          recipeList.map((recipeObj, index) => (
            <RecipeComponent key={index} recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder>
            <Popular />
          </Placeholder>
        )}
      </RecipeListContainer>
      <p className="typingEffect" ref={aboutRef}/>
      <br/>
      <br/>
      <AboutUsContainer>
          <AboutDescription style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>About US</h1>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 100, width: '100%', marginBottom: 20 }}>
    <img src="/kathford1.png" style={{ width: 200, height: 200, borderRadius: '50%' ,border:2,borderBlockColor:'black'}} />
    <div style={{ textAlign: 'left' ,fontSize:20,fontStyle:'italic'}}>
      <h3>Flavorsome Finds: Your Ultimate Recipe Haven</h3>
        <p>Embark on a gastronomic journey with our vast collection of recipes, curated to satisfy every craving and culinary curiosity.</p>
        <p>Explore a world of flavors, from comforting classics to innovative creations, all designed to elevate your home cooking experience.</p>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 100, width: '100%', marginBottom: 20 }}>
    <div style={{ textAlign: 'right',fontSize:20,fontStyle:'italic' }}>
      <h3>Easy-to-Follow Instructions</h3>
        <p>Our recipes come with clear, step-by-step instructions, ingredients with weight making cooking an enjoyable and stress-free experience for novice and seasoned chefs alike.</p>
        <p>Each recipe is accompanied by vivid imagery, guiding you through the cooking process and igniting inspiration.</p>
    </div>
    <img src="/kathford2.jpeg" style={{ width: 200, height: 200, borderRadius: '50%' }} />
  </div>
  <p ref={teamRef}/>
</AboutDescription>
<br/>
        <h1>Our Team</h1>

        <AboutContent>
        
          <AboutCard>
          <a href="https://www.facebook.com/biraj.maharjan.96" target="_blank">
            <PersonImage src="/biraj.jpg" alt="Person 1" />
          </a>
            <p><strong>Biraj Maharjan</strong></p>
            <p>Lalitpur,Kathmandu</p>
            <p>+977-9999999999</p>
            <p>birajmaharjan@gmail.com</p>
          </AboutCard>
          <AboutCard>
          <a href="https://www.facebook.com/anish.gyawali.505" target="_blank">
            <PersonImage src="/achyut.jpg" alt="Person 1" />
          </a>
            <p><strong>Achyut Gyawali</strong></p>
            <p>Bhaktapur,Kathmandu</p>
            <p>+977-9999999999</p>
            <p>achyutgyawali777@gmail.com</p>
          </AboutCard>
        </AboutContent>
        <p ref={signUpRef}/>
      </AboutUsContainer>
      <h1>Sign Up</h1>
        <SignupContent>
      <SignupContainer>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Buttonsection>
      <Button onClick={handleSignUp}>Sign Up</Button>
      <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </Buttonsection>
    </SignupContainer>
        </SignupContent>
        
    </Container>
    <Footer>
        <p>Designed and Developed by Biraj & Achyut</p>
        <p>&copy; 2024 Copyright: kath_mind_dev</p>
    </Footer>
    </>
  );
}

export default App;
