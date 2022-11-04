import React from "react";
import { Container, LoadingComponent } from "./loading.styles";

export const Loading: React.FC = () => {
  return (
    <Container data-testid="loading">
      <LoadingComponent />
    </Container>
  );
};
