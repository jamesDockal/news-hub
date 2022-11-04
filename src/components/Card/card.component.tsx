import { format, parseISO } from "date-fns";
import React from "react";
import { Article } from "../../dto/article.dto";
import {
  Container,
  Content,
  Metadata,
  PublishDate,
  Thumbnail,
  Title,
  Author,
} from "./card.styles";

type Props = {
  article: Article;
};

export const Card: React.FC<Props> = ({ article }) => {
  const formattedDate =
    article.publishedAt &&
    format(parseISO(article.publishedAt), "'Dia' dd 'de' MMMM', às ' HH:mm'h'");

  return (
    <Container href={article.url} target="_blank">
      {article.urlToImage && (
        <Thumbnail src={article.urlToImage} alt={article.title} />
      )}
      <div>
        <div>
          <Title>{article.title}</Title>
        </div>
        <Metadata>
          <PublishDate>{formattedDate}</PublishDate>&nbsp;
          {article.author && (
            <>
              - Escrito Por <Author>&nbsp;{article.author}</Author>
            </>
          )}
        </Metadata>
        {article.description && <Content>{article.description}</Content>}
      </div>
    </Container>
  );
};
