import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;

  span {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const ModalList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;

  span {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled.button`
  background: red;
  font-weight: bold;
  border: none;
  height: 40px;
  color: #ffff;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ModalButton = styled.button`
  background: red;
  font-weight: bold;
  border: none;
  height: 40px;
  width: 100px;
  color: #ffff;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
