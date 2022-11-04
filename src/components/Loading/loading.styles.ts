import styled from "styled-components";
import ReactLoading from "react-loading";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const LoadingComponent = styled(ReactLoading)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
