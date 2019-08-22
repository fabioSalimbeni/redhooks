/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Heading, CodePane } from "spectacle";

const Context = () => (
  <>
    <Heading size={4} textColor="secondary">
      Use context in components
    </Heading>
    <div>
      <CodePane
        theme="dark"
        source={require("!raw-loader!./code_examples/contextInComponents.example")}
        lang="js"
      />
    </div>
  </>
);

export default Context;
