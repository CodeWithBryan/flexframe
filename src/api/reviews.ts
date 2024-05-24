import { AxiosResponse } from "axios";
import api from ".";

export const fetchReviewCount = (): Promise<AxiosResponse> => {
  return api.get('/reviews/count');
};