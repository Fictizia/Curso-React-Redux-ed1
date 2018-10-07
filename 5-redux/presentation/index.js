// Import React
import React from "react";
// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Quote, Slide } from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Welcome } from "./welcome";
import { Principle1 } from "./principle1";
import { Principle2 } from "./principle2";
import { Principle3 } from "./principle3";
import { Pure } from "./pure";
import { Middlewares } from "./middlewares";
import { Sideeffects } from "./sideeffects";

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
          <Principle1 />
        </Slide>

        <Slide transition={["slide"]}>
          <Principle2 />
        </Slide>

        <Slide transition={["slide"]}>
          <Pure />
        </Slide>

        <Slide transition={["slide"]}>
          <Principle3 />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Añade Redux a la calculadora</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Middlewares />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Crea middlewares: delay, throttling</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Sideeffects />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Crea una aplicación del tiempo</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
