import React, { useEffect, useState } from "react";
import { newsApi } from "../../services/newsApi";

export const Home: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsApi.get("/top-headlines?country=br").then(({ data }) => {
      setNews(data);
    });
  }, []);

  return <div data-testid="teste">getting Started</div>;
};
