import Axios from "axios";
import { APP_ID, APP_KEY, BASE_URL } from "../constants/config";

export const fetchRecipes = async (query) => {
  const response = await Axios.get(
    `${BASE_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
  );
  return response.data.hits;
};