// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { What } from "./what";
import { Welcome } from "./welcome";
import { Setup } from "./setup";
import { OverviewReact } from "./overview-react";
import { OverviewCode } from "./overview-code";
import { OverviewData } from "./overview-data";
import { OverviewInteractive } from "./overview-interactive";
import { OverviewState } from "./overview-state";
import { Tools } from "./tools";
import { CompletingLifting } from "./completing-lifting";
import { CompletingFunctional } from "./completing-functional";
import { CompletingImmutability } from "./completing-immutability";
import { CompletingTurns } from "./completing-turns";
import { CompletingWinner } from "./completing-winner";
import { TimeHistory } from "./time-history";
import { TimeLifting } from "./time-lifting";
import { TimePast } from "./time-past";
import { TimeKey } from "./time-key";
import { TimeJump } from "./time-jump";
import { TimeCurrent } from "./time-current";
import { Extra } from "./extra";
import { Intro } from "./intro";

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
          <Intro />
        </Slide>

        <Slide bgColor={SECONDARY} transition={["slide"]}>
          <What />
        </Slide>

        <Slide transition={["slide"]}>
          <Setup />
        </Slide>

        <Slide transition={["slide"]}>
          <OverviewReact />
        </Slide>
        <Slide bgColor={TERTIARY} transition={["slide"]}>
          <OverviewCode />
        </Slide>
        <Slide transition={["slide"]}>
          <OverviewData />
        </Slide>
        <Slide transition={["slide"]}>
          <OverviewInteractive />
        </Slide>
        <Slide transition={["slide"]}>
          <OverviewState />
        </Slide>
        <Slide transition={["slide"]}>
          <Tools />
        </Slide>

        <Slide transition={["slide"]}>
          <CompletingLifting />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingImmutability />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingFunctional />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingTurns />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingWinner />
        </Slide>

        <Slide transition={["slide"]}>
          <TimeHistory />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeLifting />
        </Slide>
        <Slide transition={["slide"]}>
          <TimePast />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeKey />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeJump />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeCurrent />
        </Slide>

        <Slide transition={["zoom"]}>
          <Extra />
        </Slide>
      </Deck>
    );
  }
}

/*return (
		  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
			<Slide transition={["zoom"]} bgColor="primary">
			  <Heading size={1} fit caps lineHeight={1} textColor="secondary">
				Spectacle Boilerplate
			  </Heading>
			  <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
				open the presentation/index.js file to get started
			  </Text>
			</Slide>
			<Slide transition={["fade"]} bgColor="tertiary">
			  <Heading size={6} textColor="primary" caps>Typography</Heading>
			  <Heading size={1} textColor="secondary">Heading 1</Heading>
			  <Heading size={2} textColor="secondary">Heading 2</Heading>
			  <Heading size={3} textColor="secondary">Heading 3</Heading>
			  <Heading size={4} textColor="secondary">Heading 4</Heading>
			  <Heading size={5} textColor="secondary">Heading 5</Heading>
			  <Text size={6} textColor="secondary">Standard text</Text>
			</Slide>
			<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
			  <Heading size={6} textColor="secondary" caps>Standard List</Heading>
			  <List>
				<ListItem>Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
				<ListItem>Item 4</ListItem>
			  </List>
			</Slide>
			<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
			  <BlockQuote>
				<Quote>Example Quote</Quote>
				<Cite>Author</Cite>
			  </BlockQuote>
			</Slide>
		  </Deck>
		);*/
