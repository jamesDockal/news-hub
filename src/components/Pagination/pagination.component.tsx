import {
  ButtonsContainer,
  Container,
  PaginationButton,
} from "./pagination.styles";

interface Props {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, i) => i + from + 1)
    .filter((page) => page > 0);
}

export const Pagination: React.FC<Props> = ({
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange,
}) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Container aria-label="pagination">
      <div>
        <strong>{currentPage * 10 - 9}</strong> -{" "}
        <strong>
          {currentPage * 10 > totalCountOfRegisters
            ? totalCountOfRegisters
            : currentPage * 10}
        </strong>{" "}
        de <strong>{totalCountOfRegisters}</strong>
      </div>
      <ButtonsContainer>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton
              onClick={() => onPageChange(1)}
              aria-label={`page-1`}
              type="button"
            >
              {1}
            </PaginationButton>
            {currentPage > 2 + siblingsCount && (
              <span data-testid="pagination-elipse">...</span>
            )}
          </>
        )}

        {previousPages.map((page) => (
          <PaginationButton
            onClick={() => onPageChange(page)}
            aria-label={`page-${page}`}
            type="button"
            key={page}
          >
            {page}
          </PaginationButton>
        ))}

        <PaginationButton
          aria-label={`page-${currentPage}`}
          type="button"
          isCurrent
        >
          {currentPage}
        </PaginationButton>

        {nextPages.map((page) => (
          <PaginationButton
            onClick={() => onPageChange(page)}
            aria-label={`page-${page}`}
            type="button"
            key={page}
          >
            {page}
          </PaginationButton>
        ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <span data-testid="pagination-elipse">...</span>
            )}
            <PaginationButton
              onClick={() => onPageChange(lastPage)}
              aria-label={`page-${lastPage}`}
              type="button"
            >
              {lastPage}
            </PaginationButton>
          </>
        )}
      </ButtonsContainer>
    </Container>
  );
};
