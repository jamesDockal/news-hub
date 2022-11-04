import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/card.component";
import { Loading } from "../../components/Loading/loading.component";
import { Pagination } from "../../components/Pagination/pagination.component";
import { Article } from "../../dto/article.dto";
import { newsApi } from "../../services/newsApi";
import { Articles } from "./home.styles";

type HeadLine = {
  articles: Article[];
  totalResults: number;
};

export const Home: React.FC = () => {
  const [headlines, setHeadlines] = useState<HeadLine>({} as HeadLine);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    newsApi
      .get(`/top-headlines?country=br&page=${currentPage}&pageSize=10`)
      .then(({ data }) => {
        setIsLoading(false);
        setHeadlines(data);
      });
  }, [currentPage]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Articles>
          {headlines.articles?.map((article) => (
            <Card article={article} key={article.title} />
          ))}

          <Pagination
            onPageChange={setCurrentPage}
            totalCountOfRegisters={headlines.totalResults}
            currentPage={currentPage}
          />
        </Articles>
      )}
    </div>
  );
};
