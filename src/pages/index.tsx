import router from "next/router";

import { Conteiner, StyledButton, Tittle } from "../styles/homeStyles";

const Home = () => {
  return (
    <Conteiner>
      <Tittle>Listagem de Frutas</Tittle>
      <StyledButton onClick={() => router.push(`/tittle`)}>
        Ver frutas disponiveis
      </StyledButton>
    </Conteiner>
  );
};
export default Home;
