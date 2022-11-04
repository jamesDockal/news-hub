import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

type PaginationButtonProps = {
  isCurrent?: boolean;
};

export const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.pink : theme.gray_400};

  outline: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;

  &:hover {
    filter: opacity(0.9);
  }
`;
