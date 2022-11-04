import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/card.component";
import { Article } from "../../dto/article.dto";
import { newsApi } from "../../services/newsApi";
import { Articles } from "./home.styles";

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    newsApi.get("/top-headlines?country=br").then(({ data }) => {
      setArticles(data.articles);
    });
  }, []);
  console.log("articles", articles);

  return (
    <div>
      <Articles>
        {articles.map((article) => (
          <Card article={article} key={article.title} />
        ))}
      </Articles>
    </div>
  );
};
