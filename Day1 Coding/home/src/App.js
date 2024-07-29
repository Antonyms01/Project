import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">eMart</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
        <div className="search-cart">
          <input type="text" placeholder="What are you looking for?" />
          <span className="icon">❤</span>
          <span className="icon">🛒</span>
        </div>
      </header>
      <main className="main">
        <div className="banner">
          <div className="banner-content">
            <p className="brand">Apple</p>
            <h1 className="product">iPhone 14 Series</h1>
            <h2 className="offer">Up to 10% off Voucher</h2>
            <a href="#shop" className="shop-now">Shop Now</a>
          </div>
          <div className="banner-image">
            <img src="path/to/iphone14.jpg" alt="iPhone 14" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;