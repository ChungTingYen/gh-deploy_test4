/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './app.scss';

// TODO React.Component, 但現在專案都不採用這樣的寫法了。
class MyComponent extends React.Component {
  render() {
    return <div className="react-component">這是ReactComponent組件</div>;
  }
}

// TODO
// Embedding Expressions in JSX
// https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
const FunctionalComponent = () => {
  const name = 'milkmidi';
  return (
    <div className="functional-component">
      <ul>
        <li>這是 Functional ComponentAA</li>
        <li>name:{name}</li>
        <li>今天日期： {new Date().toDateString()}</li>
        <li>1+1={1 + 1}</li>
      </ul>
    </div>
  );
};

// 練習
const FunctionalPractice = () => {
  const myname = 'allan';
  return (
    <div className="functional-practice">
      <ul>
        <li>這是functional-practice</li>
        <li>我的名字:{myname}</li>
        <li>今天:{new Date().toDateString()}</li>
        <li>第一次上react課程</li>
        <li>都聽不懂</li>
      </ul>
    </div>
  );
};

const Example2 = () => {
  return (
    <section data-name="Example02">
      <MyComponent />
      <FunctionalComponent />
      <FunctionalPractice />
    </section>
  );
};
export default Example2;
