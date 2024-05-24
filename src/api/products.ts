import { AxiosResponse } from "axios";
import api from ".";

export const getProducts = (subscriptions = false): Promise<AxiosResponse> => {
  return api.get(`/products?subscriptions=${subscriptions}`).then((response) => response.data);
};