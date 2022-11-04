import { render, screen } from "@testing-library/react";
import { newsApi } from "../../services/newsApi";

import { Card } from "./card.component";
import { Article } from "../../dto/article.dto";

describe("Home Page", () => {
  it("should render the title of the article", async () => {
    const title = "any_title";
    render(
      <Card
        article={
          {
            title,
            publishedAt: "2022-11-03T23:50:48Z",
          } as Article
        }
      />
    );

    const card = screen.getByText(title);
    expect(card).toBeInTheDocument();
  });

  it("should render the author of the article", async () => {
    const author = "any_author";
    render(
      <Card
        article={
          {
            author,
            publishedAt: "2022-11-03T23:50:48Z",
          } as Article
        }
      />
    );

    const card = screen.getByText(author);
    expect(card).toBeInTheDocument();
  });

  it("should render the publish date of the article formatted", async () => {
    const publishedAt = "2022-11-03T23:50:48Z";

    render(
      <Card
        article={
          {
            publishedAt,
          } as Article
        }
      />
    );
    const formattedDate = "Dia 03 de November, às 20:50h";
    const card = screen.getByText(formattedDate);
    expect(card).toBeInTheDocument();
  });
});
