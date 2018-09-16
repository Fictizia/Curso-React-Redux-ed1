import React from "react";
import { Heading, Text } from "spectacle";
import { TERTIARY } from "./index";

export class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading fit caps>
          Curso de React + Redux
        </Heading>
        <Heading fit caps textColor="secondary">
          Capítulo IV: Librerías imprescindibles
        </Heading>
        <Text margin="20px 0 0" textColor={TERTIARY}>
          Javier Vidal. 2018. Fictizia
        </Text>
      </React.Fragment>
    );
  }
}
