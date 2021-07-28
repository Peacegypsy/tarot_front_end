import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
//import PawLayout from './components/Layout';
// import PropTypes from 'prop-types';


export default function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul className="router-area">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/layout/paw">Paw Layout</Link>
            </li>
            <li>
              <Link to="/cards">All Cards</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/layout/paw">
            <PawLayout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <header className="App-header"><h2>Welcome to the Realm of the Cat</h2> <img src={"https://cat-tarot-cards.herokuapp.com/static/images/cover.jpeg"} alt="cat"/></header>;
}

function PawLayout( ){
  const [cardsData, setCardsData] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/layout/paw`)
      .then(response => {
        setCardsData(response.data)
      })
      .catch((error) => {
        console.log('The value of error is:', error);
      })
  }, []);
  const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px"
  };
  return (
    <div className="paw-layout">The Paw:
        {cardsData.map((card)=>(
          <div>{card.card_name} {card.card_general}
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div className='CardFront' style={CardStyle} onMouseEnter={()=>setIsFlipped((prev) => !prev)}>
              </div >
              <div onMouseLeave={() => setIsFlipped((prev) => !prev)}  className="CardBack">
              {card.card_upright} {card.card_reversed}
              </div>
            </ReactCardFlip>
          </div>
        ))}
    </div >
  )
}

      /*{/* <div onMouseEnter={() => setIsFlipped((prev) => !prev)}
          className="cardFront">
          <img src={"https://cat-tarot-cards.herokuapp.com/" + tarCard["image-location"]} alt="cat" />
      </div>
      <div onMouseLeave={() => setIsFlipped((prev) => !prev)} className="cardBack">
        <h5>This is card back</h5>
      </div> */
  //   </ReactCardFlip>
  // );
  // {cardsData.map((card, index) => (
  //   <div key={index} className={'box' + ' ' + 'a' + index}>
  //     {card.card_name}
  //   </div>

  // ))
  // }


function Cards() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
      .then(response => {
        setCardsData(response.data)
      })
      .catch((error) => {
        console.log('The value of error is:', error);
      })
  }, []);

  return (
    <div>Cards:
      <div className='cards-layout'>
        <div className="card-box">   {cardsData.map((card, index) => (
          <div key={index} className="card">{card.card_name}
            <div>{card.card_general} </div>
            <img src={"https://cat-tarot-cards.herokuapp.com/" + card["image-location"]} alt="" /> </div>
        ))}
        </div>
      </div>
    </div>
  )
}

// import { useState } from 'react';
// import './App.css';
// import Card from './components/Card'
// import PawLayout from './components/Layout'
// import CardsLayout from './components/CardsLayout';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Wisdom from the Cat Realm</h2>
//       </header>
//       {/* <section className='layout-area'>
//         <PawLayout />
//       </section> */}
//       <section className="cards-layout-area">
//         <CardsLayout />
//       </section>
//     </div>
//   );
// }

// export default App;