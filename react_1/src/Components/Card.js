import React, { useState } from 'react';
import '../App.css';

function App() {
  const [cards, setCards] = useState([
    {
      title: "Hello There",
      description: "This is a sample card component with props and an image.",
      imageUrl: "https://inmamamaggieskitchen.com/wp-content/uploads/2024/05/Strawberry-Cream-Cheese-Pastries-with-a-Sweet-Dusting.jpg"
    },
    {
      title: "Hello There",
      description: "This is a sample card component with props and an image.",
      imageUrl: "https://inmamamaggieskitchen.com/wp-content/uploads/2024/05/Strawberry-Cream-Cheese-Pastries-with-a-Sweet-Dusting.jpg"
    },
    {
      title: "Hello There",
      description: "This is a sample card component with props and an image.",
      imageUrl: "https://inmamamaggieskitchen.com/wp-content/uploads/2024/05/Strawberry-Cream-Cheese-Pastries-with-a-Sweet-Dusting.jpg"
    }
  ]);

  return (
    <div className="App">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          imageUrl={card.imageUrl} 
        />
      ))}
    </div>
  );
}

export default App;


