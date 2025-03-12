import React, { useEffect } from "react";
import Home from "./Pages/Home";

const App = () => {
  const getMusic = async () => {
    const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'df4d46d554mshe3d9e770cb00891p11f158jsn17ae7fc2fc3e',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMusic();
  }, []);

  return (
    
    <div>
      <Home />
    </div>
  );
};

export default App
