import axios from "axios";
import { apiKey, baseUrl } from "../constants";
import { IExercises } from "../interfaces/exercises";

const apiCall = async (url: string, params?: object): Promise<IExercises[]> => {
  try {
    const opciones = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": apiKey,
      },
    };
    const response = await axios.request(opciones);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchExercisesBodyPart = async (
  bodyPart: string
): Promise<IExercises[]> => {
  const data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
