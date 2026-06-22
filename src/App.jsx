import { useRef, useState } from "react";
import { useRecipes }      from "./hooks/useRecipes";
import { Header }          from "./components/Header/Header";
import { CategoryBar }     from "./components/CategoryBar/CategoryBar";
import { RecipeGrid }      from "./components/RecipeGrid/RecipeGrid";
import { AboutSection }    from "./components/AboutSection/AboutSection";
import { SignupForm }      from "./components/SignupForm/SignupForm";
import { Footer }          from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const { recipeList } = useRecipes(query);

  const refs = {
    home:   useRef(null),
    search: useRef(null),
    about:  useRef(null),
    team:   useRef(null),
    signup: useRef(null),
  };

  const scrollTo = (key) =>
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <span ref={refs.home} />
      <Header onSearch={setQuery} onNav={scrollTo} />
      <div className="page-container">
        <h1>Categories</h1>
        <CategoryBar onSelect={setQuery} />
        <span ref={refs.search} />
        <RecipeGrid
          recipes={recipeList}
          placeholder="Search for a recipe or select a category above."
        />
        <span ref={refs.about} />
        <AboutSection />
        <span ref={refs.team} />
        <h1>Sign Up</h1>
        <span ref={refs.signup} />
        <SignupForm />
      </div>
      <Footer />
    </>
  );
}