import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "92e3b140dcmshf09d9d396fdd026p1b6195jsna00f4b6319d3",
    },
  });
  return data;
};
