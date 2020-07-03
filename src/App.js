import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/ui/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters`);

      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
