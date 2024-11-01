// src/pages/HomePage.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HomePage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await axios.get('/api/menu');
      setMenuItems(response.data);
    };
    fetchMenuItems();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
