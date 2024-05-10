import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const CategoryButton = styled.button`
  background-color: none;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FCD667;
  }
`;

export const CategoryIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;