import React from 'react';
import './App.css';          
import Header from './components/Header';
import Footer from './components/Footer';
// https://medium.com/better-programming/how-to-build-a-serverless-api-with-dynamodb-aws-lambda-and-api-gateway-d61ac63c27dd

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
