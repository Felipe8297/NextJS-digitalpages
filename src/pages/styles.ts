import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Tittle = styled.h1`
  font-size: 80px;
`;

export const StyledButton = styled.button`
  background: violet;
  border: none;
  width: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30px;
  color: #ffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: purple;
  }
`;
