import { AxiosResponse } from "axios";
import api from ".";

export const unlockDoor = (latitude: number, longitude: number): Promise<AxiosResponse> => {
  return api.get(`/door/access/${latitude}/${longitude}`);
};