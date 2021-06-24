import React, { Component } from 'react';

function Header() {
  return (
    <h2>我是Header组件</h2>
  );
}

function Banner() {
  return (
    <h3>我是Banner组件</h3>
  );
}

function ProductList() {
  return (
    <div>
      <ul>
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
        <li>商品4</li>
        <li>商品5</li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}


function Footer() {
  return (
    <h2>我是Footer组件</h2>
  );
}

export default class Com01 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
