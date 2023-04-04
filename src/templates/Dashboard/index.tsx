import { useState } from "react";
import Modal from "react-modal";
import { useQuery } from "react-query";

import {
  Conteiner,
  ModalButton,
  ModalList,
  StyledButton,
  StyledImage,
  StyledList,
  StyledModal,
} from "./styles";

import { getFruitslist, ListFruitsResponse } from "services/request";

const Dashboard = () => {
  const [selectedFruit, setSelectedFruit] = useState<ListFruitsResponse | null>(
    null
  );

  const fetchFruitsList = async () => {
    try {
      const { data } = await getFruitslist();
      return data;
    } catch {
      //do nothing
    }
  };

  const { data } = useQuery({
    queryKey: ["fruits"],
    queryFn: fetchFruitsList,
  });

  const handleSelectFruit = (fruit: ListFruitsResponse) => {
    setSelectedFruit(fruit);
  };

  return (
    <Conteiner>
      {data?.map((fruit) => (
        <StyledList key={fruit.name}>
          <span>{fruit.name}</span>
          <StyledImage src={fruit.photo} alt="" />
          <StyledButton onClick={() => handleSelectFruit(fruit)}>
            Ver Detalhes
          </StyledButton>
        </StyledList>
      ))}
      <Modal
        isOpen={selectedFruit !== null}
        onRequestClose={() => setSelectedFruit(null)}
      >
        {selectedFruit && (
          <StyledModal>
            <h1>{selectedFruit.name}</h1>
            <img src={selectedFruit.photo} alt="" />
            <ModalList>
              <span> calories: {selectedFruit.calories}</span>
              <span> protein: {selectedFruit.calories}</span>
              <span> carbohydrates: {selectedFruit.calories}</span>
              <span> fiber: {selectedFruit.fiber}</span>
              <span> fat: {selectedFruit.blubber}</span>
              <span> portion: {selectedFruit.portion}</span>
            </ModalList>
            <ModalButton onClick={() => setSelectedFruit(null)}>
              Voltar
            </ModalButton>
          </StyledModal>
        )}
      </Modal>
    </Conteiner>
  );
};

export default Dashboard;
