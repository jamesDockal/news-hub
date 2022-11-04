import { render, screen, waitFor } from "@testing-library/react";
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

    await waitFor(() => {
      return render(<Home />);
    });

    await waitFor(() => {
      expect(screen.getByLabelText("pagination")).toBeInTheDocument();
    });
  });

  it("should render Loading component", async () => {
    jest.spyOn(newsApi, "get").mockImplementation(async () => {
      return await new Promise((resolve) =>
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          resolve({
            data: {
              articles: [],
            },
          }),
            3000;
        })
      );
    });

    render(<Home />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
