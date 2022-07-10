import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  const cards = data.map(item => {
    /*Warning: Each child in a list should have a unique "key" prop. Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information. at Card (exe1.bundle.js:194:29) at App  This happens when using data.map elements*/
        return (
            <Card 
                key={item.id} /*This gets rid of the warning above*/
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
       <section className="cards-list">
       {cards}
       </section>
    </div>
  );
}

export default App;