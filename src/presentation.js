// Import React
import React from "react";
import Intro from "./intro";
import Me from "./me";
import Problem from "./problem";
import Solution from "./solution";
import Store from "./store";
import Context from "./context";
import ContextInComponents from "./contextInComponents";
import DispatchingActions from "./dispatchingActions";
import DispatchFromView from "./dispatchFromView";
import ToTheStore from "./toTheStore";
import { ConclusionOne, ConclusionTwo, ConclusionThree } from "./conclusions";
import Thanks from "./thanks";
// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Quote, Slide, S } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#ffe6e8",
    secondary: "#bc3f4e",
    tertiary: "#d84a57",
    quaternary: "#8e334d"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["slide"]}
          bgColor="primary"
          align="center flex-start"
        >
          <Intro />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <Me />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          align="center flex-start"
        >
          <Problem />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <Solution />
        </Slide>
        <Slide transition={["fade"]} bgColor="quaternary">
          <BlockQuote>
            <Quote textSize={44}>
              <S type="bold italic">
                <div>I choose a lazy person to do a hard job.</div>
                <br />
                <div>Because a lazy person will find an easy way to do it.</div>
              </S>
            </Quote>
            <Cite textColor="primary">Bill Gates</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <Store />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <Context />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <ContextInComponents />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <DispatchingActions />
        </Slide>
        <Slide transition={["fade"]} bgColor="quaternary">
          <BlockQuote>
            <Quote textSize={44}>
              <S type="bold italic">
                <div>Break the rules, not the law, but break the rules.</div>
                <br />
                <div>
                  It is impossible to be a maverick or a true original if you're
                  too well behaved and don't want to break the rules.
                </div>
              </S>
            </Quote>
            <Cite textColor="primary">Arnold Schwarzenegger</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <DispatchFromView />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <ToTheStore />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <ConclusionOne />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <ConclusionTwo />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          align="center flex-start"
        >
          <ConclusionThree />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Thanks />
        </Slide>
      </Deck>
    );
  }
}
