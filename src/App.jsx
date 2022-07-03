import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  const cards = data.map(item => {
        return (
            <Card 
                img={item.img}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
  return (
    <div>
       <Navbar />
      <Hero />
       {cards}
    </div>
  );
}

export default App;