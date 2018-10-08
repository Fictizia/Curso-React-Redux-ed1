// Import React
import React from "react";
// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Welcome } from "./welcome";
import { Accesibility } from "./accesibility";
import { Context } from "./context";
import { ErrorBoundaries } from "./errorBoundaries";
import { ForwardingRefs } from "./forwardingRefs";
import { Fragments } from "./fragments";
import { HighOrderComponent } from "./highOrderComponent";
import { OtherLibraries } from "./otherLibraries";
import { Optimizing } from "./optimizing";
import { Portals } from "./portals";
import { Reconciliation } from "./reconciliation";
import { Refs } from "./refs";
import { RenderProps } from "./renderProps";
import { StaticTypeChecking } from "./staticTypeChecking";
import { StrictMode } from "./strictMode";
import { PropTypes } from "./propTypes";
import { Uncontrolled } from "./uncontrolled";
import { WebComponents } from "./webComponents";
import BlockQuote from "spectacle/es/components/block-quote";
import Quote from "spectacle/es/components/quote";
import Cite from "spectacle/es/components/cite";

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
          <Fragments />
        </Slide>

        <Slide transition={["slide"]}>
          <Accesibility />
        </Slide>

        <Slide transition={["slide"]}>
          <Context />
        </Slide>

        <Slide transition={["slide"]}>
          <ErrorBoundaries />
        </Slide>

        <Slide transition={["slide"]}>
          <HighOrderComponent />
        </Slide>

        <Slide transition={["slide"]}>
          <OtherLibraries />
        </Slide>

        <Slide transition={["slide"]}>
          <WebComponents />
        </Slide>

        <Slide transition={["slide"]}>
          <Reconciliation />
        </Slide>

        <Slide transition={["slide"]}>
          <Optimizing />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Reloj que sólo se actualiza cada segundo</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Portals />
        </Slide>

        <Slide transition={["slide"]}>
          <Refs />
        </Slide>

        <Slide transition={["slide"]}>
          <Uncontrolled />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Pequeño reproductor de audio</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <ForwardingRefs />
        </Slide>

        <Slide transition={["slide"]}>
          <RenderProps />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Reloj que muestra la hora local (AM/PM)</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <StaticTypeChecking />
        </Slide>

        <Slide transition={["slide"]}>
          <PropTypes />
        </Slide>

        <Slide transition={["slide"]}>
          <StrictMode />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Pequeño UI Kit con styleguidist + Semantic React</Quote>
            <Cite>Ejercicio</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
