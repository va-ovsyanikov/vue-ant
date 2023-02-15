import axios from "axios";

const URL = " http://localhost";

export const request = async (method, url, data) => {
  const response = await axios({ method: method, url: `${URL}:${url}`, data });
  return response;
};
