import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { newsApi } from "../../services/newsApi";
import ReactDOM from "react-dom/client";

import { Home } from "./home.page";

describe("Home Page", () => {
  it("should call news api", async () => {
    jest.useFakeTimers();

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
});
