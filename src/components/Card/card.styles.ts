import styled from "styled-components";

export const Container = styled.a`
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 200px;
`;

export const Title = styled.a`
  font-size: 1.25rem;
  font-weight: bolder;
  cursor: pointer;
  color: ${({ theme }) => theme.pink};
`;

export const Metadata = styled.div`
  display: flex;
  color: ${({ theme }) => theme.gray_400};
`;

export const Author = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.pink};
`;

export const PublishDate = styled.div``;

export const Content = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.gray_50};
`;
