/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Heading, CodePane } from "spectacle";

const Context = () => (
  <>
    <Heading size={3} textColor="secondary" lineHeight={3}>
      Adding the app context
    </Heading>
    <div>
      <CodePane
        theme="dark"
        source={require("!raw-loader!./code_examples/context.example")}
        lang="js"
      />
    </div>
    <br />
    <div>
      <CodePane
        theme="dark"
        source={require("!raw-loader!./code_examples/provider.example")}
        lang="js"
      />
    </div>
  </>
);

export default Context;
