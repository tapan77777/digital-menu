// frontend/src/components/MenuList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
