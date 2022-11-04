import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
