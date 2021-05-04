//Reactのコンポーネントを使用する場合は必須（JSXのみの場合は必須ではない）
import React from "react";
//htmlDOMを使用するためのライブラリ
import ReactDom from "react-dom";
import App from "./App.js";

// JSX記法；JavaScript内にhtmlタグを埋め込む記法
/** コンポーネント化してApp.jsへ移動
const App = () => {
 return (
//  ホントはこれ<React.Fragment>。下記は短縮形

 <>
  <h1>こんにちは</h1>
  <p>おげんきですか？</p>
 </>

// </React.Fragment>
 );
};
*/
//render(<反映したいコンポーネント>,<反映する先のDOM要素>)
ReactDom.render(<App />, document.getElementById("root"));
