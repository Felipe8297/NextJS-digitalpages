export type ListFruitsResponse = {
  name: string;
  calories: string;
  protein: string;
  carbohydrates: string;
  fiber: string;
  blubber: string;
  portion: string;
  photo: string;
};

import axios from "axios";

export const getFruitslist = () => {
  return axios<ListFruitsResponse[]>({
    method: "GET",
    url: "https://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json",
  });
};
