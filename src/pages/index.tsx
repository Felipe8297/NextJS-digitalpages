import { useRouter } from "next/router";

import { Conteiner, StyledButton, Tittle } from "./styles";

export default function Home() {
  const { push } = useRouter();

  return (
    <Conteiner>
      <Tittle>Listagem de Frutas</Tittle>
      <StyledButton onClick={() => push(`/tittle`)}>
        Ver frutas disponiveis
      </StyledButton>
    </Conteiner>
  );
}
