import React from 'react';
import './App.css';          
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import GETRequest from './components/GETRequest';
import POSTRequest from './components/POSTRequest';
// https://medium.com/better-programming/how-to-build-a-serverless-api-with-dynamodb-aws-lambda-and-api-gateway-d61ac63c27dd

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <GETRequest />
      <POSTRequest />
      <Footer />
    </div>
  );
}

export default App;
