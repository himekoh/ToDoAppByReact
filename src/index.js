import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
 retrun (
  <React.Fragment>
    <h1>こんにちは</h1>
    <p>おげんきですか？</p>
 );
};

ReactDom.render(<App />, document.getElementById("root"));

