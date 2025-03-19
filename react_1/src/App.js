import React from 'react';
import '../App.css';
import Card from './Components/Card'; // Make sure the folder name is spelled correctly

function App() {
  return (
    <div className="App">
      <Card 
        title="Hello There" 
        description="This is a sample card component with props and an image." 
        imageUrl={"https://inmamamaggieskitchen.com/wp-content/uploads/2024/05/Strawberry-Cream-Cheese-Pastries-with-a-Sweet-Dusting.jpg"} 
      />
            <Card 
        title="Hello There" 
        description="This is a sample card component with props and an image." 
        imageUrl={"https://inmamamaggieskitchen.com/wp-content/uploads/2024/05/Strawberry-Cream-Cheese-Pastries-with-a-Sweet-Dusting.jpg"} 
      />
      <Card 
        title="Hello There" 
        description="This is a sample card component with props and an image." 
        imageUrl={"https://inmamamaggieskitchen.com/wp-content/uploads/2024/05/Strawberry-Cream-Cheese-Pastries-with-a-Sweet-Dusting.jpg"} 
      />

    </div>
  );
}

export default App;
