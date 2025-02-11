// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #ff8e53, #fe6b8b);  /* Gradiente de fundo */
  font-family: 'Arial', sans-serif;
  padding: 0 20px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  width: 300px;
  max-width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow:rgb(105, 85, 89);
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #fe6b8b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff8e53;
  }
`;

export const Results = styled.div`
  margin-top: 30px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;
