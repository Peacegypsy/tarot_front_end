import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Card from './components/Card';



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
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
  return <h2>Home</h2>;
}

function PawLayout() {
  const [cardsData, setCardsData] = useState([]);
  const [cardText, showCardText] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/layout/paw`)
      .then(response => {
        setCardsData(response.data)
      })
      .catch((error) => {
        console.log('The value of error is:', error);
      })
  }, []);

  return (
    <div>The Paw:
      <div className='paw-layout'>
        <ol className="wrapper">   {cardsData.map((card, index) => (
          <li key={index} className={'box' + ' ' + 'a' + index}>
            {card.card_name}
            {cardText.show ? <div><p>{card.name}</p>
            </div>:<div><p>{card.card_reversed}{card.card_upright}</p></div>}
          </li>
        ))
        }
          <button onClick={() => { showCardText({ show: !cardText.show }) }}>{cardText.show ? 'Show' : 'Done'} </button>
        </ol >
      </div >
    </div >
  )
}



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