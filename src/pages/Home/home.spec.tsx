import { render, screen } from "@testing-library/react";
import { newsApi } from "../../services/newsApi";

import { Home } from "./home.page";
import { Article } from "../../dto/article.dto";

describe("Home Page", () => {
  it("should call news api", async () => {
    const spy = jest.spyOn(newsApi, "get").mockImplementation(async () => {
      return await new Promise((resolve) =>
        resolve({
          data: [],
        })
      );
    });

    render(<Home />);

    expect(spy).toHaveBeenCalled();
  });

  it("should render Card component with title for each article", async () => {
    jest.spyOn(newsApi, "get").mockImplementation(async () => {
      return await new Promise((resolve) =>
        resolve({
          data: {
            articles: [
              {
                title: "any_title",
              } as Article,
            ],
          },
        })
      );
    });

    render(<Home />);

    expect(await screen.findByText("any_title")).toBeInTheDocument();
  });

  it("should render Pagination component", async () => {
    jest.spyOn(newsApi, "get").mockImplementation(async () => {
      return await new Promise((resolve) =>
        resolve({
          data: {
            articles: [
              {
                title: "any_title",
              } as Article,
            ],
          },
        })
      );
    });

    render(<Home />);

    expect(screen.getByLabelText("pagination")).toBeInTheDocument();
  });
});
