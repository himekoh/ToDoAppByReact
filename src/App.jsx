//拡張子はjsxとする 理由；Reactのコンポーネントだということをわかりやすくするため
//コンポーネントの命名規則として先頭の文字を大文字にしなければならない
//例 ✕；app.jsx ○：App.jsx
import React from "react";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>おげんきですか？</p>
    </>
  );
};

//他のファイルでも使う関数であることを明記
export default App;
