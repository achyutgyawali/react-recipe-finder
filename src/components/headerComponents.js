import styled from "styled-components";
export const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;
export const AppIcon = styled.img`
width: 36px;
height: 36px;
margin: 15px;
`;
export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`;
export const SearchIcon = styled.img`
width: 32px;
height: 32px;
`;
export const SearchInput = styled.input`
border: none;
position: relative;
outline: none;
margin-left: 15px;
font-size: 16px;
font-weight: bold;
width: 100%;
`;
export const HeaderContainer = styled.div`
position: sticky;
top:0;
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;