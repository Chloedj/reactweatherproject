
import React from 'react';
import './App.css';
import Weather from './weather';

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather defaultCity="London"/>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Chloedj" target="_blank" rel="noreferrer"
          >Chloe Duggan-Jones</a
        >
        {" "}, is open souced on{" "}
        <a
          href="https://github.com/Chloedj/reactweatherproject"
          target="_blank" rel="noreferrer"
        >
          on GitHub</a
        >
        ,{" "}and{" "}
        <a
          href="https://splendorous-kulfi-ea79b5.netlify.app/"
          target="_blank" rel="noreferrer"
          >hosted on Netlify</a
        >
      </footer>
    </div>
  );
}

export default App;
