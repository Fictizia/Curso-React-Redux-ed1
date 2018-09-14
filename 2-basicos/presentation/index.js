// Import React
import React from "react";
// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Quote, Slide } from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Welcome } from "./welcome";
import { Jsx } from "./jsx";
import { Element } from "./element";
import { Component } from "./component";
import { Props } from "./props";
import { State } from "./state";
import { Lifecicle } from "./lifecicle";
import { Events } from "./events";
import { Lists } from "./lists";
import { Forms } from "./forms";
import { Lifting } from "./lifting";
import { Composition } from "./composition";
import { Conditionals } from "./conditionals";

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
          <Jsx />
        </Slide>

        <Slide transition={["slide"]}>
          <Element />
        </Slide>

        <Slide transition={["slide"]}>
          <Component />
        </Slide>

        <Slide transition={["slide"]}>
          <Props />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Crea tu curriculum</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <State />
        </Slide>

        <Slide transition={["slide"]}>
          <Lifecicle />
        </Slide>

        <Slide transition={["slide"]}>
          <Events />
        </Slide>

        <Slide transition={["slide"]}>
          <Conditionals />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Contador de personas</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Lists />
        </Slide>

        <Slide transition={["slide"]}>
          <Forms />
        </Slide>

        <Slide transition={["slide"]}>
          <Lifting />
        </Slide>

        <Slide transition={["slide"]}>
          <Composition />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Calculadora</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
