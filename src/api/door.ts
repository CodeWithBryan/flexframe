import { AxiosResponse } from "axios";
import api from ".";

export const unlockDoor = (): Promise<AxiosResponse> => {
  return api.get('/door/access');
};