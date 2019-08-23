import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="container">
        <div class="container__row">
          <div class="container__col-12 hidden-sm-down">hidden below 576</div>
        </div>
        <div class="container__row">
          <div class="container__col-6">col-6</div>
          <div class="container__col-6 hidden">hidden always</div>
        </div>
        <div class="container__row">
          <div class="container__col-4 container__col-lg-6 container__col-lg-offset-2">col-4 col-lg-6 col-lg-offset-2</div>
          <div class="container__col-4 container__col-lg-6 container__col-lg-offset-2">col-4 col-lg-6 col-lg-offset-2</div>
          <div class="container__col-4 hidden-lg-up">col-4 hidden in lg</div>
        </div>
        <div class="container__row">
          <div class="container__col-12 container__col-md-3">col-md-3 col-12</div>
          <div class="container__col-12 container__col-md-3">col-md-3 col-12</div>
          <div class="container__col-12 container__col-md-3 hidden-lg-up">hidden in 991</div>
          <div class="container__col-12 container__col-md-3">col-md-3 col-12</div>
        </div>
        <div class="container__row">
          <div class="container__col-2">col-2</div>
          <div class="container__col-2">col-2</div>
          <div class="container__col-2">col-2</div>
          <div class="container__col-2">col-2</div>
          <div class="container__col-2">col-2</div>
          <div class="container__col-2">col-2</div>
        </div>
        <div class="container__row">
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
          <div class="container__col-1">col-1</div>
        </div>
        <div class="container__row">
          <div class="container__col-1">col-1</div>
          <div class="container__col-2">col-2</div>
          <div class="container__col-6">col-6</div>
          <div class="container__col-2">col-2</div>
          <div class="container__col-1">col-1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
