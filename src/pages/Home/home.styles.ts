import styled from "styled-components";

export const Articles = styled.div`
  background-color: ${({ theme }) => theme.gray_900};

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 4rem;
`;
