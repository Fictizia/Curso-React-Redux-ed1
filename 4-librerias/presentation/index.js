// Import React
import React from "react";
// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Quote, Slide } from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Welcome } from "./welcome";
import { Styleguidist } from "./styleguidist";
import { ReactRouter } from "./reactRouter";
import { MaterialUi } from "./materialui";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#e7eaeb",
    secondary: "#1b2123",
    tertiary: "#00b5ac",
    quaternary: "#cc325b"
  },
  {
    primary:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Fira Sans,Helvetica Neue,sans-serif",
    secondary:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Fira Sans,Helvetica Neue,sans-serif"
  }
);

export const PRIMARY = "primary";
export const SECONDARY = "secondary";
export const TERTIARY = "tertiary";
export const QUATERNARY = "quaternary";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
        bgColor="quaternary"
      >
        <Slide transition={["zoom"]}>
          <Welcome />
        </Slide>

        <Slide transition={["slide"]}>
          <ReactRouter />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Crea una landing page de un producto</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <MaterialUi />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Recrea alguna interfaz que use Material</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Styleguidist />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Publica una guía con componentes básicos</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
