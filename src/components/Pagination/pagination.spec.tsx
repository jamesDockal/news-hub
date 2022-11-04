import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pagination } from "./pagination.component";

describe("Home Page", () => {
  it("should render buttons with the number of the page", async () => {
    const totalCountOfRegisters = 20;
    const registersPerPage = 10;
    render(
      <Pagination
        onPageChange={() => {}}
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={registersPerPage}
      />
    );

    expect(screen.getByLabelText("page-1")).toBeInTheDocument();
    expect(screen.getByLabelText("page-2")).toBeInTheDocument();
  });

  it("should render '...' if the count of register is too large", async () => {
    const totalCountOfRegisters = 200;
    const registersPerPage = 10;
    render(
      <Pagination
        onPageChange={() => {}}
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={registersPerPage}
      />
    );
    const elipses = screen.getAllByText("...");
    elipses.forEach((elipse) => {
      expect(elipse).toBeInTheDocument();
    });
  });

  it("should change the current page on button click", async () => {
    const totalCountOfRegisters = 200;
    const registersPerPage = 10;
    let currentPage = 1;
    render(
      <Pagination
        onPageChange={(newPage) => {
          currentPage = newPage;
        }}
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={registersPerPage}
        currentPage={currentPage}
      />
    );

    const button2 = screen.getByLabelText("page-2");
    userEvent.click(button2);

    expect(currentPage).toBe(2);
  });
});
