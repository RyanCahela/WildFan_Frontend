import React from "react";
import { Container } from "@chakra-ui/react";
import NavButton from "../Components/NavButton";

const CreateExercise = () => {
  return (
    <Container>
      <header>
        <NavButton href="/">Back</NavButton>
        <h1>Create Exercise</h1>
      </header>
    </Container>
  );
};

export default CreateExercise;
